# Plan: Add Dr. Muhammad Abdul Bari as HR Expert (Wings Consultants BD)

Source: `doc/Dr_Muhammad_Abdul_Bari_International_Trainer_CV.docx` (text and a 350 x 350 px photo).

## Goal

Show Dr. Muhammad Abdul Bari on the Wings site as the firm's HR Expert. Visitors can read
the profile and book an HR or training consultation.

## Where the profile appears

| Place | What it shows |
|---|---|
| `/wings/about`, new "Our Experts" section | Photo, name, "HR Expert", 1-line summary, 3 key facts, link to the profile |
| `/wings/experts/dr-muhammad-abdul-bari` (new page) | The full profile (see below) |
| `/wings` home, short strip above the CTA band | Photo, name, title and a "View profile" link |
| Header nav | No new item. "About" stays the entry point, so the nav keeps 7 items. |

The data model takes a list of experts. More people can be added later with no code change.

## Profile page content (from the CV)

1. Hero: photo, name, "HR Expert", subtitle "Professional Trainer, HRM and Management
   Consultant, Development and Capacity-Building Specialist".
2. Key facts: 19+ years in the NGO and development sector, PhD in HRM, senior advisory level.
3. Executive profile: the CV paragraph, made shorter.
4. Areas of expertise: the 8 areas from the CV (Strategic HRM, Leadership, ToT,
   Organizational Development, Programme Management, NGO Management, Resource Mobilization,
   Development Finance), as cards.
5. Training modules: the 12 modules, as a 2-column list.
6. Method: the 7 trainer competencies.
7. Experience: Work Info (current), Ashroy Angon Society (2026 to present),
   19+ years in the NGO sector.
8. Education: PhD in Human Resource Management.
9. Sectors: the 10 sectors, as tags.
10. CTA: "Book a session with Dr. Bari" opens the consultation pop-up with
    "HR, Training & Capacity Building" already selected.

## Changes to files

| File | Change |
|---|---|
| `src/wingsTypes.ts` | Add `ExpertProfile` type (slug, name, title, photo, summary, facts, expertise, modules, methods, experience, education, sectors, linkedin?) |
| `src/data/wingsInitialData.ts` | Add `initialExperts` with Dr. Bari's data |
| `src/wings/WingsCmsContext.tsx` | Expose `experts` |
| `src/wings/ExpertsSection.tsx` (new) | Expert card grid for About and Home |
| `src/pages/wings/ExpertDetailPage.tsx` (new) | Profile page with `usePageMeta` and a `Person` JSON-LD block |
| `src/App.tsx` | Add route `wings/experts/:slug`. An unknown slug goes to `/wings/about#experts` |
| `src/pages/wings/AboutPage.tsx`, `HomePage.tsx` | Add `ExpertsSection` |
| `src/wings/ConsultationModal.tsx`, `WingsContact.tsx` | Add the option "HR, Training & Capacity Building" |
| `public/images/team/muhammad-abdul-bari.webp` (new) | Photo from the CV, converted to WebP |
| `public/sitemap.xml` | Add the profile URL |

## Privacy decision

The CV has a personal mobile number and a personal email. The site will not show them.
All contact goes through the Wings phone, email and consultation form. The LinkedIn link
is shown only if Dr. Bari agrees.

## Before publish

1. Get consent from Dr. Bari to publish the name, photo and profile.
2. Ask Dr. Bari to check the facts on the profile page, mainly the education entry.
3. Confirm the title "HR Expert", or use a longer one, for example "Senior HR & Training Expert".

## Verify

1. Run `npm run lint` and `npm run build`.
2. Check the About page, the Home strip and the profile page at 375 px and 1440 px.
3. Check that the CTA opens the pop-up with the correct option selected.
4. Push to `main`. Netlify publishes the change.
