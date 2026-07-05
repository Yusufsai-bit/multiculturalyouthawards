import { useCurrentYear, useEvent } from "@/lib/queries";
import { siteContent } from "@/lib/siteContent";

type NominationsStatus = (typeof siteContent)["nominationsStatus"];

const VALID_STATUSES: NominationsStatus[] = ["open", "closed", "coming_soon"];

/**
 * Live site status, editable by staff in the admin dashboard.
 *
 * Reads the nominations status from the current award year and the event
 * date/location from that year's event record. Falls back to the values in
 * siteContent.ts while loading or if the database has no record, so the
 * site never renders empty.
 */
export const useSiteStatus = () => {
  const { data: currentYear } = useCurrentYear();
  const { data: event } = useEvent(currentYear?.id);

  const dbStatus = currentYear?.nominations_status as NominationsStatus | undefined;
  const nominationsStatus: NominationsStatus =
    dbStatus && VALID_STATUSES.includes(dbStatus)
      ? dbStatus
      : siteContent.nominationsStatus;

  return {
    nominationsStatus,
    eventDate: event?.event_date || siteContent.eventDate,
    eventLocation: event?.event_location || siteContent.eventLocation,
    currentYear: currentYear ?? null,
  };
};
