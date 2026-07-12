export const colors = {
  // Primary - Premium Gold/Champagne
  primary: {
    50: '#fef9f3',
    100: '#fdf2e7',
    200: '#fce5cf',
    300: '#fad4b3',
    400: '#f7bc7a',
    500: '#f5a962',
    600: '#e89441',
    700: '#d97f2e',
    800: '#b86a25',
    900: '#985520',
  },

  // Secondary - Deep Slate Blue (Premium & Trust)
  secondary: {
    50: '#f8f9fb',
    100: '#f1f3f7',
    200: '#dde3ef',
    300: '#c9cfe7',
    400: '#9fafdb',
    500: '#758fcf',
    600: '#5e7bc7',
    700: '#4f69b3',
    800: '#405691',
    900: '#354876',
  },

  // Accent - Soft Rose (Dermatology & Care)
  accent: {
    50: '#fdf8f7',
    100: '#faf2f0',
    200: '#f5e5e1',
    300: '#ead4cc',
    400: '#dab3a2',
    500: '#c99278',
    600: '#bd8264',
    700: '#a8705a',
    800: '#8a5a49',
    900: '#6e483c',
  },

  // Neutrals - Elegant Grayscale
  neutral: {
    0: '#ffffff',
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e8e8e7',
    300: '#d6d6d5',
    400: '#b4b4b3',
    500: '#888887',
    600: '#6b6b6a',
    700: '#4f4f4e',
    800: '#3a3a39',
    900: '#1f1f1e',
    950: '#0d0d0c',
  },

  // Semantic Colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#145231',
  },

  warning: {
    50: '#fefce8',
    100: '#fefbcf',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // Functional
  background: '#ffffff',
  surface: '#fafaf9',
  border: '#e8e8e7',
  text: '#1f1f1e',
  textSecondary: '#6b6b6a',
  textTertiary: '#888887',
} as const;

export type ColorKey = keyof typeof colors;
