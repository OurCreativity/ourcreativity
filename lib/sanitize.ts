// Sanitasi HTML buatan user sebelum dirender lewat dangerouslySetInnerHTML.
import DOMPurify from 'dompurify';

export const sanitizeHtml = (html: string | null | undefined): string =>
    DOMPurify.sanitize(html ?? '', { USE_PROFILES: { html: true } });
