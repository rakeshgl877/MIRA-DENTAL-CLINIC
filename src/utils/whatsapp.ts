import { CLINIC_INFO } from '../data/clinicData';

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || `Hi Mira Dental Clinic, I would like to enquire about an appointment consultation.`;
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getTreatmentWhatsAppUrl(treatmentName: string): string {
  const message = `Hi Mira Dental Clinic, I would like to enquire about ${treatmentName} and book a consultation.`;
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCallUrl(): string {
  return `tel:${CLINIC_INFO.phoneRaw}`;
}
