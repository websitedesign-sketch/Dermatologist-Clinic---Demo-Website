// Security utilities and best practices

export const sanitizeInput = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone);
};

export const preventXSS = (html: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = html;
  return textarea.value;
};

export const setSecurityHeaders = () => {
  // These should be set by server, but documented here for reference
  // Strict-Transport-Security: max-age=31536000; includeSubDomains
  // X-Content-Type-Options: nosniff
  // X-Frame-Options: SAMEORIGIN
  // X-XSS-Protection: 1; mode=block
  // Referrer-Policy: strict-origin-when-cross-origin
  // Permissions-Policy: geolocation=(), microphone=(), camera=()
};

export const logSecurityEvent = (event: string, details?: any) => {
  if (import.meta.env.PROD) {
    // Send to security monitoring service
    console.warn(`[Security] ${event}`, details);
  }
};