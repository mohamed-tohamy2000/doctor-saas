import doctor1 from "../../../assets/doc1.jpg";
import doctor2 from "../../../assets/doc2.jpg";
import doctor3 from "../../../assets/doc3.jpg";
import doctor4 from "../../../assets/doc4.jpg";

export const DOCTORS_DATA = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiology",
    rating: 4.9,
    reviews: 124,
    experience: 12,
    patients: "3.2k+",
    image: doctor1,
    availableToday: true,
    nextAvailable: "Sep 12"
  },
  {
    id: 2,
    name: "Dr. Marcus Chen",
    specialty: "Neurology",
    rating: 4.8,
    reviews: 98,
    experience: 18,
    patients: "5.1k+",
    image: doctor2,
    availableToday: false,
    nextAvailable: "Tomorrow"
  },
  {
    id: 3,
    name: "Dr. Emily Rostova",
    specialty: "Pediatrics",
    rating: 5.0,
    reviews: 215,
    experience: 8,
    patients: "2.8k+",
    image: doctor3,
    availableToday: true,
    nextAvailable: "Sep 12"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    rating: 4.7,
    reviews: 85,
    experience: 15,
    patients: "4.0k+",
    image: doctor4,
    availableToday: false,
    nextAvailable: "Sep 12"
  }
];
