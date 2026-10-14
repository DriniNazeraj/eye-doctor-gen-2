export type Review = {
  id: string
  quote: string
  name: string
  rating: number
  placeholder: true
}

/** Sample reviews for layout. Replace with real Google reviews before launch. */
export const reviews: Review[] = [
  {
    id: "helen",
    quote:
      "The consultation was unhurried and everything was explained in plain English. I left knowing exactly what the next step was.",
    name: "Helen M.",
    rating: 5,
    placeholder: true,
  },
  {
    id: "james",
    quote:
      "Our son was nervous, but the team made the appointment feel calm and almost ordinary. We finally understand his squint.",
    name: "James P.",
    rating: 5,
    placeholder: true,
  },
  {
    id: "priya",
    quote:
      "I was offered a same-week appointment and the scan was done there and then. Professional, without feeling rushed.",
    name: "Priya S.",
    rating: 5,
    placeholder: true,
  },
  {
    id: "david",
    quote:
      "Cataract surgery was explained carefully, including the lens choices and what glasses I might still need. The day itself felt well organised.",
    name: "David R.",
    rating: 5,
    placeholder: true,
  },
  {
    id: "sophie",
    quote:
      "I have dry eyes from long hours at a desk. The advice was practical, and the drops they suggested actually helped.",
    name: "Sophie L.",
    rating: 4,
    placeholder: true,
  },
  {
    id: "andrew",
    quote:
      "Clear fees, a consultant who listened, and a follow-up letter I could understand. That is what I wanted from a private clinic.",
    name: "Andrew K.",
    rating: 5,
    placeholder: true,
  },
]

export const reviewsNote =
  "Sample reviews – replace with real Google reviews before launch"
