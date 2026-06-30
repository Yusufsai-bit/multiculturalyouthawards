 // ============================================
 // SITE CONTENT - Editable Content File
 // Update this file to change site content
 // ============================================
 
 export interface Category {
   id: number;
   name: string;
   description: string;
 }
 
 export interface Winner {
   name: string;
   bio: string;
   finalists: string[];
 }
 
 export interface Partner {
   name: string;
   logo?: string;
   url?: string;
 }
 
 export interface SiteContent {
   // Site-wide settings
   nominationsStatus: 'open' | 'closed' | 'coming_soon';
   eventDate: string;
   eventLocation: string;
  nominationsOpenDate: string;
  nominationsCloseDate: string;
   
   // Contact information
   contactEmail: string;
   contactLocation: string;
   
   // Social links
   socialLinks: {
     facebook: string;
     linkedin: string;
     instagram: string;
   };
   
   // Award categories
   categories: Category[];
   
   // 2025 Winners
   winners2025: Record<string, Winner>;
   
   // Partners
   partners2026: Partner[];
   sponsors: Partner[];
   supporters: Partner[];
 }
 
 export const siteContent: SiteContent = {
   // ============================================
   // SITE-WIDE SETTINGS
   // ============================================
  nominationsStatus: 'closed', // 'open' | 'closed' | 'coming_soon'
 eventDate: 'Saturday 3rd October 2026',
 eventLocation: 'Victorian Parliament House',
 nominationsOpenDate: '13 July 2026',
 nominationsCloseDate: '31 August 2026',
   
   // ============================================
   // CONTACT INFORMATION
   // ============================================
   contactEmail: 'info@multiculturalyouthawards.com.au',
  contactLocation: '215 Bell St, Preston, VIC, 3072',
   
   // ============================================
   // SOCIAL LINKS
   // ============================================
   socialLinks: {
     facebook: 'https://facebook.com/multiculturalyouthawards',
     linkedin: 'https://linkedin.com/company/multiculturalyouthawards',
     instagram: 'https://instagram.com/multiculturalyouthawards',
   },
   
   // ============================================
   // AWARD CATEGORIES (13 Categories)
   // ============================================
   categories: [
     {
       id: 1,
       name: 'Young Influencer of the Year',
      description: 'Celebrates a young person who has used their platform or creative medium effectively to drive positive change and inspire others in the community.',
     },
     {
       id: 2,
       name: 'Inspirational Young Person of the Year',
      description: 'Honours a young person who has overcome challenges, led by example, and inspired others through their achievements and positive influence.',
     },
     {
       id: 3,
       name: 'Volunteer of the Year',
      description: 'Recognises a young volunteer who has shown exceptional dedication to community service, contributing significantly to the lives of others.',
     },
     {
       id: 4,
       name: 'Young Leader of the Year',
      description: 'Celebrates a young individual who has shown outstanding leadership and has driven positive changes, either in their community, workplace, or field.',
     },
     {
       id: 5,
       name: 'Young Woman of the Year',
      description: 'Honours a young woman who has demonstrated leadership, resilience, and a commitment to improving her community through advocacy or innovation.',
     },
     {
       id: 6,
       name: 'Young Apprentice or Vocational Award',
      description: 'Awarded to a young person who has excelled in an apprenticeship or vocational program, showing skill, commitment, and potential in their chosen career.',
     },
     {
       id: 7,
       name: 'Implementing Aboriginal Self Determination Award',
      description: 'Recognises a young person or youth service dedicated to advancing the empowerment, cultural preservation, and well-being of Indigenous communities.',
     },
     {
       id: 8,
       name: 'Academic Excellence Award',
      description: 'Recognises a student who has demonstrated outstanding academic achievements and has been an active leader in their school or educational community.',
     },
     {
       id: 9,
       name: 'Outstanding Contribution to the Community Award',
      description: 'Given to a young individual or group that has made a significant positive difference in their community through impactful volunteer work or projects.',
     },
     {
       id: 10,
       name: 'Sportsperson of the Year',
      description: 'Honours a young athlete who has achieved excellence in their sport, while also contributing to their community through mentorship or leadership roles.',
     },
     {
       id: 11,
       name: 'Creative and Performing Arts Award',
      description: 'Celebrates a young individual who has shown exceptional talent in creative or performing arts, contributing uniquely to their cultural community.',
     },
     {
       id: 12,
       name: 'Entrepreneur of the Year',
      description: 'Awarded to a young entrepreneur who has successfully created and grown a business, demonstrating creativity, leadership, and a positive impact on their community.',
     },
     {
       id: 13,
       name: 'Australian Youth Minister Award',
      description: 'Selected by the Federal Minister for Youth, recognising an individual or organisation dedicated to improving the well-being of young people and the youth sector.',
     },
   ],
   
  // ============================================
  // 2024 WINNERS
  // ============================================
  winners2025: {
    'Young Influencer of the Year': {
      name: 'Atena Kashani',
      bio: 'Atena Kashani, an Iranian refugee, is a dedicated advocate for refugee rights with extensive experience in activism and community engagement. Since age 15, she has addressed issues affecting refugees and asylum seekers, using her personal journey to inform her advocacy. Atena is establishing "Refugee Hope Assistant", a nonprofit for migrants, and serves as an ambassador for the Refugee Council of Australia through the "Refugee Stories for Change" program. As a Youth Advisor for the Brotherhood of St Laurence, she promotes youth development initiatives, ensuring their voices are heard.',
      finalists: ['Nhat Minh Hoang'],
    },
    'Inspirational Young Person of the Year': {
      name: 'Lutfiye Kavci',
      bio: 'Lutfiye Kavci is a courageous survivor of domestic violence who channels her trauma into advocacy. After suffering severe injuries, she became a powerful voice against domestic abuse. Lutfiye has participated in events like "Th!s is me" in Melbourne, sharing her story and serving as a keynote speaker. She advocates for housing support for victims, attends rallies to raise awareness, and uses articles and podcasts to educate and empower those unable to speak out.',
      finalists: ['Fatima Mursal Sadat'],
    },
    'Volunteer of the Year': {
      name: 'Mohammad Azeem',
      bio: 'Mohammad Azeem Ibrahimi, a 21-year-old who arrived in Australia from Afghanistan in 2021, is pursuing a diploma in Community Services at RMIT University. With experience in youth advocacy and community engagement, he serves as a Youth Advisor with the Brotherhood of St Laurence, focusing on public speaking and content creation. His bilingual skills in English and Persian/Dari enhance his ability to support young people in achieving their potential.',
      finalists: ['William Yin'],
    },
    'Young Leader of the Year': {
      name: 'Daisy Wu',
      bio: 'Daisy Wu, a multi-award-winning mentor, author, and TEDx speaker, empowers non-native speakers and CALD migrants to connect and succeed by leveraging their unique strengths. Her work with Multilingual Connectors earned her recognition as one of Victoria\u2019s Top 100 Asia Innovation Business Leaders in 2024. As the youngest recipient of the Australian Multicultural Women Association\u2019s Women in Leadership Award, Daisy\u2019s book won the 2023 ABLE Golden Book Awards for Best in Education.',
      finalists: ['Mamuch Chuol', 'Tony Luo'],
    },
    'Young Woman of the Year': {
      name: 'Sarah Hanoona',
      bio: 'Sarah Hanoona, a 21-year-old Assyrian Iraqi woman, advocates for migrant and refugee youth in Australia. As a Youth Development Officer at Arabic Welfare, she mentors newcomers and designs programs to help them adapt. Fluent in four languages, Sarah has received the 2023 Young Achiever Award and was named Hume Young Leader of the Year. She is currently studying a Bachelor of Psychological Science at La Trobe University.',
      finalists: ['Aayushi Khillan', 'Daisy Truong'],
    },
    'Young Apprentice or Vocational Award': {
      name: 'Eizar Bee',
      bio: 'Eizar joined Cultivating Community in 2023 through the "Hear Me See Me Employ Me" program, developing a strong growth mindset alongside horticulture skills. Despite employment barriers, Eizar demonstrates enthusiasm and confidence, often stepping outside their comfort zone. As a valued team member, they manage indoor plants and irrigation at the Burwood rooftop farm, showcasing resilience and determination as a member of the Deaf community while inspiring those around them.',
      finalists: ['Silva Wartan'],
    },
    'Implementing Aboriginal Self Determination Award': {
      name: 'Braydon Saunders',
      bio: 'Braydon Saunders, a proud Gunditjmara man from Heywood, is dedicated to preserving his culture through Black Swan Cultural Tourism, offering immersive Gunditjmara heritage tours. At Parks Victoria, he promotes the Budj Bim Cultural Landscape. He co-created the Native Nations project, winning a New Zealand Tourism Award for Indigenous youth cultural exchange, and mentors the Indigenous dance group Koondoom Yarkeen while serving on the board of Winda-Mara Aboriginal Corporation.',
      finalists: ['Lashay Blurton'],
    },
    'Academic Excellence Award': {
      name: 'Arya Sadeghi',
      bio: 'Arya, a 19-year-old Computer Science student at Monash University, moved to Australia with their family six years ago. Instilled with a strong work ethic by their father, Arya developed a passion for Computer Science at 14 and achieved top scores in their faculty among 7,000 students. Committed to excellence, they value humility and believe that every experience contributes to personal growth.',
      finalists: ['Ahmad Reza Amani'],
    },
    'Outstanding Contribution to the Community Award': {
      name: 'Towheed Altahir',
      bio: 'Towheed, a 22-year-old Sudanese Muslim from Melbourne, is a Senior Youth Advisor at the Brotherhood of St Laurence, supporting youth through projects on career development, education, and recreation. She has led community events, organised workshops, and mentored young people, fostering growth and social cohesion. Passionate about increasing diverse leadership, Towheed remains dedicated to empowering young people from diverse backgrounds to become future leaders.',
      finalists: ['Cyndi Makabory'],
    },
    'Sportsperson of the Year': {
      name: 'Adem Savran',
      bio: 'Adem Savran, a Year 12 student and Deputy School Captain, is an active leader and talented athlete, excelling in cricket, basketball, and football, with accolades like the 2023 Impact Player Award. He founded "SportsComments", interviewing sports figures such as Patrick Cripps, with some videos surpassing 100K views. Adem also volunteers at ICMG Dandenong, mentoring children and fostering community belonging.',
      finalists: ['Nabeera Khan'],
    },
    'Creative and Performing Arts Award': {
      name: 'Celine Khoury',
      bio: 'Celine Khoury is a pioneering artist and criminal defence lawyer who has transformed the Australian theatre landscape. In 2019, she founded Thespian Theatre Company, the nation\u2019s first theatre company dedicated to multilingual and multicultural stories. Her productions explore themes of migration, cultural identity, and social justice, and her recent work "Love With No Remorse" achieved a sold-out season.',
      finalists: ['Lakshmi Ganapathy'],
    },
    'Entrepreneur of the Year': {
      name: 'Sagalee Omer',
      bio: 'Sagalee Aba-Omer founded Shooters Shoot, an African youth-led organisation that raises funds through basketball events to address community issues, raising over $66,000 to support well-being programs, therapy sessions, and bikes for youth. Sagalee is also an award-winning photographer and street journalist, sharing 200+ stories of strangers in Melbourne through Locationest, with 45k followers.',
      finalists: ['Ejaz Hussain'],
    },
    'Australian Youth Minister Award': {
      name: 'Sagalee Omer',
      bio: 'Selected by the Federal Minister for Youth, this award recognised Sagalee Aba-Omer, founder of Shooters Shoot, an African youth-led organisation that raises funds through basketball events to address community issues. Shooters Shoot has raised over $66,000 to support well-being programs, therapy sessions, and bikes for youth, and now focuses on knife harm awareness.',
      finalists: [],
    },
  },
   
   // ============================================
   // PARTNERS (Placeholder content)
   // ============================================
   // Major Partners
   partners2026: [
     { 
       name: 'Multicultural Youth Group', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/myg-2.png',
       url: 'https://myg.org.au/'
     },
     { 
       name: 'Multicultural Arts Victoria', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2024/06/mav.png',
       url: 'https://www.mav.org.au/'
     },
   ],
   // Sponsors
   sponsors: [
     { 
       name: 'Department of Jobs, Skills, Industry and Regions', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/VIC_GOV_EDUCATION_LOGO_GOV_BLUE_RGB-01.png',
       url: 'https://www.vic.gov.au/education'
     },
     { 
       name: 'Cultura', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/culture-6.png',
       url: 'https://www.cultura.org.au/'
     },
     { 
       name: 'TAFE Victoria', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/10/tafe-victoria.png',
       url: 'https://www.vic.gov.au/tafe'
     },
     { 
       name: 'City of Melbourne', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/city-of-melbourne.png',
       url: 'https://www.melbourne.vic.gov.au/'
     },
     { 
       name: 'Centre for Multicultural Youth', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/cmy.png',
       url: 'https://www.cmy.net.au/'
     },
     { 
       name: 'Victorian Government', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/10/victoria-1.png',
       url: 'https://www.vic.gov.au/'
     },
   ],
   // Supporters
   supporters: [
     { 
       name: 'Brotherhood of St Laurence', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/brohterhood.png',
       url: 'https://www.bsl.org.au/'
     },
     { 
       name: 'Melbourne Polytechnic', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/melbourne.png',
       url: 'https://www.melbournepolytechnic.edu.au/'
     },
     { 
       name: 'Australian Multicultural Media Centre', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/ammc.png',
       url: 'https://ammc.org.au/'
     },
     { 
       name: 'Third Culture', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/3rd-culture.png',
       url: 'https://www.thirdculture.net.au/'
     },
     { 
       name: 'Commission for Children and Young People', 
       logo: 'https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/commission.png',
       url: 'https://ccyp.vic.gov.au/'
     },
   ],
 };
 
 // Helper function to get nomination button text based on status
 export const getNominationButtonText = (status: SiteContent['nominationsStatus']): string => {
   switch (status) {
     case 'open':
       return 'Nominate now';
     case 'closed':
       return 'Nominations closed';
     case 'coming_soon':
       return 'Nominations open soon';
   }
 };
 
 // Helper function to check if nominations are open
 export const areNominationsOpen = (status: SiteContent['nominationsStatus']): boolean => {
   return status === 'open';
 };