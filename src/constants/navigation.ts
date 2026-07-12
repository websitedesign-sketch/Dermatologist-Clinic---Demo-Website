export const navigationLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const;

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: 'Instagram',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: 'Facebook',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'Linkedin',
  },
] as const;

export const companyInfo = {
  name: 'Aesthetic Dermatology Clinic',
  description: 'Premium aesthetic dermatology services',
  phone: '+1 (555) 123-4567',
  email: 'hello@dermatologyclinic.com',
  address: '123 Medical Plaza, Healthcare City, HC 12345',
} as const;
