export type Stat = {
  id: string
  value: number
  decimals?: number
  suffix: string
  label: string
  placeholder: true
}

/** PLACEHOLDER figures for the layout. Replace with verified clinic numbers before launch. */
export const stats: Stat[] = [
  { id: "years", value: 15, suffix: "+", label: "Years' experience", placeholder: true },
  { id: "staff", value: 12, suffix: "", label: "Specialist staff", placeholder: true },
  { id: "patients", value: 8000, suffix: "+", label: "Patients seen", placeholder: true },
  {
    id: "rating",
    value: 4.9,
    decimals: 1,
    suffix: "",
    label: "Average rating",
    placeholder: true,
  },
]

export const statsNote =
  "Placeholder figures for the design. Replace with verified numbers before launch."
