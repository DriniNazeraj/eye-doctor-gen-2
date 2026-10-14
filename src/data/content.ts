export const mainNav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Doctors", to: "/doctors" },
  { label: "Advice", to: "/advice" },
  { label: "Contact", to: "/contact" },
] as const

export const labels = {
  book: "Book appointment",
  bookSentence: "Book an appointment",
  learnMore: "Learn more",
  viewProfile: "View profile",
  exploreServices: "Explore services",
  skip: "Skip to content",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  playVideo: "Play video",
  closeDialog: "Close",
  previousReview: "Previous reviews",
  nextReview: "Next reviews",
  videoFallback: "Video coming soon",
}

export const homeCopy = {
  hero: {
    title: "Clear vision, expert care.",
    subtitle:
      "Consultant-led eye care in London, with time to examine properly and explain what we find.",
    chips: ["Consultant-led", "Latest diagnostic imaging", "Same-week appointments"],
  },
  info: {
    hoursTitle: "Opening hours",
    appointmentsTitle: "Appointments",
    appointmentsBody:
      "New and returning patients can request a time online. We aim to offer same-week appointments when the diary allows.",
    contactTitle: "Contact",
  },
  about: {
    eyebrow: "The clinic",
    title: "Consultant care, explained clearly",
    paragraphs: [
      "Clearview Eye Clinic is a consultant-led practice in central London. The team covers medical retina, uveitis, paediatric eye care, oculoplastics, glaucoma and cataract surgery.",
      "You see a named ophthalmologist, not a rota of unfamiliar faces. Examinations are unhurried, imaging can often be done on the same visit, and you leave with a plan written in language you can share with your family or optometrist.",
    ],
    tourButton: "Play the clinic tour",
    badges: [
      {
        label: "GMC registered consultants",
        note: "Placeholder claim. Confirm registration before launch.",
      },
      {
        label: "CQC registered clinic",
        note: "Placeholder claim. Confirm registration before launch.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Care for the whole family",
    intro:
      "From a first eye examination to surgery and children's appointments, every service is led by a consultant.",
    all: "View all services",
  },
  faq: {
    eyebrow: "Advice",
    title: "Straight answers to common questions",
    intro: "Short notes in plain English. They do not replace a consultation.",
    more: "Read all advice",
  },
  videos: {
    eyebrow: "See what to expect",
    title: "A look at the visit, before you arrive",
    intro: "Short demo clips. They are stock footage, not recordings of this clinic.",
    demoNote: "Demo footage — replace with the clinic's own films before launch.",
  },
  doctors: {
    eyebrow: "Our doctors",
    title: "The consultants you will see",
    intro: "Two placeholder profiles so the layout is ready for the real team.",
    all: "Meet the team",
  },
  reviews: {
    eyebrow: "Patient stories",
    title: "What a visit can feel like",
  },
  location: {
    eyebrow: "Find us",
    title: "Harley Street, London",
    parking:
      "Street parking is limited. There are NCP car parks nearby. The nearest Underground stations are Regent's Park and Oxford Circus.",
    mapTitle: "Map showing 24 Harley Street, London",
  },
  cta: {
    title: "Ready to book your eye examination?",
    body: "Tell us the service you need and a preferred day. This demo confirms on screen only.",
  },
}

export const pageCopy = {
  services: {
    title: "Eye care services",
    description:
      "Private ophthalmology in London: consultations, children's eye care, imaging, retina, cataract, glaucoma, eyelids and contact lenses.",
    intro:
      "Choose a service to see who it is for, what the visit includes, and an indicative fee. Fees shown are placeholders.",
    suitable: "Who it is for",
    includes: "What the visit includes",
    fee: "Indicative fee",
    others: "Other services",
  },
  doctors: {
    title: "Our doctors",
    description:
      "Meet the consultant ophthalmologists at Clearview Eye Clinic. These profiles are fictional placeholders.",
    intro:
      "These consultants are fictional and the photographs are stock portraits. Replace both before launch.",
  },
  advice: {
    title: "Eye care advice",
    description:
      "Plain-English answers about astigmatism, children's eye tests, cataracts, glaucoma, dry eye and eye strain.",
    intro:
      "General information written in the style of a patient leaflet. It is not a diagnosis and not medical advice for you.",
  },
  book: {
    title: "Book an appointment",
    description:
      "Request a private eye appointment at Clearview Eye Clinic in London. This form is a demonstration and does not send your details.",
  },
  contact: {
    title: "Contact the clinic",
    description:
      "Phone, email and a contact form for Clearview Eye Clinic, 24 Harley Street, London.",
  },
  privacy: {
    title: "Privacy",
    description: "Placeholder privacy notice for Clearview Eye Clinic.",
  },
  cookies: {
    title: "Cookies",
    description: "Placeholder cookie information for Clearview Eye Clinic.",
  },
  notFound: {
    title: "Page not found",
    description: "That page is not on the Clearview Eye Clinic website.",
    heading: "We cannot find that page",
    body: "The link may be out of date. You can return home or book an appointment.",
    home: "Back to home",
  },
}

export const bookingCopy = {
  eyebrow: "Appointments",
  title: "Request a time",
  intro:
    "Four short steps, then a summary. Nothing is sent to the clinic yet — this form is a demonstration.",
  steps: ["Service", "Consultant", "Date", "Your details", "Summary"],
  serviceLabel: "Which service do you need?",
  doctorLabel: "Who would you like to see?",
  noPreference: "No preference",
  dateLabel: "Preferred date",
  dateHint: "Sundays are closed. Saturday appointments finish at 15:00.",
  timeLabel: "Preferred time of day",
  morning: "Morning",
  afternoon: "Afternoon",
  morningHint: "08:30–12:30",
  afternoonHint: "12:30–19:00 (until 15:00 on Saturday)",
  detailsTitle: "Your details",
  name: "Full name",
  email: "Email",
  phone: "UK phone number",
  dob: "Date of birth",
  patientType: "Have you been here before?",
  newPatient: "New patient",
  existingPatient: "Existing patient",
  message: "Anything we should know?",
  messageHint: "Optional. For example, glasses, drops, or a referral.",
  consent:
    "I agree to the clinic contacting me about this request. I understand this demo does not send my details anywhere.",
  next: "Continue",
  back: "Back",
  edit: "Change",
  submit: "Confirm request",
  summaryTitle: "Check your request",
  successTitle: "Request noted on this device",
  successBody:
    "Thank you. This is a demonstration, so no appointment has been booked and nothing has been emailed. When the clinic connects its booking system, this step will send the request.",
  successToast: "Demonstration only — your request was not sent.",
  another: "Start another request",
  errors: {
    service: "Please choose a service.",
    doctor: "Please choose a consultant, or no preference.",
    date: "Please choose a preferred date.",
    sunday: "The clinic is closed on Sundays. Please choose another day.",
    past: "Please choose today or a later date.",
    timeOfDay: "Please choose morning or afternoon.",
    name: "Please enter your full name.",
    email: "Please enter a valid email address.",
    phone: "Enter a UK phone number, for example 07700 900123.",
    dob: "Please enter a valid date of birth.",
    dobFuture: "Date of birth cannot be in the future.",
    patientType: "Please tell us if you are a new or existing patient.",
    message: "Please keep the message under 1,000 characters.",
    consent: "Please tick the box so we know we may contact you about this request.",
  },
}

export const contactCopy = {
  title: "Write to the clinic",
  intro: "Send a note about appointments, records or a general question. This demo does not deliver the message.",
  name: "Full name",
  email: "Email",
  phone: "UK phone number",
  message: "Message",
  submit: "Send message",
  honeypot: "Website",
  successToast: "Demonstration only — your message was not sent.",
  errors: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    phone: "Enter a UK phone number, or leave the field blank.",
    message: "Please write a short message.",
  },
}

export const cookieCopy = {
  title: "Cookies",
  body: "We store one essential choice on this device so this notice stays dismissed. This demo does not set advertising cookies.",
  accept: "Accept",
  essential: "Essential only",
}

export const footerCopy = {
  blurb:
    "A consultant-led private eye clinic in central London. Calm appointments, clear explanations, and care for adults and children.",
  quickLinks: "Quick links",
  services: "Services",
  contact: "Contact",
  hours: "Opening hours",
  privacy: "Privacy",
  cookies: "Cookies",
  disclaimer:
    "Information on this website is general and does not replace a consultation. If you have sudden loss of vision, a painful eye, or an eye injury, seek urgent medical help.",
  rights: "All rights reserved.",
}

export const legalCopy = {
  privacy: [
    "This privacy page is a PLACEHOLDER and is not a legal notice. Replace it with a policy written for the real clinic before launch.",
    "In the finished site, explain what you collect through the booking and contact forms, why you hold it, how long you keep it, and who patients can write to. The data controller details, ICO registration and any processors (such as an email or booking provider) must be the clinic's own.",
    "Do not publish this template text as if it were advice from a solicitor.",
  ],
  cookies: [
    "This cookie page is a PLACEHOLDER. The demo stores a single flag in local storage so the cookie banner can stay closed.",
    "Before launch, list every cookie the live site actually sets, including any analytics, maps or booking tools, and say how a visitor can refuse non-essential ones.",
  ],
}
