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
  eventDate: 'Saturday, 5 October 2024',
  eventLocation: 'Victorian Parliament House',
   
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
   // 2025 WINNERS (Placeholder content)
   // ============================================
   winners2025: {
     'Young Influencer of the Year': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Inspirational Young Person of the Year': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Volunteer of the Year': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Young Leader of the Year': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Young Woman of the Year': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Young Apprentice or Vocational Award': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Implementing Aboriginal Self Determination Award': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Academic Excellence Award': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Outstanding Contribution to the Community Award': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Sportsperson of the Year': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Creative and Performing Arts Award': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Entrepreneur of the Year': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
     },
     'Australian Youth Minister Award': {
       name: 'Winner Name',
       bio: 'Short biography of the winner and their achievements.',
       finalists: ['Finalist 1', 'Finalist 2', 'Finalist 3'],
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