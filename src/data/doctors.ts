export type Doctor = {
  slug: string
  name: string
  postNominals: string
  role: string
  shortBio: string
  paragraphs: string[]
  specialties: string[]
  experience: string
  training: string
  photo: string
  photoWidth: number
  photoHeight: number
  photoAlt: string
  photoNote: string
  photoCredit: string
  photoSource: string
  placeholder: true
}

/**
 * Fictional consultants for layout only.
 * TODO: replace both portraits in /public/images/doctors/ with real staff photographs before launch.
 * The files currently used are royalty-free Pexels stock portraits, not these named people.
 */
export const doctors: Doctor[] = [
  {
    slug: "oliver-bennett",
    name: "Dr Oliver Bennett",
    postNominals: "MBBS FRCOphth",
    role: "Consultant Ophthalmic Surgeon",
    shortBio:
      "Cataract and refractive lens surgery, complex prescriptions and oculoplastics. Fifteen years' experience, trained in London and Oxford.",
    paragraphs: [
      "Dr Oliver Bennett is a fictional placeholder consultant. In this sample profile he is an ophthalmic surgeon with a practice built around cataract surgery, refractive lens exchange and eyelid procedures.",
      "Patients in this demo are described as valuing plain explanations of lens choices and a realistic view of what glasses may still be needed afterwards. He is shown as having trained in London and Oxford, with fifteen years in ophthalmic practice.",
      "This biography is invented for the website template. Do not publish it as a real clinician's history.",
    ],
    specialties: [
      "Cataract surgery",
      "Refractive lens exchange",
      "Complex prescriptions",
      "Oculoplastics",
    ],
    experience: "15 years' experience",
    training: "Trained in London and Oxford",
    photo: "/images/doctors/oliver-bennett.webp",
    photoWidth: 960,
    photoHeight: 1200,
    photoAlt: "Placeholder portrait for Dr Oliver Bennett",
    photoNote: "Placeholder photograph. Replace with a real staff photo before launch.",
    photoCredit: "Royalty-free stock portrait, Pexels photo 5452293",
    photoSource: "https://www.pexels.com/license/",
    placeholder: true,
  },
  {
    slug: "amelia-hart",
    name: "Dr Amelia Hart",
    postNominals: "MBChB FRCOphth",
    role: "Consultant Paediatric Ophthalmologist",
    shortBio:
      "Children's eye care, squint, lazy eye and myopia control. Known for calm, child-friendly appointments.",
    paragraphs: [
      "Dr Amelia Hart is a fictional placeholder consultant. In this sample profile she is a paediatric ophthalmologist who looks after squint, lazy eye and short-sightedness in children.",
      "Appointments in the demo are written as calm and child-friendly, with time for parents to ask questions and for the child to settle before any test begins.",
      "This biography is invented for the website template. Do not publish it as a real clinician's history.",
    ],
    specialties: ["Children's eye care", "Squint", "Lazy eye", "Myopia control"],
    experience: "Consultant paediatric practice",
    training: "Placeholder training history",
    photo: "/images/doctors/amelia-hart.webp",
    photoWidth: 960,
    photoHeight: 1200,
    photoAlt: "Placeholder portrait for Dr Amelia Hart",
    photoNote: "Placeholder photograph. Replace with a real staff photo before launch.",
    photoCredit: "Royalty-free stock portrait, Pexels photo 5214958",
    photoSource: "https://www.pexels.com/license/",
    placeholder: true,
  },
]

export function getDoctor(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug)
}
