// Analytics utilities

export const trackPageView = (pathname: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pathname,
    });
  }
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackConversion = (conversionValue: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      value: conversionValue,
      currency: currency,
    });
  }
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form', 'submission', formName, success ? 1 : 0);
};

export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('engagement', 'cta_click', `${ctaName}_${location}`);
};