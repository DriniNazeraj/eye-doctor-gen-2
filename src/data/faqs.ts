const disclaimer = "This is general information, not medical advice."

export type Faq = {
  id: string
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    id: "astigmatism",
    question: "What is astigmatism?",
    answer: `Astigmatism is a common focusing problem. The front of the eye is curved more like a rugby ball than a football, so light does not meet at a single sharp point. Glasses, contact lenses or, in selected adults, surgery can sharpen the image. ${disclaimer}`,
  },
  {
    id: "child-first-test",
    question: "When should my child have their first eye test?",
    answer: `Children in England are offered vision screening in their reception year at school. Arrange a test sooner if you notice a squint, an eye that turns, sitting very close to screens, or frequent headaches. A baby with a white pupil reflex or a sticky, swollen eye needs prompt advice. ${disclaimer}`,
  },
  {
    id: "exam-frequency",
    question: "How often should I have an eye exam?",
    answer: `Many adults with healthy eyes are advised to have an examination about every two years, or sooner if your clinician suggests it. People with diabetes, glaucoma, or a strong family history often need closer review. Do not wait for the routine interval if your sight changes. ${disclaimer}`,
  },
  {
    id: "cataracts",
    question: "What are cataracts?",
    answer: `A cataract is clouding of the lens inside the eye. It often comes on slowly with age and can make vision misty, glare worse at night, or colours look faded. When it affects daily life, the usual treatment is an operation to replace the lens. ${disclaimer}`,
  },
  {
    id: "glaucoma",
    question: "What is glaucoma?",
    answer: `Glaucoma is a group of conditions that can damage the optic nerve, often linked with pressure inside the eye. Early on there may be no symptoms, which is why regular eye tests matter. Treatment aims to lower the pressure and protect the remaining sight. ${disclaimer}`,
  },
  {
    id: "dry-eyes",
    question: "Dry eyes, what helps?",
    answer: `Dry eye is common, especially with screens, air conditioning and some medicines. Blinking fully, taking screen breaks, and using preservative-free lubricating drops often help. Ask for a review if the eye is painful, light hurts, or vision drops. ${disclaimer}`,
  },
  {
    id: "screens",
    question: "Screens and eye strain",
    answer: `Looking at screens does not damage the eye, but people blink less and eyes can feel tired and dry. Every 20 minutes, look about 20 feet away for 20 seconds, and keep the screen slightly below eye level. An eye test is still worthwhile if the strain does not settle. ${disclaimer}`,
  },
  {
    id: "something-in-eye",
    question: "Something in my eye, what should I do?",
    answer: `Do not rub the eye. For a loose speck of dust, rinse gently with clean water or sterile saline. If something is stuck, a chemical has entered the eye, or vision is reduced or painful, seek same-day care and do not try to remove it yourself. ${disclaimer}`,
  },
]
