// The site has no backend. Inquiry forms hand the message to WhatsApp (or email),
// already filled in, so the company receives it on a channel it already watches.

export type InquiryField = [label: string, value: string | undefined];

export const formatInquiry = (heading: string, fields: InquiryField[]): string =>
  [heading, '', ...fields.filter(([, v]) => v && v.trim()).map(([k, v]) => `${k}: ${v!.trim()}`)].join('\n');

/** Accepts `https://wa.me/880...`, `+880 1730-349633` or plain digits. */
export const buildWhatsAppLink = (whatsapp: string, text?: string): string => {
  const digits = whatsapp.replace(/\D/g, '');
  return `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
};

export const buildMailtoLink = (email: string, subject: string, body: string): string =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const openWhatsApp = (whatsapp: string, text: string) => {
  window.open(buildWhatsAppLink(whatsapp, text), '_blank', 'noopener,noreferrer');
};
