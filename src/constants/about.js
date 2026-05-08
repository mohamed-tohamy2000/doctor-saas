import doctorImg from "../assets/docImg.png"
import Doctor from "../assets/doctor.png"
export const ABOUT_CONTENT = {
  hero: {
    title: "Modernizing Healthcare Access",
    description: "Our mission is to simplify the patient journey while maintaining the highest standards of clinical precision. We believe that accessing quality care should be seamless, transparent, and built on a foundation of operational efficiency.",
    image: doctorImg
  },
  values: {
    title: "Our Core Values",
    items: [
      {
        id: "care",
        title: "Care",
        description: "A human-centric approach to every interaction, ensuring patients feel heard, respected, and prioritized.",
        icon: "Heart"
      },
      {
        id: "precision",
        title: "Precision",
        description: "Data-driven methodologies and exacting standards applied to both clinical diagnostics and operational workflows.",
        icon: "Sliders"
      },
      {
        id: "innovation",
        title: "Innovation",
        description: "Continuous integration of state-of-the-art technology to refine processes and elevate the standard of care.",
        icon: "Lightbulb"
      }
    ]
  },
  legacy: {
    title: "A Legacy of Clinical Excellence",
    description: "Founded on the principles of evidence-based practice and systemic organization, Smart Clinic Booking emerged from a need to bridge the gap between complex medical scheduling and patient convenience. We have iteratively designed our platform to reduce cognitive load for practitioners while ensuring data accuracy remains paramount.",
    image: Doctor
  }
};
