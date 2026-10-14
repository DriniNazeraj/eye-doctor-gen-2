import type { IconName } from "../lib/icons.tsx"

export type Service = {
  slug: string
  title: string
  shortDescription: string
  icon: IconName
  price: string
  priceNote: string
  duration: string
  summary: string
  paragraphs: string[]
  suitableFor: string
  includes: string[]
}

export const services: Service[] = [
  {
    slug: "eye-consultation",
    title: "Eye Consultation",
    shortDescription:
      "A thorough consultant examination, with time to talk through symptoms, glasses and the next step.",
    icon: "eye",
    price: "From £250",
    priceNote: "Indicative placeholder fee. Confirm the fee before launch.",
    duration: "About 45 minutes",
    summary:
      "A private eye consultation with a consultant ophthalmologist, including a vision check and a plan you can understand.",
    paragraphs: [
      "Your first visit is unhurried. We ask about your sight, general health and any family history, then examine the eyes carefully. You will leave knowing what we found and whether any treatment, glasses or further scans are sensible.",
      "Bring your current glasses, a list of medicines and any previous clinic letters. If your eyes need dilating drops, your vision may be blurred for a few hours, so it is wise not to drive yourself home.",
    ],
    suitableFor:
      "Adults with a change in vision, eye discomfort, flashes, floaters, or anyone who wants a consultant opinion.",
    includes: [
      "History and symptom review",
      "Vision and eye pressure check",
      "Slit-lamp examination",
      "A written plan after the visit",
    ],
  },
  {
    slug: "paediatric-ophthalmology",
    title: "Paediatric Ophthalmology",
    shortDescription:
      "Calm, child-friendly appointments for squint, lazy eye, focusing problems and myopia control.",
    icon: "baby",
    price: "From £280",
    priceNote: "Indicative placeholder fee. Confirm the fee before launch.",
    duration: "About 45–60 minutes",
    summary:
      "Consultant care for babies, children and teenagers, paced so a young patient can take part without feeling rushed.",
    paragraphs: [
      "Children rarely sit still for a long test, so appointments are planned around that. We check how the eyes move and focus, look for a squint or lazy eye, and explain the findings to parents in plain English.",
      "Where glasses, patching or myopia control may help, we talk through the options and what day-to-day life will actually involve. Urgent symptoms, such as a sudden turn in the eye or a white pupil reflex, should be seen promptly.",
    ],
    suitableFor:
      "Babies and children with a squint, suspected lazy eye, headaches, or difficulty seeing the board at school.",
    includes: [
      "Age-appropriate vision testing",
      "Assessment of eye alignment",
      "Discussion with parents or carers",
      "A clear follow-up plan",
    ],
  },
  {
    slug: "diagnostic-imaging",
    title: "Diagnostic Imaging",
    shortDescription:
      "OCT scans and visual field tests on site, so many answers are available at the same visit.",
    icon: "scan",
    price: "From £150",
    priceNote: "Indicative placeholder fee. Confirm the fee before launch.",
    duration: "About 20–40 minutes",
    summary:
      "High-resolution scans and visual field testing to look at the retina, optic nerve and how wide your vision is.",
    paragraphs: [
      "Optical coherence tomography (OCT) takes a cross-section picture of the retina and optic nerve. Visual field testing maps the areas of sight you can and cannot see. Together they help us monitor glaucoma, macular change and other conditions.",
      "Most scans are painless and take only a few minutes. You may need dilating drops. Results are reviewed by a consultant and explained in the context of your examination, not as a number on their own.",
    ],
    suitableFor:
      "People being monitored for glaucoma or macular disease, and patients who need a baseline scan.",
    includes: [
      "OCT scan where indicated",
      "Visual field test where indicated",
      "Consultant review of the images",
      "A copy of the relevant findings",
    ],
  },
  {
    slug: "medical-retina",
    title: "Medical Retina",
    shortDescription:
      "Consultant care for macular degeneration, diabetic eye disease, vein occlusions and uveitis.",
    icon: "retina",
    price: "From £295",
    priceNote: "Indicative placeholder fee. Confirm the fee before launch.",
    duration: "About 40 minutes",
    summary:
      "Diagnosis and ongoing care for medical conditions at the back of the eye, including inflammation.",
    paragraphs: [
      "The retina turns light into the signals your brain reads as vision. Disease here can be subtle at first. We use examination and imaging to look for age-related macular change, diabetic retinopathy, retinal vein problems and uveitis.",
      "Treatment depends on the condition. It may include observation, drops, or injections given in a sterile setting. We explain the aim of treatment, how often you may need to be seen, and the warning signs that should bring you back sooner.",
    ],
    suitableFor:
      "Adults with distorted central vision, diabetes, known macular disease, or inflammation inside the eye.",
    includes: [
      "Dilated retinal examination",
      "Imaging as required",
      "A treatment or monitoring plan",
      "Advice on urgent warning symptoms",
    ],
  },
  {
    slug: "cataract-surgery",
    title: "Cataract Surgery",
    shortDescription:
      "Consultant-led lens replacement when a cloudy lens is getting in the way of reading, driving or work.",
    icon: "cataract",
    price: "From £2,950 per eye",
    priceNote: "Indicative placeholder fee. Confirm the fee before launch.",
    duration: "Surgery usually under an hour; consultation about 40 minutes",
    summary:
      "Day-case cataract surgery to replace a cloudy lens, with time beforehand to choose a lens that suits your life.",
    paragraphs: [
      "A cataract is a clouding of the natural lens. Surgery removes that lens and replaces it with a clear implant. Most people have the operation with local anaesthetic and go home the same day.",
      "At the consultation we measure the eye, talk through standard and premium lens choices, and set realistic expectations about glasses afterwards. Fees, follow-up and the small risks of surgery are discussed before you decide.",
    ],
    suitableFor:
      "Adults whose cataract is affecting daily tasks such as driving, reading or recognising faces.",
    includes: [
      "Pre-operative measurements",
      "Lens choice discussion",
      "Day-case surgery planning",
      "Post-operative review",
    ],
  },
  {
    slug: "glaucoma-care",
    title: "Glaucoma Care",
    shortDescription:
      "Monitoring and treatment aimed at protecting the optic nerve and preserving sight.",
    icon: "glaucoma",
    price: "From £275",
    priceNote: "Indicative placeholder fee. Confirm the fee before launch.",
    duration: "About 40 minutes",
    summary:
      "Assessment and long-term care for glaucoma and ocular hypertension, built around eye pressure, fields and scans.",
    paragraphs: [
      "Glaucoma usually develops quietly. We measure eye pressure, examine the optic nerve and, where needed, repeat visual fields and OCT so we can see change over time rather than rely on a single visit.",
      "Treatment often starts with drops to lower pressure. Laser or surgery is considered if drops are not enough or are hard to tolerate. You will know why a treatment is suggested and how we will judge whether it is working.",
    ],
    suitableFor:
      "People with raised eye pressure, a glaucoma diagnosis, or a strong family history who want consultant monitoring.",
    includes: [
      "Pressure and nerve assessment",
      "Field or OCT testing when indicated",
      "Drop, laser or surgery discussion",
      "A monitoring interval",
    ],
  },
  {
    slug: "oculoplastic-eyelid-surgery",
    title: "Oculoplastic & Cosmetic Eyelid Surgery",
    shortDescription:
      "Eyelid surgery for watering, lumps, drooping lids and carefully considered cosmetic change.",
    icon: "lid",
    price: "Consultation from £450",
    priceNote: "Indicative placeholder fee. Surgery is quoted after examination. Confirm before launch.",
    duration: "Consultation about 40 minutes",
    summary:
      "Consultant oculoplastic care for eyelid position, lumps, tearing and cosmetic eyelid surgery.",
    paragraphs: [
      "Eyelid problems can affect comfort and sight as well as appearance. A heavy upper lid may crowd the vision. A turning lid can make the eye water or feel sore. We examine the lids, the tear film and the eye surface before suggesting any procedure.",
      "Cosmetic eyelid surgery is discussed honestly, including what it will not change. Medical and cosmetic reasons are kept distinct so you can decide with a clear idea of the aim, the recovery and the fee.",
    ],
    suitableFor:
      "Adults with drooping lids, eyelid lumps, watering eyes, or who are considering cosmetic eyelid surgery.",
    includes: [
      "Eyelid and ocular surface examination",
      "Photographs where useful",
      "Surgical and non-surgical options",
      "A written quote if surgery is planned",
    ],
  },
  {
    slug: "contact-lenses-optical",
    title: "Contact Lenses & Optical",
    shortDescription:
      "Contact lens fitting and advice on glasses, including complex prescriptions after surgery.",
    icon: "optical",
    price: "From £120",
    priceNote: "Indicative placeholder fee. Confirm the fee before launch.",
    duration: "About 30–45 minutes",
    summary:
      "Fitting and aftercare for contact lenses, plus practical advice on glasses and complex prescriptions.",
    paragraphs: [
      "Some prescriptions are hard to settle in glasses alone, especially after corneal change or lens surgery. We fit contact lenses carefully, teach you how to handle them, and review comfort and eye health.",
      "This is not a high-street frame shop. The focus is clinical fitting, safety and a prescription that works for work, sport and driving. Routine glasses can still be made up elsewhere from the prescription we provide.",
    ],
    suitableFor:
      "People who want a consultant or specialist fitting, including after surgery or with a complex prescription.",
    includes: [
      "Prescription check",
      "Lens trial where appropriate",
      "Handling and hygiene advice",
      "A follow-up to check the fit",
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
