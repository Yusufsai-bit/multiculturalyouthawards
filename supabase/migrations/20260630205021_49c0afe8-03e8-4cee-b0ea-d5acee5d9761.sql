-- 1. Move SECURITY DEFINER role-check helpers out of the API-exposed public schema
CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE OR REPLACE FUNCTION private.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT private.has_role(auth.uid(), 'admin')
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.is_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION private.is_admin() TO authenticated, service_role;

-- 2. Repoint all admin policies on public tables to the private helper
ALTER POLICY "Admins manage categories" ON public.award_categories USING (private.is_admin()) WITH CHECK (private.is_admin());
ALTER POLICY "Admins manage award years" ON public.award_years USING (private.is_admin()) WITH CHECK (private.is_admin());
ALTER POLICY "Admins delete contact" ON public.contact_submissions USING (private.is_admin());
ALTER POLICY "Admins update contact" ON public.contact_submissions USING (private.is_admin()) WITH CHECK (private.is_admin());
ALTER POLICY "Admins view contact" ON public.contact_submissions USING (private.is_admin());
ALTER POLICY "Admins manage events" ON public.events USING (private.is_admin()) WITH CHECK (private.is_admin());
ALTER POLICY "Admins manage finalists" ON public.finalists USING (private.is_admin()) WITH CHECK (private.is_admin());
ALTER POLICY "Admins manage media" ON public.media_assets USING (private.is_admin()) WITH CHECK (private.is_admin());
ALTER POLICY "Admins delete subscribers" ON public.newsletter_subscribers USING (private.is_admin());
ALTER POLICY "Admins view subscribers" ON public.newsletter_subscribers USING (private.is_admin());
ALTER POLICY "Admins manage partners" ON public.partners USING (private.is_admin()) WITH CHECK (private.is_admin());
ALTER POLICY "Admins manage sponsors" ON public.sponsors USING (private.is_admin()) WITH CHECK (private.is_admin());
ALTER POLICY "Admins can manage roles" ON public.user_roles USING (private.is_admin()) WITH CHECK (private.is_admin());
ALTER POLICY "Admins can view roles" ON public.user_roles USING (private.is_admin());
ALTER POLICY "Admins manage winners" ON public.winners USING (private.is_admin()) WITH CHECK (private.is_admin());

-- 3. Repoint storage media policies to the private helper
ALTER POLICY "Admins can delete media files" ON storage.objects USING ((bucket_id = 'media'::text) AND private.is_admin());
ALTER POLICY "Admins can update media files" ON storage.objects USING ((bucket_id = 'media'::text) AND private.is_admin()) WITH CHECK ((bucket_id = 'media'::text) AND private.is_admin());
ALTER POLICY "Admins can upload media files" ON storage.objects WITH CHECK ((bucket_id = 'media'::text) AND private.is_admin());

-- 4. Drop the public-schema helpers now that nothing references them
DROP FUNCTION IF EXISTS public.is_admin();
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);

-- 5. Replace overly permissive "always true" INSERT policies with validated checks
ALTER POLICY "Anyone can submit contact" ON public.contact_submissions
WITH CHECK (
  char_length(name) BETWEEN 1 AND 200
  AND char_length(email) BETWEEN 3 AND 320
  AND email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  AND char_length(message) BETWEEN 1 AND 5000
  AND (phone IS NULL OR char_length(phone) <= 50)
  AND (subject IS NULL OR char_length(subject) <= 300)
  AND is_read = false
);

ALTER POLICY "Anyone can subscribe" ON public.newsletter_subscribers
WITH CHECK (
  char_length(email) BETWEEN 3 AND 320
  AND email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  AND (name IS NULL OR char_length(name) <= 200)
);