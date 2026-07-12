export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  ABOUT: '/about',
  CONTACT: '/contact',
  BLOG: '/blog',
} as const;

export const ROUTE_LABELS = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.SERVICES]: 'Services',
  [ROUTES.ABOUT]: 'About',
  [ROUTES.CONTACT]: 'Contact',
  [ROUTES.BLOG]: 'Blog',
} as const;

export const PRELOAD_ROUTES = [ROUTES.SERVICES, ROUTES.ABOUT];