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
   nominationsStatus: 'coming_soon', // 'open' | 'closed' | 'coming_soon'
   eventDate: 'To be confirmed for 2026',
   eventLocation: 'To be confirmed',
   
   // ============================================
   // CONTACT INFORMATION
   // ============================================
   contactEmail: 'info@multiculturalyouthawards.com.au',
   contactLocation: 'Australia-wide',
   
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
       description: 'Recognising positive influence and community impact through platforms, content or advocacy.',
     },
     {
       id: 2,
       name: 'Inspirational Young Person of the Year',
       description: 'Recognising resilience, courage and inspiration that uplifts others.',
     },
     {
       id: 3,
       name: 'Volunteer of the Year',
       description: 'Recognising outstanding voluntary service and contribution to community.',
     },
     {
       id: 4,
       name: 'Young Leader of the Year',
       description: 'Recognising leadership that drives change and empowers others.',
     },
     {
       id: 5,
       name: 'Young Woman of the Year',
       description: 'Recognising excellence, leadership and impact by a young woman.',
     },
     {
       id: 6,
       name: 'Young Apprentice or Vocational Award',
       description: 'Recognising achievement in vocational pathways, training or apprenticeships.',
     },
     {
       id: 7,
       name: 'Implementing Aboriginal Self Determination Award',
       description: 'Recognising leadership and impact that supports First Nations self determination.',
     },
     {
       id: 8,
       name: 'Academic Excellence Award',
       description: 'Recognising exceptional academic achievement and dedication to learning.',
     },
     {
       id: 9,
       name: 'Outstanding Contribution to the Community Award',
       description: 'Recognising meaningful community contribution and sustained service.',
     },
     {
       id: 10,
       name: 'Sportsperson of the Year',
       description: 'Recognising excellence in sport and positive leadership through sport.',
     },
     {
       id: 11,
       name: 'Creative and Performing Arts Award',
       description: 'Recognising excellence in the arts, creativity, performance or cultural expression.',
     },
     {
       id: 12,
       name: 'Entrepreneur of the Year',
       description: 'Recognising entrepreneurship, innovation and building a successful venture.',
     },
     {
       id: 13,
       name: 'Australian Youth Minister Award',
       description: 'Recognising a standout young person aligned with national youth leadership and service.',
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
   partners2026: [
     { name: 'Partner Organisation 1' },
     { name: 'Partner Organisation 2' },
     { name: 'Partner Organisation 3' },
   ],
   sponsors: [
     { name: 'Sponsor Organisation 1' },
     { name: 'Sponsor Organisation 2' },
   ],
   supporters: [
     { name: 'Supporter Organisation 1' },
     { name: 'Supporter Organisation 2' },
     { name: 'Supporter Organisation 3' },
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