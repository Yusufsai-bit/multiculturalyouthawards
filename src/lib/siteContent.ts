 // ============================================
 // SITE CONTENT - Editable Content File
 // Update this file to change site content
 // ============================================
 
 export interface Category {
   id: number;
   name: string;
   description: string;
 }
 
 export interface Finalist {
   name: string;
   bio?: string;
 }

 export interface Winner {
   name: string;
   bio: string;
   finalists: Finalist[];
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
     facebook: 'https://www.facebook.com/profile.php?id=61561674146412&mibextid=LQQJ4d',
     linkedin: 'https://www.linkedin.com/company/multicultural-youth-awards/',
     instagram: 'https://www.instagram.com/multiculturalyouthawards/',
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
  // 2025 WINNERS (from live site: /award-winners-2025/)
  // ============================================
  winners2025: {
    'Young Influencer of the Year': {
      name: 'Hadeel Alshuraymi',
      bio: 'Hadeel Alshuraymi is a motivational speaker, workshop facilitator, and community advocate passionate about empowering young people and building resilient, connected communities. After migrating to Australia, she began working as a waitress and, through determination, rose to become Acting Executive Assistant to the CEO of the Brotherhood of St Laurence, where she now supports the Office of the Executive Director. Through her platform Hadeel Speaks, she delivers powerful keynotes and workshops on resilience, identity, and belonging. A volunteer speaker with Beyond Blue and the Centre for Multicultural Youth\u2019s Shout Out program, Hadeel uses storytelling to reduce stigma, celebrate diversity, and inspire confidence. Her message is simple: resilience grows \u201c1% at a time.\u201d',
      finalists: [
        {
          name: 'Vukicimoala Daniel Tawaketini',
          bio: 'Vukicimoala Daniel Tawaketini is a young leader whose passion for sport is transforming lives. As the founder of the Northern Flame Rugby Club, Daniel created a safe and inclusive space where troubled youth, recent immigrants, Indigenous Australians, and local young people come together through rugby. His vision goes far beyond building a team \u2013 it is about fostering belonging, discipline, and resilience. Demonstrating maturity and persistence, Daniel even convinced his father to support him financially to establish the club, showing determination well beyond his years. Today, his leadership is helping young people gain confidence, make better choices, and see new possibilities, proving sport can be a powerful tool for social change.',
        },
      ],
    },
    'Inspirational Young Person of the Year': {
      name: 'Zayd Safi',
      bio: 'Zayd Safi is an inspiring leader who has transformed his own journey of adversity \u2014 including cancer, incarceration, and a low-socioeconomic upbringing \u2014 into a powerful force for change. A board member of the Eritrean Community in Australia and active in Victoria\u2019s Islamic community, Zayd is deeply committed to youth empowerment. Through 16 Yards, he mentors young people in custody, schools, and the community, helping them rebuild confidence, overcome barriers, and create positive futures. His work has been recognised across youth justice circles and in the documentary The Blueprint. Currently completing a Bachelor of Social Work, Zayd also hosts Tapped In Melbourne, a podcast amplifying community voices and resilience.',
      finalists: [
        {
          name: 'Mahdia Qasimi',
          bio: 'Mahdia arrived in Australia as a refugee with no English and has since transformed her journey into one of resilience and leadership. Through determination and hard work, she mastered the language, excelled in her studies, and earned a full scholarship to one of Victoria\u2019s top private schools. She is a passionate advocate for Afghan girls\u2019 education, refugee rights, and human rights, speaking on local and global platforms. Mahdia has supported newly arrived refugees through volunteering, represented youth in Youth Parliament, and was honoured with the Premier\u2019s Spirit of Anzac Prize. She also founded a nonprofit providing school resources to children in Afghanistan, inspiring others with her courage and commitment.',
        },
      ],
    },
    'Volunteer of the Year': {
      name: 'Marina Abe',
      bio: 'Marina Abe is a Japanese international student whose volunteerism has made a lasting impact on Melbourne\u2019s multicultural and international student communities. At The Couch International Student Centre, she has dedicated countless hours to hosting activities, sharing meals, and providing peer support, helping students overcome isolation and feel a sense of belonging. As a DUELI Leader at Deakin University English Language Institute, she created opportunities for students to practise English, improve wellbeing, and adapt to life in Melbourne. In 2025, Marina was appointed a My Melbourne International Student Ambassador, where she represents international student voices at events, conferences, and cultural programs. Marina\u2019s service reflects compassion, resilience, and a commitment to building inclusive communities.',
      finalists: [
        {
          name: 'Mohammed Anas',
          bio: 'Mohammed (Nas) Anas is a dedicated student leader committed to building inclusive and welcoming spaces for multicultural and international communities in Melbourne. As a City of Melbourne Student Ambassador, he has supported civic and multicultural events, including MC\u2019ing the launch of Piquancy, a documentary on migrant journeys and belonging. At Victoria University Student Union, Nas serves as Cultural Diversity Officer, leading programs such as Culture Fest 2025 and cultural workshops celebrating global traditions. Volunteering 12 hours weekly at The Couch International Student Centre, he provides mentoring and support, reflecting his belief that belonging is created through care, connection, and community.',
        },
      ],
    },
    'Young Leader of the Year': {
      name: 'Jad Saeed',
      bio: 'Jad Saeed is a young leader whose journey from Syrian refugee to Biomedical Science student reflects resilience, vision, and service. His lived experience drives his passion for empowering children, young people, and families from multicultural backgrounds to overcome barriers in education, employment, and settlement. Through his work at Whittlesea Community Connections and Spectrum Migrant Resource Centre, Jad has delivered workshops, study support, employment programs, and cultural safety training that have supported hundreds to feel valued and included. With aspirations to become a doctor who bridges healthcare with equity and social change, Jad exemplifies leadership that uplifts and inspires.',
      finalists: [
        {
          name: 'Amal Hassan-Ali',
          bio: 'Amal Hassan-Ali is an inspiring advocate for multicultural youth who is breaking barriers in sport and community leadership. As Multicultural Youth Coordinator at the Western Bulldogs Community Foundation and co-founder of Jump Ball, Amal leads programs that empower young people, particularly girls and women, to participate in sport and discover their potential as leaders. At the Bulldogs, she has driven initiatives like Social and Study Club and Leaders of the Pack, combining academic support, mentoring, and leadership training. Through Jump Ball, she has created inclusive basketball programs such as She Got Game and EmpowerHER Hoops, providing safe, culturally supportive spaces where women and young people thrive. Amal\u2019s vision is clear: sport should be accessible, inclusive, and transformative for all.',
        },
      ],
    },
    'Young Woman of the Year': {
      name: 'Shiao Lu Ooi',
      bio: 'Shiao Lu Ooi has transformed personal adversity into leadership that uplifts others. After experiencing bullying in Malaysia and moving alone to Australia during the COVID-19 pandemic, she founded Wombat Collective, a nonprofit empowering international and multicultural students to deliver grassroots projects such as intergenerational workshops, mental health forums, and sustainability initiatives. As National Chairperson of MASCA, she represented 20,000 Malaysian students across Australia, while also amplifying youth voices through TEDx, SBS Australia, and Melbourne\u2019s first Lord Mayor\u2019s debate on international student rights. Recognised as an AFR Top 100 Future Leader and Youth Advisor at CMY, Shiao Lu champions equity, inclusion, and empowerment.',
      finalists: [
        {
          name: 'Ikram Mahamed',
          bio: 'Ikram Mahamed is a youth advocate committed to equity, inclusion, and community-led change. With a Bachelor of Public Health and experience across grassroots initiatives, governance, and advocacy, Ikram brings lived experience and strategic insight to every role. As Project Officer at the Centre for Multicultural Youth, Ikram leads programs that elevate youth voice, while also serving on the boards of YLab and CALM Youth. Ikram founded The Beginning Project, helping multicultural young people navigate early career pathways through mentorship and storytelling. Ikram also co-directed Raising Generations with The Seed Network, amplifying overlooked sibling leadership. Across all contributions, Ikram builds systems that reflect and serve communities with authenticity and impact.',
        },
      ],
    },
    'Young Apprentice or Vocational Award': {
      name: 'Zahra Ebrahimi',
      bio: 'Zahra Ebrahimi has transformed her journey of conflict and displacement from Kabul into a story of resilience and determination. Determined to break barriers, she is pursuing a career in Building and Construction Management, completing her White Card and enrolling in a Certificate IV to carve out space for women in a male-dominated field. Beyond her studies, Zahra volunteers with South East Community Links, using her language skills to support others, and inspires peers through her leadership and encouragement. She is a trailblazer whose courage, ambition, and community spirit make her a powerful role model for young women everywhere.',
      finalists: [
        {
          name: 'Chaltu Ahmed',
          bio: 'Chaltu Ahmed has faced significant barriers of conflict, displacement, and settlement challenges, yet continues to pursue her goals with remarkable perseverance. After arriving in Australia with minimal support and experiencing homelessness, she committed herself to education and vocational training as a pathway to stability and growth. She has completed Foundation and Certificate I in English, is currently studying Certificate II, and has applied to begin a Certificate in Health Services Assistance to pursue her dream of becoming a nurse. Alongside her studies, she obtained her driver\u2019s licence, purchased her own car, and secured stable housing \u2013 all through her own determination. Her journey reflects resilience, hard work, and an unwavering dedication to building a career that serves and uplifts others.',
        },
      ],
    },
    'Implementing Aboriginal Self Determination Award': {
      name: 'Saige Bell',
      bio: 'Saige Bell, a proud Gunditjmara and Yorta Yorta woman, is an emerging artist and cultural leader whose work celebrates identity, resilience, and connection to Country. At just 18, she has contributed to significant cultural projects including designing artwork for the Aboriginal Justice Caucus and creating pieces for NAIDOC Week and Indigenous Literacy Day. Her art blends contemporary design with cultural knowledge, producing powerful works that honour heritage while engaging new audiences. Beyond her creative practice, Saige empowers young people through cultural workshops and mentoring, inspiring the next generation to take pride in who they are. Through determination and vision, Saige uses her art to educate, inspire, and strengthen Aboriginal self-determination, creating opportunities for cultural exchange and community pride.',
      finalists: [
        {
          name: 'Jakobe Walker',
          bio: 'Jakobe Walker, a proud Gunditjmara and Yorta Yorta man from Heywood, Victoria, is a passionate young leader committed to empowering youth and strengthening cultural pride. From an early age, he has been actively involved in programs that elevate the voices of Aboriginal and Torres Strait Islander young people, participating in leadership spaces, cultural events, and initiatives that encourage his peers to embrace identity and opportunity. A strong advocate for mental health and wellbeing, Jakobe champions safe spaces where young people can grow with confidence. Through sport, education, and cultural connection, he inspires resilience and unity. His recognition as a finalist reflects his leadership, advocacy, and vision to build stronger foundations for future generations.',
        },
      ],
    },
    'Academic Excellence Award': {
      name: 'Mehwish Ateeq',
      bio: 'Mehwish Ateeq is a consistent high achiever whose academic excellence has been recognised through her selection for the prestigious Monash Scholarship Program. This competitive honour highlights her exceptional results, resilience, and determination to succeed in her studies while pursuing a future career in medicine. At Al-Taqwa College, she has distinguished herself with outstanding performance across all subjects, reflecting discipline, ambition, and a passion for learning. Her success is not only a personal milestone but also an inspiration to her peers, proving that dedication and hard work can open doors to extraordinary opportunities. Mehwish embodies the spirit of academic excellence and stands out as a future leader in her field.',
      finalists: [
        {
          name: 'Muhammad Jawed Ayoub',
          bio: 'Muhammad\u2019s story is one of resilience, perseverance, and academic excellence. Originally from Afghanistan, he arrived in Australia in late 2023 determined to continue his education despite displacement and language barriers. Within months, he completed Certificates II and III in English through the AMEP program, quickly building confidence and fluency. Alongside this, he supported his peers as a volunteer with the Pathway Guidance Team, offering translation, encouragement, and mentorship. Muhammad has since completed a Diploma of Teacher Education Preparation at RMIT and is now in his second year of a Bachelor of Business, with aspirations to become an educator. His journey reflects not only personal achievement but also a commitment to uplifting others, making him a powerful role model for multicultural youth.',
        },
      ],
    },
    'Outstanding Contribution to the Community Award': {
      name: 'Devika Chaudhary',
      bio: 'Devika Chaudhary is an accomplished educator, community leader, and emerging legal professional dedicated to advancing equity, inclusion, and youth empowerment across Victoria. A Mathematics and Physics teacher at The University High School, she also mentors new teachers and serves on the School Council, while completing a Bachelor of Laws (Honours) to pursue policy reform and advocacy. As a Corporal and STEM Adviser with the Australian Air Force Cadets, Devika develops innovative programs that inspire young people to explore science and technology. Recognised as Brimbank\u2019s Young Citizen of the Year (2022) and a 7NEWS Young Achievers finalist (2025), she continues to champion youth, women, and multicultural communities through her extensive volunteering and leadership.',
      finalists: [
        {
          name: 'Shen Gonzales',
          bio: 'Shen Gonzales is a proud Filipina from Geelong whose leadership champions multicultural youth, inclusion, and community empowerment. She is the founder and President of Filipino Young Professionals Geelong, a youth-led organisation reigniting engagement and building pathways for cultural pride and leadership. Shen is also an active member of Cultura\u2019s Multicultural Youth Council Working Group and the Pako Festa Working Group, shaping inclusive community events that bring cultures together. She has represented youth voices through the MCSG Youth Council and at the Victorian Multicultural Review Public Forum, where her advocacy left a lasting impact. Professionally, Shen works in Aboriginal Engagement, Diversity and Inclusion at the Department of Families, Fairness and Housing. Her leadership exemplifies resilience, advocacy, and community impact.',
        },
      ],
    },
    'Sportsperson of the Year': {
      name: 'Yasmin Haddara',
      bio: 'Yasmine Haddara is a powerhouse in Australian karate, breaking barriers and setting new standards in the sport. A Year 12 student and elite athlete, she has secured silver medals at both national and Commonwealth levels, claimed gold at the Victorian State Championships, and represented Australia at the 2024 Commonwealth Karate Championships in Durban in the Junior Female 59kg division. Balancing the demands of study and elite competition, Yasmine exemplifies resilience, focus, and determination. Beyond her own achievements, she mentors younger athletes in karate, instilling discipline and confidence in the next generation. Yasmine\u2019s journey embodies the spirit of excellence and proves that with passion and perseverance, barriers can be shattered and greatness achieved.',
      finalists: [
        {
          name: 'Marissa Samrai',
          bio: 'When Marissa migrated to Australia in 2007, she struggled to find inclusive spaces in sport and lost the drive to stay active. That changed in 2023 when she joined HerRun, where she rediscovered her passion and quickly transformed her journey \u2013 from completing her first 10km, to a half marathon, and finishing the 2024 Melbourne Marathon all within a year. Now a certified Athletics Victoria coach, Marissa gives back as a mentor and volunteer coach, leading over 300 free sessions and creating safe, welcoming spaces for women aged 16 to 70. In 2024 alone, she trained 2400 women and inspired 70 first-time marathoners, breaking barriers and redefining women\u2019s sport.',
        },
      ],
    },
    'Creative and Performing Arts Award': {
      name: 'Fiston Baraka',
      bio: 'Known as Baraka the Kid, Fiston Baraka has transformed his journey from a Congolese refugee camp into a powerful musical career that inspires and unites. His unique blend of hip hop, R&B and Afro-pop in English and Swahili creates an unforgettable sound that bridges cultures and tells stories of survival and resilience. A proud member of Geelong\u2019s Multicultural Youth Council, Fiston is also a passionate advocate for multicultural youth, using his platform to uplift others and champion inclusion. Featured in the GRID Series and recognised as a rising voice in Victoria\u2019s music scene, he brings truth, heart and relentless energy to every stage. Humble yet determined, Fiston is proving that music can change lives and that every young person\u2019s story deserves to be heard.',
      finalists: [
        {
          name: 'Saige Bell',
          bio: 'Saige Bell, a proud Gunditjmara and Yorta Yorta woman, is an emerging artist and cultural leader whose work celebrates resilience, identity, and connection to Country. At only 18, she has already contributed to significant cultural projects, including designing artwork for the Aboriginal Justice Caucus and participating in statewide initiatives such as NAIDOC Week and Indigenous Literacy Day. Her pieces weave traditional storytelling with contemporary design, creating art that educates, empowers, and unites. Beyond her artistry, Saige is passionate about mentoring and uplifting others. She leads workshops with kinship programs and young people, helping them strengthen cultural pride and creativity. Overcoming personal challenges, Saige continues to expand her practice into digital design and public art, with a vision of bringing communities together through culture, creativity, and leadership.',
        },
      ],
    },
    'Entrepreneur of the Year': {
      name: 'Annie Zhou',
      bio: 'Annie Zhou founded MoneyWise, Australia\u2019s first youth-led financial literacy initiative. She has mobilised 330 youth volunteers, delivered 200+ workshops to 14,000 students, and distributed her book Money Made Simple to 56,000 children worldwide. Annie has embedded programs in 50+ schools and partnered with organisations across the Asia-Pacific and Africa, including co-developing a financial literacy program in Papua New Guinea. She also hosts the Brighter Futures Youth Podcast, reaching 50,000 listeners in 20 countries. A UN Youth Conference delegate, World Bank Youth Forum speaker, and TEDx presenter, Annie is an inspiring young leader driving global conversations on equity and empowerment.',
      finalists: [
        {
          name: 'Meron Negasi',
          bio: 'Meron Negasi is the founder of Riddim, a cultural movement that has redefined Melbourne\u2019s creative scene. More than just an event series, Riddim is a platform that fuses music, business and community, providing young DJs, artists and vendors from diverse backgrounds with the stage, visibility and income opportunities they deserve. Under Meron\u2019s leadership, Riddim has grown into a consistent sold-out experience, while celebrating culture and empowering youth. His entrepreneurial journey is a story of vision, resilience and innovation, turning limited resources into a sustainable business that inspires and unites communities.',
        },
      ],
    },
    'Australian Youth Minister Award': {
      name: 'Zayd Safi',
      bio: 'Zayd Safi is a powerful young leader who has turned hardship into hope, using his lived experience to guide and inspire others. Growing up in Melbourne\u2019s west, he overcame cancer, incarceration, and systemic disadvantage to become a role model for young men across African, Pasifika, and Aboriginal communities. As a mentor with 16 Yards and Young Australian People (YAP), Zayd has worked in schools, youth justice centres, and communities, delivering programs that build resilience, identity, and belief in second chances. His authenticity and leadership break through barriers, creating spaces where young people feel understood, valued, and capable of transformation. Zayd embodies resilience, empowerment, and the power of change.',
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