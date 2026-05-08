import { CalendarDays, ShieldCheck, Stethoscope } from "lucide-react";

export const faqGroups = [
  {
    title: "Booking & Appointments",
    icon: CalendarDays,
    questions: [
      {
        question: "How do I schedule an appointment online?",
        answer:
          'To schedule an appointment online, click the "Get Started" button in the top navigation bar. You will be prompted to log in or create an account. Once logged in, select your preferred specialty, doctor, and an available time slot. You will receive a confirmation email once your booking is complete.',
        open: true,
      },
      {
        question: "Can I cancel or reschedule my appointment?",
        answer:
          "Yes. You can cancel or reschedule from your account dashboard before the appointment time, based on clinic availability.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking as early as possible, especially for specialist visits. Same-day appointments may be available depending on the doctor schedule.",
      },
    ],
  },
  {
    title: "Insurance & Billing",
    icon: ShieldCheck,
    questions: [
      {
        question: "What insurance plans do you accept?",
        answer:
          "Smart Clinic accepts many major insurance plans. Please contact support with your provider details so we can confirm your coverage.",
      },
      {
        question: "How do I pay my bill online?",
        answer:
          "You can pay online from your patient account after your invoice is issued. Available payment methods will appear at checkout.",
      },
    ],
  },
  {
    title: "Medical Care",
    icon: Stethoscope,
    questions: [
      {
        question: "Do you offer telehealth consultations?",
        answer:
          "Yes. Telehealth consultations are available for selected specialties and appointment types when an in-person visit is not required.",
      },
    ],
  },
];
