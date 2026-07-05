INSERT INTO public.award_years (year, is_current, nominations_status)
VALUES (2024, false, 'closed')
ON CONFLICT (year) DO NOTHING;

DELETE FROM public.award_categories
WHERE year_id = (SELECT id FROM public.award_years WHERE year = 2024);

DO $$
DECLARE
  yid UUID;
  cid UUID;
BEGIN
  SELECT id INTO yid FROM public.award_years WHERE year = 2024;

  -- 1. Young Influencer of the Year
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Young Influencer of the Year', 'Celebrates a young person who has used their platform or creative medium effectively to drive positive change and inspire others in the community.', 1) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Atena Kashani', 'Atena Kashani, an Iranian refugee, is a dedicated advocate for refugee rights with extensive experience in activism and community engagement. Since age 15, she has addressed issues affecting refugees and asylum seekers, using her personal journey to inform her advocacy. Atena is establishing "Refugee Hope Assistant", a nonprofit for migrants, and serves as an ambassador for the Refugee Council of Australia through the "Refugee Stories for Change" program. As a Youth Advisor for the Brotherhood of St Laurence, she promotes youth development initiatives, ensuring their voices are heard.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Nhat Minh Hoang', 'Minh is mobilising young people to tackle ethical and social issues in the tech sector through systemic advocacy. Recently, they engaged youth across Australia for insights on the ''Statutory Review of the Online Safety Act'', alongside a social media campaign. Minh also organised ''In Dialogue: Online Freedom or Safety'', empowering queer youth to co-design social media policies for Big Tech leaders, including the UN. As a member of the eSafety Commissioner’s Youth Council, Minh has contributed to consultations with parliament and presented to over 150 public servants.', 1);

  -- 2. Inspirational Young Person of the Year
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Inspirational Young Person of the Year', 'Honours a young person who has overcome challenges, led by example, and inspired others through their achievements and positive influence.', 2) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Lutfiye Kavci', 'Lutfiye Kavci is a courageous survivor of domestic violence who channels her trauma into advocacy. After suffering severe injuries, she became a powerful voice against domestic abuse. Lutfiye has participated in events like "Th!s is me" in Melbourne, sharing her story and serving as a keynote speaker. She advocates for housing support for victims, attends rallies to raise awareness, and uses articles and podcasts to educate and empower those unable to speak out.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Fatima Mursal Sadat', 'Mursal Sadat, a member of the Afghanistan Women’s National Soccer Team, resettled in Australia during the 2021 Kabul evacuation. She began advocating for social change at 15 with UNICEF Afghanistan. In Melbourne, Mursal enhanced her advocacy skills through the Community Advocacy Power Program and CMY’s “A Seat at the Table”. Recognised with the Best Delegate award at the Universal Youth Leadership Summit, she also received the UN Peace Day Power of Peace Award. Passionate about women''s and refugees'' rights, Mursal is a Youth Facilitator for CMY’s Settling Smarter Program while studying Sports and Business at SEDA Melbourne Victory.', 1);

  -- 3. Volunteer of the Year
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Volunteer of the Year', 'Recognises a young volunteer who has shown exceptional dedication to community service, contributing significantly to the lives of others.', 3) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Mohammad Azeem', 'Mohammad Azeem Ibrahimi, a 21-year-old who arrived in Australia from Afghanistan in 2021, is pursuing a diploma in Community Services at RMIT University. With experience in youth advocacy and community engagement, he serves as a Youth Advisor with the Brotherhood of St Laurence, focusing on public speaking and content creation. His bilingual skills in English and Persian/Dari enhance his ability to support young people in achieving their potential.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'William Yin', 'William is a dedicated young volunteer whose community service includes filming, video editing, and creating bilingual subtitles for online concerts, enhancing inclusivity through English and Chinese subtitles. After the pandemic, he distributed promotional materials, hand sanitiser, and masks to support the multicultural community. His commitment reflects a desire to strengthen community bonds and foster a positive environment for diverse backgrounds. With a strong sense of responsibility, William is eager to continue using his multimedia skills to promote cultural exchange and unity.', 1);

  -- 4. Young Leader of the Year
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Young Leader of the Year', 'Celebrates a young individual who has shown outstanding leadership and has driven positive changes, either in their community, workplace, or field.', 4) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Daisy Wu', 'Daisy Wu, a multi-award-winning mentor, author, and TEDx speaker, empowers non-native speakers and CALD migrants to connect and succeed by leveraging their unique strengths. Her work with Multilingual Connectors earned her recognition as one of Victoria’s Top 100 Asia Innovation Business Leaders in 2024. As the youngest recipient of the Australian Multicultural Women Association’s Women in Leadership Award, Daisy’s book won the 2023 ABLE Golden Book Awards for Best in Education.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Mamuch Chuol', 'Mamuch Chuol is a youth advocate and founder of NextGen Unite, empowering South Sudanese Australians and multicultural communities through sport, education, and mentorship. As a youth worker at the Centre for Multicultural Youth, Mamuch supports migrant youth while pursuing a double degree in Law and Arts at Victoria University.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Tony Luo', 'Tony is a Sustainability Strategist at Sustainability Victoria, focused on sustainability policy and urban planning. A winner of the City of Melbourne Urban Forest Design Competition, he supports sustainable urban development. With a Bachelor of Environments, he is a United Nations Local Pathways Fellow for SDG11.', 2);

  -- 5. Young Woman of the Year
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Young Woman of the Year', 'Honours a young woman who has demonstrated leadership, resilience, and a commitment to improving her community through advocacy or innovation.', 5) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Sarah Hanoona', 'Sarah Hanoona, a 21-year-old Assyrian Iraqi woman, advocates for migrant and refugee youth in Australia. As a Youth Development Officer at Arabic Welfare, she mentors newcomers and designs programs to help them adapt. Fluent in four languages, Sarah has received the 2023 Young Achiever Award and was named Hume Young Leader of the Year. She is currently studying a Bachelor of Psychological Science at La Trobe University.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Aayushi Khillan', 'Aayushi Khillan, a 24-year-old medical student, is the CEO and Founder of Body Buddies, a social enterprise promoting health education through organ-shaped toys. Since launching, she has raised over $140,000 for charity, donating 50% of profits to Transplant Australia. Aayushi also serves on the Victorian Curriculum and Assessment Authority.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Daisy Truong', 'Daisy Truong works diligently in the multicultural affairs space alongside the Minister for Multicultural Affairs, Ingrid Stitt MP. Her efforts extend to the VPS Women of Colour Network, where she has tirelessly advocated for anti-racism strategies and empowerment, striving to create a more inclusive and equitable environment for all.', 2);

  -- 6. Young Apprentice or Vocational Award
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Young Apprentice or Vocational Award', 'Awarded to a young person who has excelled in an apprenticeship or vocational program, showing skill, commitment, and potential in their chosen career.', 6) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Eizar Bee', 'Eizar joined Cultivating Community in 2023 through the "Hear Me See Me Employ Me" program, developing a strong growth mindset alongside horticulture skills. Despite employment barriers, Eizar demonstrates enthusiasm and confidence, often stepping outside their comfort zone. As a valued team member, they manage indoor plants and irrigation at the Burwood rooftop farm, showcasing resilience and determination as a member of the Deaf community while inspiring those around them.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Silva Wartan', 'Silva Sarkees Wartan, a 25-year-old Iraqi Armenian, has made remarkable academic strides in Australia within just 16 months. Recognising the importance of English, Silva completed a Certificate III in EAL, enhancing language skills and confidence. Following this, they earned a Certificate IV in Accounting and Bookkeeping, discovering a passion for financial management. Now studying for a Diploma in Accounting, Silva seeks to unlock more professional opportunities. Their journey reflects the significant support from teachers and resources that have fostered both personal and professional growth.', 1);

  -- 7. Implementing Aboriginal Self Determination Award
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Implementing Aboriginal Self Determination Award', 'Recognises a young person or youth service dedicated to advancing the empowerment, cultural preservation, and well-being of Indigenous communities.', 7) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Braydon Saunders', 'Braydon Saunders, a proud Gunditjmara man from Heywood, is dedicated to preserving his culture through Black Swan Cultural Tourism, offering immersive Gunditjmara heritage tours. At Parks Victoria, he promotes the Budj Bim Cultural Landscape. He co-created the Native Nations project, winning a New Zealand Tourism Award for Indigenous youth cultural exchange, and mentors the Indigenous dance group Koondoom Yarkeen while serving on the board of Winda-Mara Aboriginal Corporation.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Lashay Blurton', 'Lashay Blurton embodies leadership and resilience. Starting as a participant in the Karreeta Koornong Maar Youth Program, she evolved into a mentor, encouraging cultural identity. As a Budj Bim Ranger, she focuses on land management and cultural preservation, inspiring young people and amplifying their voices.', 1);

  -- 8. Academic Excellence Award
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Academic Excellence Award', 'Recognises a student who has demonstrated outstanding academic achievements and has been an active leader in their school or educational community.', 8) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Arya Sadeghi', 'Arya, a 19-year-old Computer Science student at Monash University, moved to Australia with their family six years ago. Instilled with a strong work ethic by their father, Arya developed a passion for Computer Science at 14 and achieved top scores in their faculty among 7,000 students. Committed to excellence, they value humility and believe that every experience contributes to personal growth.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Ahmad Reza Amani', 'Despite a long wait for his Australian visa, Ahmad persevered, balancing schoolwork with striving for excellence. His determination paid off with visa approval, opening a new chapter. Supportive teachers at Noble Park Language School helped him secure a $35,000 scholarship at Saint Leonard''s College. Now thriving academically, Ahmad embraces the vibrant Australian lifestyle and is honoured to be shortlisted for this award among so many deserving individuals in Victoria.', 1);

  -- 9. Outstanding Contribution to the Community Award
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Outstanding Contribution to the Community Award', 'Given to a young individual or group that has made a significant positive difference in their community through impactful volunteer work or projects.', 9) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Towheed Altahir', 'Towheed, a 22-year-old Sudanese Muslim from Melbourne, is a Senior Youth Advisor at the Brotherhood of St Laurence, supporting youth through projects on career development, education, and recreation. She has led community events, organised workshops, and mentored young people, fostering growth and social cohesion. Passionate about increasing diverse leadership, Towheed remains dedicated to empowering young people from diverse backgrounds to become future leaders.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Cyndi Makabory', 'Cyndi Makabory, a West Papuan youth activist and newly admitted lawyer in Australia, is dedicated to justice and human rights. Born into the Waropen and Biak tribes, her passion is inspired by her mother, Paula Makabory, an exiled independence leader. Cyndi recently collaborated on Kal-Angam Kal, a youth-led storytelling project connecting West Papuan youth with Elders to preserve culture and resilience. Educated in Australia, she uses her legal expertise to advocate for West Papuan rights, inspiring young activists through cultural storytelling and legal advocacy.', 1);

  -- 10. Sportsperson of the Year
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Sportsperson of the Year', 'Honours a young athlete who has achieved excellence in their sport, while also contributing to their community through mentorship or leadership roles.', 10) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Adem Savran', 'Adem Savran, a Year 12 student and Deputy School Captain, is an active leader and talented athlete, excelling in cricket, basketball, and football, with accolades like the 2023 Impact Player Award. He founded "SportsComments", interviewing sports figures such as Patrick Cripps, with some videos surpassing 100K views. Adem also volunteers at ICMG Dandenong, mentoring children and fostering community belonging.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Nabeera Khan', 'Growing up in the NSW outback, Nabeera excelled in public speaking and sports. After moving to Victoria, she embraced Taekwondo and kickboxing, participating in high school debates and leadership roles. Now studying Criminology and Psychological Science at La Trobe University, Nabeera also works as a Taekwondo and kickboxing instructor. She aims to inspire multicultural youth to break barriers and make a positive community impact, believing in growth academically, athletically, and spiritually.', 1);

  -- 11. Creative and Performing Arts Award
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Creative and Performing Arts Award', 'Celebrates a young individual who has shown exceptional talent in creative or performing arts, contributing uniquely to their cultural community.', 11) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Celine Khoury', 'Celine Khoury is a pioneering artist and criminal defence lawyer who has transformed the Australian theatre landscape. In 2019, she founded Thespian Theatre Company, the nation’s first theatre company dedicated to multilingual and multicultural stories. Her productions explore themes of migration, cultural identity, and social justice, and her recent work "Love With No Remorse" achieved a sold-out season.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Lakshmi Ganapathy', 'Lakshmi Ganapathy is a graduate of La Trobe University''s Bachelor of Creative Arts (Theatre and Media Studies) and a dedicated journalist and theatre-maker focused on voicing overlooked perspectives and democratising theatre. She gained recognition for her role as Kattrin in Damien Millar’s production of Mother Courage and Her Children (La Mama, 2021) and as the Melbourne Content Creator for Indian Link, an award-winning publication for the South Asian diaspora. Lakshmi, the first in her family to pursue an arts career, passionately campaigned against her university''s closure of the Creative Arts degree and Student Theatre program during the 2020 education cuts. Selected for the inaugural La Mama Emerge program, she directed a site-specific production of DNA by Dennis Kelly in April 2024, engaging thirty young locals through her company, Mucky Puppy Theatre.', 1);

  -- 12. Entrepreneur of the Year
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Entrepreneur of the Year', 'Awarded to a young entrepreneur who has successfully created and grown a business, demonstrating creativity, leadership, and a positive impact on their community.', 12) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Sagalee Omer', 'Sagalee Aba-Omer founded Shooters Shoot, an African youth-led organisation that raises funds through basketball events to address community issues, raising over $66,000 to support well-being programs, therapy sessions, and bikes for youth. Sagalee is also an award-winning photographer and street journalist, sharing 200+ stories of strangers in Melbourne through Locationest, with 45k followers.', 1);
  INSERT INTO public.finalists (category_id, name, bio, sort_order)
  VALUES (cid, 'Ejaz Hussain', 'Ejaz, a 21-year-old Afghan refugee, founded Saheel Film at 19, offering sought-after photography and videography services for the Australian-Afghan community. His work captures cultural traditions across multiple states. Despite challenges as a young entrepreneur and refugee, Ejaz built Saheel Film into a leading business, collaborating with organisations like the Centre for Multicultural Youth. He aims to expand his business, inspiring young entrepreneurs and enriching his community through storytelling and cultural celebration.', 1);

  -- 13. Australian Youth Minister Award
  INSERT INTO public.award_categories (year_id, name, description, sort_order)
  VALUES (yid, 'Australian Youth Minister Award', 'Selected by the Federal Minister for Youth, recognising an individual or organisation dedicated to improving the well-being of young people and the youth sector.', 13) RETURNING id INTO cid;
  INSERT INTO public.winners (category_id, name, bio, sort_order)
  VALUES (cid, 'Sagalee Omer', 'Selected by the Federal Minister for Youth, this award recognised Sagalee Aba-Omer, founder of Shooters Shoot, an African youth-led organisation that raises funds through basketball events to address community issues. Shooters Shoot has raised over $66,000 to support well-being programs, therapy sessions, and bikes for youth, and now focuses on knife harm awareness.', 1);
END $$;