export const defaultSEO = {
  home: {
    title: 'Aesthetic Dermatology Clinic - Premium Skincare Solutions',
    description:
      'Experience premium aesthetic dermatology services delivered by board-certified specialists. Advanced treatments for all your skincare needs.',
    keywords: [
      'dermatology',
      'aesthetic medicine',
      'skincare',
      'laser treatment',
      'botox',
      'fillers',
      'skin rejuvenation',
    ],
    ogImage: '/og-home.jpg',
  },
  services: {
    title: 'Services - Aesthetic Dermatology Clinic',
    description:
      'Explore our comprehensive range of premium aesthetic dermatology treatments and services.',
    keywords: ['dermatology services', 'skin treatments', 'aesthetic procedures'],
    ogImage: '/og-services.jpg',
  },
  about: {
    title: 'About Us - Aesthetic Dermatology Clinic',
    description:
      'Learn about our board-certified dermatologists and our commitment to excellence in aesthetic medicine.',
    keywords: ['dermatologists', 'about clinic', 'medical team'],
    ogImage: '/og-about.jpg',
  },
  contact: {
    title: 'Contact Us - Aesthetic Dermatology Clinic',
    description:
      'Get in touch with us to schedule your consultation. We are here to help.',
    keywords: ['contact', 'appointment', 'consultation'],
    ogImage: '/og-contact.jpg',
  },
  blog: {
    title: 'Blog - Aesthetic Dermatology Clinic',
    description:
      'Read the latest articles and tips on dermatology and skincare from our experts.',
    keywords: ['blog', 'skincare tips', 'dermatology articles'],
    ogImage: '/og-blog.jpg',
  },
};

export const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Aesthetic Dermatology Clinic',
  description: 'Premium aesthetic dermatology clinic',
  url: 'https://dermatologyclinic.com',
  telephone: '+1-555-123-4567',
  email: 'hello@dermatologyclinic.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Medical Plaza',
    addressLocality: 'Healthcare City',
    addressRegion: 'HC',
    postalCode: '12345',
    addressCountry: 'US',
  },
  priceRange: '$$',
  sameAs: [
    'https://facebook.com/dermatologyclinic',
    'https://instagram.com/dermatologyclinic',
    'https://linkedin.com/company/dermatologyclinic',
  ],
};