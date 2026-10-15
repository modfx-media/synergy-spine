// Programmatic SEO services data: 14 high-intent service/condition pages.
// Each service contributes one page per city (75 cities) for ~1,050 total programmatic pages.

export type ServiceCopy = {
  slug: string; // url segment, e.g. "spinal-decompression"
  name: string; // display name, e.g. "Spinal Decompression"
  short: string; // very short noun, e.g. "spinal decompression"
  category: "service" | "condition";
  // Title/meta templates: {city} substituted at render
  titleTemplate: string;
  descriptionTemplate: string;
  h1Template: string;
  // Long-form, service-specific content (shared across cities, authoritative content)
  whatItIs: string;
  howItWorks: string[];
  helpsWith: string[];
  whoItsFor: string;
  expect: string[];
  // Service FAQs (city is interpolated where {city} appears)
  faqs: { q: string; a: string }[];
  // Featured related services (slugs) for cross-linking
  related: string[];
};

export const SERVICES: ServiceCopy[] = [
  {
    slug: "chiropractor",
    name: "Chiropractor",
    short: "chiropractic care",
    category: "service",
    titleTemplate: "Chiropractor in {city}, NM | Synergy Spine and Nerve Center",
    descriptionTemplate:
      "Looking for a trusted chiropractor near {city}, NM? Synergy Spine and Nerve Center delivers honest, evidence-based chiropractic care to {city} families. Call (505) 891-2280.",
    h1Template: "Chiropractor in {city}, NM",
    whatItIs:
      "Chiropractic care is a hands-on, drug-free approach focused on the relationship between your spine and your nervous system. When small spinal joints lose proper motion or alignment, what we call subluxation, they can interfere with the nerve signals controlling muscles, organs, and overall health. A chiropractor restores that motion through specific, gentle adjustments so the body can heal the way it was designed to.",
    howItWorks: [
      "Comprehensive history and posture intake on your first visit.",
      "A 17-page Spinal Health Assessment (SHA) to objectively score where your spine stands today.",
      "A clear care plan with specific adjustments matched to your findings.",
      "Daily Spinal Hygiene exercises so you can hold your gains between visits.",
      "Re-exams to measure progress, not just chase symptoms.",
    ],
    helpsWith: [
      "Low back pain and stiffness",
      "Neck pain and headaches",
      "Pinched nerves and radiating pain",
      "Posture and forward-head posture",
      "Auto-accident and whiplash recovery",
      "Sports performance and recovery",
      "Pregnancy-related back pain",
      "Pediatric posture and growth concerns",
    ],
    whoItsFor:
      "Anyone who wants to take care of their spine the same way they take care of their teeth, proactively. We treat children through retirees, athletes through office workers, and post-injury patients who never want a recurrence.",
    expect: [
      "About 45–60 minutes for your first visit",
      "An honest conversation about whether chiropractic is the right fit",
      "No surprise upsells, no pre-paid bundles, no contracts",
      "A written report-of-findings before any care begins",
    ],
    faqs: [
      {
        q: "How do I find the best chiropractor near {city}, NM?",
        a: "Look for a chiropractor with measurable, objective metrics, not just feel-good adjustments. Ask whether they perform a Spinal Health Assessment, whether they teach you home spinal hygiene, and whether they're willing to refer you out if you're not the right fit. Synergy Spine and Nerve Center serves {city} from our Rio Rancho office and grades every spine on a 0–100 scale so you know exactly what's improving.",
      },
      {
        q: "Is chiropractic care safe?",
        a: "Yes. When delivered by a licensed Doctor of Chiropractic, evidence-based chiropractic adjustments are one of the safest forms of musculoskeletal care available. We screen for red flags during your evaluation, and adjust care to your age, build, and tolerance.",
      },
      {
        q: "How many visits will I need?",
        a: "It depends on how long the issue has been there and how your body responds in the first two weeks. Most {city} patients see meaningful change within 4–8 visits, with a maintenance schedule from there. We re-exam regularly so you're not on care longer than needed.",
      },
      {
        q: "Do you accept insurance?",
        a: "We accept most major plans for medically necessary care and offer transparent self-pay options for wellness and maintenance visits. Call (505) 891-2280 and we'll verify your benefits before your first visit.",
      },
    ],
    related: ["spinal-decompression", "sciatica-relief", "back-pain-relief"],
  },
  {
    slug: "spinal-decompression",
    name: "Spinal Decompression",
    short: "spinal decompression",
    category: "service",
    titleTemplate:
      "Spinal Decompression in {city}, NM | Synergy Spine and Nerve",
    descriptionTemplate:
      "Non-surgical spinal decompression for {city}, NM patients with disc bulges, herniation, sciatica, and chronic low-back pain. Call (505) 891-2280.",
    h1Template: "Spinal Decompression in {city}, NM",
    whatItIs:
      "Spinal decompression is a non-surgical traction-based therapy that gently stretches and de-loads the spine to create negative pressure inside the disc. That negative pressure helps pull bulged or herniated material back toward center and rehydrates the disc with the nutrients it needs to heal. It's one of the most evidence-supported alternatives to back surgery for the right patient.",
    howItWorks: [
      "We confirm imaging or order an MRI when needed to identify the exact disc level.",
      "You lie comfortably on a decompression table, fully clothed, with a soft harness.",
      "The table applies a precise, computer-controlled pull-and-release pattern over 20–30 minutes.",
      "Most {city} patients pair decompression with adjustments and home spinal hygiene to lock in results.",
    ],
    helpsWith: [
      "Bulging or herniated lumbar discs",
      "Cervical disc issues with arm pain or numbness",
      "Sciatica with leg pain, numbness, or tingling",
      "Pinched nerves and radiculopathy",
      "Degenerative disc disease",
      "Facet syndrome with stiffness on movement",
      "Failed back surgery syndrome (case dependent)",
    ],
    whoItsFor:
      "Adults with imaging-confirmed disc problems, chronic low back pain that hasn't responded to typical care, or sciatica that flares with sitting and driving. We screen carefully, decompression isn't for everyone, and we'll tell you up front if you're not a candidate.",
    expect: [
      "30-minute sessions, fully clothed, no needles or medication",
      "A schedule of 3–5 visits a week tapering down as you improve",
      "Home stretches and core stability work between sessions",
      "Clear progress checkpoints, we measure, we don't guess",
    ],
    faqs: [
      {
        q: "Does spinal decompression really work for herniated discs in {city} patients?",
        a: "Yes, for the right candidate. Multiple peer-reviewed studies show non-surgical decompression can reduce intra-discal pressure to negative levels, which is the mechanism that helps a herniation retract. We've helped many {city}-area patients avoid surgery this way, but we're up-front when imaging shows decompression isn't the right tool.",
      },
      {
        q: "Is spinal decompression painful?",
        a: "It shouldn't be. Most patients find sessions relaxing, many even fall asleep on the table. If you feel pinching or sharp pain we adjust the protocol or stop the session.",
      },
      {
        q: "How many decompression sessions will I need?",
        a: "Most cases respond within 20 sessions over 6–8 weeks, then taper. We re-exam every 12 visits and stop care the moment we hit a plateau or the goal.",
      },
      {
        q: "How is this different from regular traction or an inversion table?",
        a: "Regular traction pulls steadily, which causes the muscles to guard against the pull. Modern decompression uses a computer-controlled pull-and-release pattern that bypasses the guarding reflex and produces actual negative pressure inside the disc. Inversion tables can help mild cases but can't reliably deliver the targeted, segmental pull that decompression does.",
      },
    ],
    related: ["sciatica-relief", "herniated-disc-treatment", "back-pain-relief"],
  },
  {
    slug: "sciatica-relief",
    name: "Sciatica Relief",
    short: "sciatica relief",
    category: "condition",
    titleTemplate:
      "Sciatica Relief in {city}, NM | Synergy Spine and Nerve Center",
    descriptionTemplate:
      "Drug-free sciatica relief for {city}, NM. Synergy Spine and Nerve Center treats the root cause of leg pain, numbness, and tingling. Call (505) 891-2280.",
    h1Template: "Sciatica Relief in {city}, NM",
    whatItIs:
      "Sciatica is the name we give to symptoms, pain, numbness, burning, or weakness running down one leg, that come from irritation or compression of the sciatic nerve. The nerve itself is rarely the problem. The problem is almost always at the spine: a disc bulge, a tight piriformis, a stuck SI joint, or a degenerated lumbar segment squeezing the nerve root. Treat the cause and the leg quiets down.",
    howItWorks: [
      "A neurologic and orthopedic exam to confirm true sciatica vs. a copycat.",
      "Imaging review (or referral) to identify the lumbar level driving symptoms.",
      "A combination of specific spinal adjustments, decompression, and soft-tissue work.",
      "Targeted home exercises so symptoms don't return the moment you leave.",
    ],
    helpsWith: [
      "Sharp pain shooting from the low back into the buttock or leg",
      "Numbness or tingling in the foot or toes",
      "Pain that worsens with sitting, driving, or sneezing",
      "Weakness in the leg that makes the foot drop or buckle",
      "Pain that radiates down one side, not both",
    ],
    whoItsFor:
      "Anyone with leg pain that started in the low back. Office workers, drivers, contractors, postpartum moms, and active retirees in {city} all see meaningful relief once the source is correctly identified.",
    expect: [
      "A clear answer on whether your leg pain is true sciatica",
      "An honest referral if surgery is the right call",
      "A care plan focused on the cause, not just the symptom",
      "Most patients see leg-pain reduction within 1–3 weeks"
    ],
    faqs: [
      {
        q: "How long does it take to fix sciatica with chiropractic care in {city}?",
        a: "Most {city} patients see meaningful improvement within 1–3 weeks once the cause is identified. Long-standing or disc-driven sciatica may need 6–8 weeks of combined adjustments, decompression, and rehab. We re-exam regularly so you can see the change in objective terms.",
      },
      {
        q: "Will I need an MRI before treatment?",
        a: "Not necessarily. We start with a thorough neurologic exam. If your symptoms suggest a disc, if there are red flags, or if you're not improving as expected, we'll order or refer for imaging.",
      },
      {
        q: "Are injections or surgery better than chiropractic for sciatica?",
        a: "Injections quiet symptoms but rarely fix the cause. Surgery has its place, but only after conservative care has been given a fair trial. The published evidence supports conservative care first for the vast majority of sciatica cases.",
      },
      {
        q: "Can I keep working out with sciatica?",
        a: "Usually yes, we modify around it. Stopping all activity is rarely the answer; the goal is to keep moving in ways that don't aggravate the nerve. We give you a list on day one.",
      },
    ],
    related: ["spinal-decompression", "back-pain-relief", "herniated-disc-treatment"],
  },
  {
    slug: "back-pain-relief",
    name: "Back Pain Relief",
    short: "back pain relief",
    category: "condition",
    titleTemplate:
      "Back Pain Relief in {city}, NM | Synergy Spine and Nerve Center",
    descriptionTemplate:
      "Lasting back pain relief for {city}, NM. Drug-free chiropractic care that finds and fixes the cause, not just the symptom. Call (505) 891-2280.",
    h1Template: "Back Pain Relief in {city}, NM",
    whatItIs:
      "Back pain is the most common reason adults visit a chiropractor, and it has dozens of possible drivers, disc, joint, muscle, nerve, or postural. The reason most back pain comes back is that the original cause was never identified. We separate the symptom from the source so the relief sticks.",
    howItWorks: [
      "A focused exam to identify the structural driver, disc, joint, or soft tissue.",
      "A care plan matched to the driver, not a one-size-fits-all approach.",
      "Adjustments, soft-tissue work, and decompression where appropriate.",
      "A home program so you stop re-injuring the same area.",
    ],
    helpsWith: [
      "Acute low back strain or 'I bent over wrong' pain",
      "Chronic low back pain that comes and goes",
      "Mid-back pain from desk work or repetitive lifting",
      "Postural pain that worsens through the day",
      "Pain associated with disc issues or sciatica",
    ],
    whoItsFor:
      "Anyone in {city} who is tired of chasing back pain with painkillers. Office workers, contractors, healthcare workers, parents, and retirees all benefit from getting an actual answer instead of another prescription.",
    expect: [
      "A clear explanation of what's actually causing your pain",
      "Most acute cases respond within 2–4 visits",
      "Chronic cases take longer but with measurable checkpoints",
      "A maintenance plan only if it's genuinely needed",
    ],
    faqs: [
      {
        q: "When should I see a chiropractor for back pain instead of toughing it out?",
        a: "If pain is interrupting sleep, lasting more than 3–5 days, or radiating into a leg, see a chiropractor. Catching it early in {city} makes the fix faster, cheaper, and far less likely to recur.",
      },
      {
        q: "Will an adjustment make my back pain worse?",
        a: "A correctly applied adjustment shouldn't increase pain. Some patients notice 24–48 hours of mild soreness as the body re-adapts, like the day after a good workout. We modify the approach for sensitive cases.",
      },
      {
        q: "What's the difference between back pain from a muscle vs. a disc?",
        a: "Muscle pain is usually local, dull, and worse with movement. Disc pain often radiates, can numb or tingle, and may be worse with sitting or sneezing. Our exam separates the two so the right tool gets used.",
      },
    ],
    related: ["spinal-decompression", "sciatica-relief", "herniated-disc-treatment"],
  },
  {
    slug: "neck-pain-relief",
    name: "Neck Pain Relief",
    short: "neck pain relief",
    category: "condition",
    titleTemplate:
      "Neck Pain Relief in {city}, NM | Synergy Spine and Nerve Center",
    descriptionTemplate:
      "Drug-free neck pain relief for {city}, NM. Tech neck, stiffness, and headaches resolved at the source. Call (505) 891-2280.",
    h1Template: "Neck Pain Relief in {city}, NM",
    whatItIs:
      "Most modern neck pain is mechanical, too many hours looking down at a phone, sleeping on the wrong pillow, or carrying old whiplash that never fully resolved. The neck is a small, busy stretch of spine carrying a lot of nerves to the head, jaw, and arms. When it's stuck, headaches, jaw tension, and arm tingling often come along for the ride.",
    howItWorks: [
      "A posture and motion exam to find the stuck or unstable segments.",
      "Specific cervical adjustments matched to your build and tolerance.",
      "Soft-tissue work for the muscles that are guarding the joints.",
      "Posture and ergonomic coaching for screen use, sleep, and driving.",
    ],
    helpsWith: [
      "Tech neck and forward-head posture",
      "Tension headaches from a tight upper neck",
      "Stiff neck on waking",
      "Pinched-nerve pain into the shoulder or arm",
      "Old whiplash that flares up",
    ],
    whoItsFor:
      "Anyone in {city} who works at a screen, drives a lot, sleeps poorly, or has a history of whiplash. Teens with phone posture and adults with desk-driven stiffness both benefit.",
    expect: [
      "A gentle approach, adjustments matched to your comfort level",
      "Most acute cases resolve in 4–6 visits",
      "A pillow and ergonomic recommendation customized to you",
      "A clear plan to keep the pain from coming back",
    ],
    faqs: [
      {
        q: "Is it safe to crack my own neck?",
        a: "It's almost never the segment that needs to move. Self-adjusting tends to free already-loose joints while the actually stuck ones get worse over time. A trained chiropractor finds the right segment and adjusts it specifically.",
      },
      {
        q: "Will a chiropractor fix my tension headaches?",
        a: "Often yes. The vast majority of tension headaches start from upper-neck joint and muscle tension. We measure neck range of motion at every re-exam so you can see the change.",
      },
      {
        q: "I have a herniated cervical disc, can you still help?",
        a: "Often yes, with care matched to imaging. Cervical decompression and gentle, low-force adjustments are usually a better first step than injections or surgery for the right candidate.",
      },
      {
        q: "How fast will my neck feel better?",
        a: "Most {city} patients feel a shift after 1–3 visits. Lasting change takes a full care plan plus home posture work; most cases resolve within 4–8 weeks.",
      },
    ],
    related: ["headache-migraine-relief", "auto-accident-chiropractor", "posture-correction"],
  },
  {
    slug: "headache-migraine-relief",
    name: "Headache & Migraine Relief",
    short: "headache and migraine care",
    category: "condition",
    titleTemplate:
      "Headache & Migraine Relief in {city}, NM | Synergy Spine and Nerve",
    descriptionTemplate:
      "Drug-free headache and migraine relief for {city}, NM. Find and fix the cervical and lifestyle drivers behind your headaches. (505) 891-2280.",
    h1Template: "Headache & Migraine Relief in {city}, NM",
    whatItIs:
      "Headaches are a symptom, never a diagnosis. The pain you feel above the eyes, behind the head, or wrapping the temples almost always traces back to upper-neck mechanics, hydration and food triggers, sleep posture, or hormonal cycles. Treat the driver, the headache fades.",
    howItWorks: [
      "We classify your headache pattern (cervicogenic, tension, migraine, cluster).",
      "A focused upper-cervical and TMJ exam to find joint and muscle drivers.",
      "Adjustments and soft-tissue work matched to the pattern.",
      "Trigger logging, food, sleep, screen time, so we can fix what's repeatable.",
    ],
    helpsWith: [
      "Daily tension headaches",
      "Cervicogenic headaches that start in the neck",
      "Migraines with aura, light, or sound sensitivity",
      "Cluster headaches",
      "Post-concussion headaches",
      "Hormonal-cycle headaches",
    ],
    whoItsFor:
      "Anyone in {city} taking over-the-counter pain relievers more than once a week, anyone whose headaches interrupt work or family time, and anyone whose neck mobility is clearly contributing.",
    expect: [
      "A clear classification of your headache type",
      "A 48 week care window for most cervicogenic and tension headaches",
      "Migraine response varies, we measure frequency and intensity",
      "Honest referral to neurology if the pattern warrants it",
    ],
    faqs: [
      {
        q: "Can a chiropractor really help migraines?",
        a: "For migraines with a cervical or postural driver, yes, published research supports chiropractic care for reducing migraine frequency and intensity. For purely vascular or hormonal migraines, our role is supportive alongside your primary care plan.",
      },
      {
        q: "How long until my headaches improve?",
        a: "Most cervicogenic and tension headache patients in {city} feel meaningful change within 2–4 weeks. Migraine patterns shift more slowly; we evaluate at week 8.",
      },
      {
        q: "Do I have to come forever?",
        a: "No. Once your headaches are under control we taper to maintenance, for most patients that's once a month or less.",
      },
      {
        q: "Are pediatric headaches treated differently?",
        a: "Yes. Kids with headaches are usually carrying screen-driven posture or sleep-driven jaw tension. We adjust gently and coach the parents on screen and sleep habits.",
      },
    ],
    related: ["neck-pain-relief", "posture-correction", "chiropractor"],
  },
  {
    slug: "auto-accident-chiropractor",
    name: "Auto Accident & Whiplash Chiropractor",
    short: "auto-accident and whiplash care",
    category: "service",
    titleTemplate:
      "Auto Accident Chiropractor {city}, NM | Whiplash Recovery, Synergy Spine",
    descriptionTemplate:
      "After a car accident in {city}, NM, fast chiropractic evaluation matters. Whiplash, neck pain, headaches, call Synergy Spine at (505) 891-2280.",
    h1Template: "Auto Accident & Whiplash Chiropractor in {city}, NM",
    whatItIs:
      "Whiplash is a soft-tissue and joint injury caused by a rapid back-and-forth motion of the head, most commonly in a rear-end collision. The classic mistake is to skip evaluation because 'nothing feels broken.' Whiplash symptoms often appear 24–72 hours later, and untreated whiplash is the single biggest predictor of chronic neck pain a decade later.",
    howItWorks: [
      "A prompt post-accident exam.",
      "Imaging when warranted (or referral if findings suggest it).",
      "Documentation that satisfies attorneys and insurers, we know the paperwork.",
      "A graded care plan from acute to recovery to function.",
    ],
    helpsWith: [
      "Whiplash neck pain and stiffness",
      "Post-accident headaches",
      "Mid-back and shoulder-blade pain",
      "Concussion-related dizziness and brain fog (co-managed)",
      "Low back pain from seat-belt or impact mechanics",
    ],
    whoItsFor:
      "Any {city}-area driver or passenger involved in a recent collision, even low-speed. Don't wait for symptoms to set in before getting documented.",
    expect: [
      "Documentation suitable for insurance or legal counsel",
      "Care coordinated with your attorney if you have one",
      "A clear timeline and goal, re-evaluated every 12 visits",
    ],
    faqs: [
      {
        q: "How soon after an accident in {city} should I see a chiropractor?",
        a: "Within 72 hours when possible. Soft-tissue inflammation peaks in the first three days, and the documentation window matters for both health outcomes and insurance.",
      },
      {
        q: "Will my auto insurance cover chiropractic after the accident?",
        a: "In most cases yes, New Mexico PIP and med-pay coverage typically pay for chiropractic post-collision. We verify benefits and bill correctly so you don't have to chase paperwork.",
      },
      {
        q: "I feel fine. Do I really need an exam?",
        a: "Yes. The most expensive whiplash cases ten years later are the ones who 'felt fine' at week one. A 30-minute baseline exam protects your future spine and your legal options.",
      },
      {
        q: "Do you work with personal-injury attorneys?",
        a: "We do. Bring your attorney's contact info, we coordinate documentation and don't make you the middleman.",
      },
    ],
    related: ["neck-pain-relief", "back-pain-relief", "headache-migraine-relief"],
  },
  {
    slug: "softwave-therapy",
    name: "Softwave Therapy",
    short: "softwave therapy",
    category: "service",
    titleTemplate:
      "Softwave Therapy in {city}, NM | Synergy Spine and Nerve Center",
    descriptionTemplate:
      "Softwave therapy for {city}, NM patients with chronic joint pain, plantar fasciitis, and tendon injuries. Call (505) 891-2280.",
    h1Template: "Softwave Therapy in {city}, NM",
    whatItIs:
      "Softwave is a focused acoustic-wave technology that triggers the body's own repair process. Unlike laser, ultrasound, or steroid injections, Softwave activates resident stem cells and restarts healing in tissues the body had given up on. It's non-invasive, drug-free, and supported by a growing body of clinical evidence.",
    howItWorks: [
      "We map the painful and reflexive zones, Softwave often treats areas that don't hurt locally but refer to the area that does.",
      "A 10–20 minute applicator session over the target tissue.",
      "Most plans run 4–8 sessions, twice a week, then taper.",
      "Combine with adjustments and soft-tissue work for the best result.",
    ],
    helpsWith: [
      "Chronic plantar fasciitis",
      "Tennis and golfer's elbow",
      "Rotator cuff and shoulder pain",
      "Knee and hip arthritis",
      "Achilles tendonitis",
      "Chronic low-back trigger zones",
    ],
    whoItsFor:
      "Adults in {city} with chronic tendon, joint, or fascia pain that hasn't resolved with rest, stretching, or anti-inflammatories. Softwave is for the patients who've been told to 'live with it' and aren't willing to.",
    expect: [
      "Sessions feel like a strong tapping, not painful",
      "First-visit candidacy screen, not everyone is a fit",
      "A typical course runs 4–8 weeks",
      "Pricing transparent up front, no contracts",
    ],
    faqs: [
      {
        q: "How is Softwave different from other acoustic-wave devices?",
        a: "Softwave uses a broader, lower-intensity wave that activates stem cells without the discomfort of older focused devices. It's the same underlying technology used in elite sports medicine and orthopedic practices.",
      },
      {
        q: "Will I need a series or just one session?",
        a: "Most chronic conditions need 4–8 sessions to produce a durable change. One session can shift acute pain but rarely solves chronic tissue dysfunction.",
      },
      {
        q: "Is Softwave covered by insurance in {city}?",
        a: "Most insurers don't cover Softwave yet, but our pricing is transparent and many patients prefer it to repeated injections or surgery.",
      },
      {
        q: "Can Softwave replace surgery?",
        a: "For some patients, yes, particularly partial-thickness rotator cuff tears and chronic plantar fasciitis. We're honest when surgery is the better path.",
      },
    ],
    related: ["chiropractor", "sports-injury-chiropractor", "spinal-decompression"],
  },
  {
    slug: "posture-correction",
    name: "Posture Correction",
    short: "posture correction",
    category: "service",
    titleTemplate:
      "Posture Correction in {city}, NM | Synergy Spine and Nerve Center",
    descriptionTemplate:
      "Measurable posture correction for {city}, NM. Reverse forward-head posture, rounded shoulders, and screen-driven postural strain. (505) 891-2280.",
    h1Template: "Posture Correction in {city}, NM",
    whatItIs:
      "Posture is the visible signature of the spine underneath. Forward-head posture, rounded shoulders, and a flattened low back aren't just cosmetic, they double the load on the spine, choke off lung capacity, and fatigue the nervous system. Posture correction is a measurable, structured process, not a 'sit up straight' lecture.",
    howItWorks: [
      "Postural photos and a digital posture score on day one.",
      "A combination of corrective adjustments, soft-tissue work, and rehab.",
      "Daily home posture drills (10 minutes, no equipment for most).",
      "Re-photos every 12 visits so progress is visible, not just felt.",
    ],
    helpsWith: [
      "Forward-head and tech-neck posture",
      "Rounded shoulders and upper-back kyphosis",
      "Anterior pelvic tilt and lower-cross posture",
      "Pediatric posture and screen-related issues",
      "Senior posture and balance work",
    ],
    whoItsFor:
      "Anyone in {city} who works at a screen, drives a long commute, has a child glued to a phone, or has noticed their head sitting further forward in photos year over year.",
    expect: [
      "A measurable posture score, not a vague impression",
      "A 12-week starter program with photo check-ins",
      "Home work that takes under 10 minutes a day",
      "Lasting change, posture is built, not lectured",
    ],
    faqs: [
      {
        q: "Can adult posture really change, or is it set?",
        a: "It can absolutely change at any age. Bone shape adapts slowly, but the muscular and joint patterns that create the visible posture are very trainable. We've documented measurable shifts in {city}-area patients in their 70s.",
      },
      {
        q: "How long until I see a posture change?",
        a: "Most patients see visible change in posture photos within 8–12 weeks of consistent care plus home work.",
      },
      {
        q: "Is posture correction the same as a posture brace?",
        a: "No. Posture braces remind your shoulders to pull back but don't change the underlying spine. We adjust the spine, train the muscles, and let posture re-organize itself, the change holds without a brace.",
      },
      {
        q: "Should I correct my child's posture or wait?",
        a: "Don't wait. Pediatric posture is one of the easiest things to correct, and the patterns set in adolescence usually carry into adulthood. Earlier is faster, easier, and cheaper.",
      },
    ],
    related: ["neck-pain-relief", "headache-migraine-relief", "chiropractor"],
  },
  {
    slug: "herniated-disc-treatment",
    name: "Herniated Disc Treatment",
    short: "herniated disc treatment",
    category: "condition",
    titleTemplate:
      "Herniated Disc Treatment in {city}, NM | Synergy Spine and Nerve",
    descriptionTemplate:
      "Non-surgical herniated disc treatment for {city}, NM. Decompression, adjustments, and rehab to avoid surgery when possible. (505) 891-2280.",
    h1Template: "Herniated Disc Treatment in {city}, NM",
    whatItIs:
      "A herniated disc happens when the outer wall of a spinal disc tears and the gel-like inside bulges out, often pressing on a nearby nerve. The good news: most herniated discs respond beautifully to a structured non-surgical protocol. Surgery is rarely the first answer, and it's almost never the only answer.",
    howItWorks: [
      "Imaging review to confirm the level and severity of the herniation.",
      "Spinal decompression to de-pressurize the disc.",
      "Specific adjustments above and below the herniation, never directly on it.",
      "Core stability and McKenzie-style rehab to prevent recurrence.",
    ],
    helpsWith: [
      "Lumbar disc herniation with sciatica",
      "Cervical disc herniation with arm pain",
      "Disc bulges that haven't yet ruptured",
      "Failed conservative care from another provider",
      "Recurrent disc problems after past surgery",
    ],
    whoItsFor:
      "Adults with imaging-confirmed disc herniation who want to avoid surgery and aren't satisfied with injection-only management. We screen carefully, we won't take cases that need surgical management.",
    expect: [
      "A 30-minute consult with imaging review",
      "An honest yes/no on candidacy",
      "A 6–10 week non-surgical protocol",
      "Coordination with your spine surgeon if needed",
    ],
    faqs: [
      {
        q: "Can a herniated disc heal without surgery?",
        a: "In the majority of cases, yes, particularly when caught in the first 6 months. The disc can re-absorb, the inflammation settles, and the nerve calms down. The prerequisite is a real protocol, not just rest and Advil.",
      },
      {
        q: "Is decompression safe with a herniated disc?",
        a: "When the case has been screened correctly, yes, decompression is one of the most evidence-supported non-surgical options for herniation. We screen out unstable injuries, fractures, and severe stenosis.",
      },
      {
        q: "When should I just get the surgery?",
        a: "When there's progressive neurologic loss (foot drop, bowel/bladder change, severe weakness), a fragment that won't reduce, or after a fair non-surgical trial that didn't work. We'll tell you straight.",
      },
      {
        q: "Will I be able to lift weights again?",
        a: "Almost always, with smart progression. We rehab the core and hips to protect the disc, and most {city} patients return to lifting within 12 weeks of completing care.",
      },
    ],
    related: ["spinal-decompression", "sciatica-relief", "back-pain-relief"],
  },
  {
    slug: "pediatric-chiropractor",
    name: "Pediatric Chiropractor",
    short: "pediatric and family chiropractic",
    category: "service",
    titleTemplate:
      "Pediatric Chiropractor in {city}, NM | Synergy Spine and Nerve Center",
    descriptionTemplate:
      "Gentle pediatric and family chiropractic care for {city}, NM. Posture, sports, and growth-stage care for kids of all ages. (505) 891-2280.",
    h1Template: "Pediatric Chiropractor in {city}, NM",
    whatItIs:
      "Kids' spines are growing through enormous physical change, falls, sports, and now hours of screen time every day. Pediatric chiropractic is gentle, low-force, and focused on the patterns that, if caught early, save kids from carrying postural and pain problems into adulthood.",
    howItWorks: [
      "An age-appropriate exam, we talk to the kid, not just the parent.",
      "Very low-force adjustments matched to a child's body and tolerance.",
      "Posture and screen-time coaching for the whole family.",
      "A short, simple home routine the child actually does.",
    ],
    helpsWith: [
      "Posture and tech-neck in school-age kids",
      "Sports injuries and recovery",
      "Headaches in school-age kids",
      "Sleep posture and pillow questions",
      "Growth-related musculoskeletal concerns",
    ],
    whoItsFor:
      "Families in {city} who want to start their kids on the same proactive spinal health they take in their teeth. We see kids from infancy through high school graduation.",
    expect: [
      "A child-friendly visit, short, calm, and not scary",
      "Adjustments scaled to a child's pressure tolerance",
      "Honest conversations about what kids need and what they don't",
      "Family pricing for siblings",
    ],
    faqs: [
      {
        q: "At what age can a child start chiropractic care?",
        a: "Children of any age can be evaluated and gently cared for. Our youngest patients are infants; the technique is matched to age and need.",
      },
      {
        q: "Is it safe to adjust a child?",
        a: "Yes, when performed by a chiropractor trained in pediatric care, with technique scaled to the child. The pressures we use on a 5-year-old are a fraction of what we'd use on an adult.",
      },
      {
        q: "Does pediatric chiropractic help with sports performance?",
        a: "Absolutely. Mobility, recovery, and injury resilience all improve when the spine is moving well. Many {city} youth athletes integrate chiropractic into their training year.",
      },
      {
        q: "Can you help with my child's posture?",
        a: "Yes, and we'll involve the whole household. Pediatric posture is shaped by the chairs, screens, and habits at home, so the parents become part of the plan.",
      },
    ],
    related: ["posture-correction", "sports-injury-chiropractor", "chiropractor"],
  },
  {
    slug: "sports-injury-chiropractor",
    name: "Sports Injury Chiropractor",
    short: "sports injury chiropractic",
    category: "service",
    titleTemplate:
      "Sports Injury Chiropractor in {city}, NM | Synergy Spine and Nerve",
    descriptionTemplate:
      "Sports chiropractic care for {city}, NM athletes. Injury recovery, performance, and prevention, drug-free. Call (505) 891-2280.",
    h1Template: "Sports Injury Chiropractor in {city}, NM",
    whatItIs:
      "Sports chiropractic is built around two goals: get you back to play faster after an injury, and reduce the chance you'll have the same injury twice. Adjustments, soft-tissue work, and Softwave for chronic tendon issues form the core of the toolkit.",
    howItWorks: [
      "A sport-specific exam, we test the movements your sport actually demands.",
      "A combined plan: adjustments, mobility work, soft-tissue, and Softwave when warranted.",
      "Return-to-play criteria so you don't return too soon.",
      "Maintenance during your in-season schedule.",
    ],
    helpsWith: [
      "Hamstring strains and tendon issues",
      "Ankle and knee instability",
      "Rotator cuff and shoulder pain",
      "Low-back issues from lifting and rotation sports",
      "Concussion-related neck and balance work (co-managed)",
    ],
    whoItsFor:
      "{city} athletes, youth, high school, collegiate, and weekend warriors, who want to extend their athletic life and reduce time on the bench.",
    expect: [
      "A sport-specific evaluation, not a generic exam",
      "An honest timeline back to play",
      "Coordination with your coach or trainer if you have one",
      "A maintenance schedule that respects your in-season",
    ],
    faqs: [
      {
        q: "How fast can I get back to my sport?",
        a: "It depends on the tissue and the sport. Most acute strains in {city} athletes return in 2–4 weeks; chronic tendinopathy responds in 4–8 weeks with the right protocol.",
      },
      {
        q: "Should I see a chiropractor or a physical therapist?",
        a: "Often both, and we collaborate. Chiropractic excels at restoring joint motion; PT excels at progressive loading. The smartest athletes use both.",
      },
      {
        q: "Do you treat youth athletes?",
        a: "Yes, we love working with growing athletes. Catching mechanical issues early can prevent the chronic injuries that derail college and adult athletic careers.",
      },
      {
        q: "Can chiropractic improve performance, not just fix injuries?",
        a: "Yes. Restoring full spinal motion improves rotation, recoil, and reaction time, measurable gains for golfers, runners, and rotation-sport athletes.",
      },
    ],
    related: ["softwave-therapy", "chiropractor", "back-pain-relief"],
  },
  {
    slug: "prenatal-chiropractor",
    name: "Prenatal Chiropractor",
    short: "prenatal and pregnancy chiropractic",
    category: "service",
    titleTemplate:
      "Prenatal Chiropractor in {city}, NM | Pregnancy Care, Synergy Spine",
    descriptionTemplate:
      "Gentle prenatal chiropractic for {city}, NM moms-to-be. Reduce back pain, sciatica, and pelvic discomfort throughout pregnancy. (505) 891-2280.",
    h1Template: "Prenatal Chiropractor in {city}, NM",
    whatItIs:
      "Pregnancy reshapes the spine and pelvis in a few short months, relaxin softens ligaments, the center of gravity shifts forward, and the low back, hips, and SI joints take on new load. Prenatal chiropractic is gentle, drug-free care designed around those changes.",
    howItWorks: [
      "Gentle adjustments using pregnancy-appropriate technique and pillow systems.",
      "Specific pelvic balancing to support optimal fetal positioning.",
      "Soft-tissue work for the round-ligament, low back, and hips.",
      "Postural and movement coaching for each trimester.",
    ],
    helpsWith: [
      "Low back and SI joint pain in pregnancy",
      "Sciatica during pregnancy",
      "Round-ligament pain",
      "Pelvic and pubic-symphysis discomfort",
      "Postural fatigue in late pregnancy",
    ],
    whoItsFor:
      "Pregnant patients in {city} at any trimester. We coordinate with your OB or midwife and work within whatever guidelines they've set.",
    expect: [
      "Pregnancy-appropriate technique throughout all trimesters",
      "Comfortable side-lying or pillow-supported positioning",
      "Coordination with your OB-GYN or midwife",
      "Postpartum care to help the body recover",
    ],
    faqs: [
      {
        q: "Is chiropractic safe during pregnancy?",
        a: "Yes, when performed by a chiropractor trained in pregnancy technique. Many OBs and midwives in the {city} area refer patients for pregnancy-related back and pelvic pain.",
      },
      {
        q: "When in pregnancy can I start care?",
        a: "Any trimester. The earlier we start, the more proactively we can manage the changes, but late-pregnancy care is also very common and very helpful.",
      },
      {
        q: "What is the Webster Technique?",
        a: "Webster is a specific, gentle pelvic adjustment used during pregnancy to restore pelvic balance. We use it as part of a broader prenatal protocol.",
      },
      {
        q: "Will you continue care postpartum?",
        a: "Yes, postpartum care is when many of the long-term back and pelvic-floor patterns are set. We follow patients through the first year of postpartum and beyond.",
      },
    ],
    related: ["chiropractor", "back-pain-relief", "pediatric-chiropractor"],
  },
];

export const SERVICE_BY_SLUG: Record<string, ServiceCopy> = SERVICES.reduce(
  (acc, s) => {
    acc[s.slug] = s;
    return acc;
  },
  {} as Record<string, ServiceCopy>
);
