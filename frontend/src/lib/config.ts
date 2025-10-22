// Centralized app configuration helpers
// Formspree: set your form ID in a Vite env file, e.g., `.env.local`
// VITE_FORMSPREE_FORM_ID=xxxxxxxx

export const FORMSPREE_FORM_ID: string | undefined =
  (import.meta as any).env?.VITE_FORMSPREE_FORM_ID || undefined;

export const getFormspreeEndpoint = () =>
  FORMSPREE_FORM_ID ? `https://formspree.io/f/${FORMSPREE_FORM_ID}` : undefined;
