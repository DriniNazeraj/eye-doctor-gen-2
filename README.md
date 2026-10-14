# Clearview Eye Clinic

Front end for a private London eye clinic. Vite, React, TypeScript and Tailwind CSS. There is no back end: the booking and contact forms validate in the browser and show a success toast only.

```bash
npm install
npm run dev
npm run build
```

Rename the clinic in `src/config/site.ts`. Page copy lives in `src/data/`.

## Replace before launch

These items are placeholders. Do not treat them as real clinic facts.

- **Name and tagline** — Clearview Eye Clinic, “Specialist eye care in the heart of London” (`src/config/site.ts`).
- **Website URL** — `https://clearvieweye.example`.
- **Address** — 24 Harley Street, London W1G 9PL.
- **Phone** — 020 7946 0321 (Ofcom fictional range) and the WhatsApp link built from it.
- **Email** — hello@clearvieweye.example.
- **Doctors** — Dr Oliver Bennett and Dr Amelia Hart are fictional. Their biographies, qualifications and training notes are invented.
- **Doctor photos** — `/public/images/doctors/oliver-bennett.webp` and `amelia-hart.webp` are royalty-free Pexels stock portraits (photos 5452293 and 5214958), not these people. Replace both with real staff photographs.
- **Reviews** — six sample quotes in `src/data/reviews.ts`. Replace with real Google reviews. The page already says: “Sample reviews – replace with real Google reviews before launch”.
- **Statistics** — 15+ years, 12 specialist staff, 8,000+ patients, 4.9 average rating in `src/data/stats.ts`. All marked placeholder.
- **Registration badges** — “GMC registered consultants” and “CQC registered clinic” are placeholder claims in `src/data/content.ts`.
- **Fees** — every “from £…” price in `src/data/services.ts` is an indicative placeholder.
- **Videos** — hero, clinic tour, first consultation, cataract and children’s eye-test clips in `/public/videos/` are compressed Pexels stock films credited in `src/data/media.ts`. Replace them with footage of this clinic. Credits: Karolina Grabowska, Pavel Danilyuk, and cottonbro studio, under the [Pexels licence](https://www.pexels.com/license/).
- **Map, social links, privacy and cookie pages** — the map points at the placeholder address, social links are generic, and the legal pages are not a real policy.
- **Booking and contact** — nothing is submitted. Wire `POST /api/appointments` and `POST /api/contact` at the TODO comments in `src/components/forms/BookingForm.tsx` and `src/components/forms/ContactForm.tsx`.

Opening hours in `src/data/hours.ts` match the brief (Monday to Friday 08:30–19:00, Saturday 09:00–15:00, Sunday closed). Change them there if the real diary differs.
