export const getEnv = (key: string): string => {
  const value = import.meta.env[`VITE_${key}`];

  if (!value && import.meta.env.PROD) {
    console.warn(`Environment variable VITE_${key} is not set`);
  }

  return value || '';
};

export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;
export const apiUrl = getEnv('API_URL');
export const environment = getEnv('ENVIRONMENT') || 'development';