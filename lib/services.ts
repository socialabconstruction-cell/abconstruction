export type ServiceHighlight = {
  title: string;
  body: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Short label shown above the page title (eyebrow). */
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  /** Secondary paragraph used on the detail page overview. */
  detailParagraph: string;
  bullets: string[];
  /** Three value props rendered as a feature row on the detail page. */
  highlights: ServiceHighlight[];
  /** Service-specific questions for the detail page. */
  faqs: ServiceFAQ[];
  /** Supporting imagery (existing assets) for the detail page gallery. */
  gallery: { src: string; alt: string }[];
  icon: "pump" | "foundation" | "forming" | "drop" | "truck" | "excavator";
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "concrete-pumping",
    title: "Concrete Pumping",
    shortTitle: "Concrete Pumping",
    category: "Concrete Services",
    tagline: "Reach every pour cleanly, quickly, and on schedule.",
    description:
      "Efficient and reliable concrete pumping services for residential and commercial projects.",
    longDescription:
      "Our modern boom pump fleet places concrete exactly where it needs to go: basements, slabs, columns, and hard-to-reach pours. Operators are certified, briefed on your site plan, and ready to deliver consistent flow with minimal mess. We coordinate with your supplier and crew so the pour stays on schedule from the first truck to the final washout.",
    detailParagraph:
      "Pumping is where a pour either runs smoothly or turns into a long, messy day. We plan the setup around your access, line the equipment up before trucks arrive, and keep flow steady so finishers can stay ahead of the concrete instead of chasing it.",
    bullets: [
      "Boom pumps for reach, height, and hard-to-access pours",
      "Residential basements, commercial slabs, and columns",
      "Certified, safety-first operators",
      "Tight scheduling around supplier delivery",
    ],
    highlights: [
      {
        title: "Reach that clears the site",
        body: "Boom pumps give us the height and reach to place concrete over obstacles and into hard-to-access pours — set up around your site before the day starts.",
      },
      {
        title: "Steady, clean flow",
        body: "Consistent placement that keeps your finishing crew ahead of the concrete, with minimal spill and easy washout.",
      },
      {
        title: "Scheduled around supply",
        body: "We sync with your ready-mix supplier so trucks, pump, and crew all hit the site in the right order.",
      },
    ],
    faqs: [
      {
        question: "What kind of concrete pumps do you run?",
        answer:
          "We run boom pumps, which give us the reach and height to place concrete over obstacles and into slabs, columns, basements, and elevated work. We match the right setup and reach to your site once we know the pour and access.",
      },
      {
        question: "Can you coordinate with my concrete supplier?",
        answer:
          "We schedule directly around your ready-mix delivery so the pump is set up and primed before the first truck arrives, keeping the pour continuous.",
      },
      {
        question: "What kind of access do you need?",
        answer:
          "Boom pumps need stable setup space and overhead clearance for the boom to swing. Send photos or drawings and we will confirm the best setup and reach for your pour.",
      },
    ],
    gallery: [
      { src: "/images/unique/concrete-foundation-pour.jpg", alt: "Concrete being placed into a foundation pour" },
      { src: "/images/fleet/boom-pump-front.jpg", alt: "AB Construction Group boom pump truck ready for a concrete pour" },
      { src: "/images/unique/rebar-sky.jpg", alt: "Rebar prepared for a concrete pour against the sky" },
    ],
    icon: "pump",
    image: "/images/fleet/boom-pump-side.jpg",
  },
  {
    slug: "footings-foundation-walls",
    title: "Footings & Foundation Walls",
    shortTitle: "Footings & Foundations",
    category: "Foundations",
    tagline: "Professional forming and foundation systems built to last.",
    description:
      "Professional forming and foundation systems built for long-term durability.",
    longDescription:
      "From layout to stripping, AB Construction Group builds footings and foundation walls engineered to support whatever rises above them. We work to grade with precision, place rebar to specification, and form straight, square walls that meet Alberta's residential and commercial standards. Every pour is monitored for slump and finish so the next trade can build with confidence.",
    detailParagraph:
      "A foundation sets the tone for the entire build. We treat layout, grade, and rebar placement as the parts that matter most, because straight, square, properly poured walls are what let the next trades work without surprises.",
    bullets: [
      "Residential & ICF-ready foundation walls",
      "Commercial footings built to engineered specifications",
      "Rebar placement and inspection coordination",
      "Form stripping, patching, and site cleanup included",
    ],
    highlights: [
      {
        title: "Built to grade and spec",
        body: "Precise layout, accurate elevations, and rebar placed to the engineer's drawings — verified before the pour.",
      },
      {
        title: "Straight, square walls",
        body: "Properly braced forms give clean, plumb walls so framers, masons, and finishers aren't fixing problems later.",
      },
      {
        title: "Inspection-ready",
        body: "We coordinate timing with inspectors and engineers so approvals don't stall your schedule.",
      },
    ],
    faqs: [
      {
        question: "Do you handle both residential and commercial foundations?",
        answer:
          "Yes. We pour everything from custom-home basements and infill footings to commercial footings and grade beams built to engineered specifications.",
      },
      {
        question: "Are your walls ICF-ready?",
        answer:
          "We can form and pour conventional foundation walls and prepare for ICF systems depending on the project. Tell us your wall assembly and we will scope it accordingly.",
      },
      {
        question: "Do you coordinate rebar inspections?",
        answer:
          "We place rebar to specification and schedule the pour around your inspection and engineering sign-offs so nothing gets covered before it's approved.",
      },
    ],
    gallery: [
      { src: "/images/services/foundations.jpg", alt: "Foundation wall forms prepared on site" },
      { src: "/images/unique/steel-framework.jpg", alt: "Steel framework rising above a foundation" },
      { src: "/images/unique/concrete-foundation-pour.jpg", alt: "Concrete poured into foundation forms" },
    ],
    icon: "foundation",
    image: "/images/unique/steel-framework.jpg",
  },
  {
    slug: "cribbing-forming",
    title: "Cribbing & Forming",
    shortTitle: "Cribbing & Forming",
    category: "Forming",
    tagline: "Accurate forming and structural support for projects of every size.",
    description:
      "Accurate forming and structural support solutions for all project sizes.",
    longDescription:
      "Our cribbing crews handle walls, columns, grade beams, and step footings with the accuracy that pays off downstream. Tight tolerances, clean lines, and proper bracing help ensure framers, masons, and finishers are not left with avoidable problems.",
    detailParagraph:
      "Forming is precision work that hides inside everything that comes after it. Tight tolerances and proper bracing now mean fewer callbacks, cleaner finishes, and trades that can build on top of our work without rework.",
    bullets: [
      "Wood and aluminum forming systems",
      "Step footings, grade beams, and pilasters",
      "Stripping, oiling, and form maintenance",
      "Coordination with engineers and inspectors",
    ],
    highlights: [
      {
        title: "Tight tolerances",
        body: "Walls, columns, and grade beams formed to the line so downstream trades inherit a clean, accurate base.",
      },
      {
        title: "Wood and aluminum systems",
        body: "We choose the forming system that fits the geometry, finish, and schedule of each pour.",
      },
      {
        title: "Properly braced",
        body: "Solid bracing and alignment keep forms true under load, protecting both the pour and the crew.",
      },
    ],
    faqs: [
      {
        question: "What kinds of forming do you do?",
        answer:
          "Foundation walls, columns, pilasters, grade beams, and step footings using wood and aluminum systems sized to the work.",
      },
      {
        question: "Do you strip and clean up the forms?",
        answer:
          "Yes. Stripping, oiling, patching, and form maintenance are part of the job, and we leave the site ready for the next trade.",
      },
      {
        question: "Can you work to engineered drawings?",
        answer:
          "We form to your structural drawings and coordinate with engineers and inspectors so the assembly is approved before concrete goes in.",
      },
    ],
    gallery: [
      { src: "/images/services/cribbing-forming.jpg", alt: "Cribbing and forming prepared for a concrete pour" },
      { src: "/images/unique/foundation-workers.jpg", alt: "Crew working on foundation forms" },
      { src: "/images/unique/workers-hardhats.jpg", alt: "Construction workers coordinating forming work" },
    ],
    icon: "forming",
    image: "/images/unique/foundation-workers.jpg",
  },
  {
    slug: "waterproofing-weeping-tile",
    title: "Waterproofing & Weeping Tile",
    shortTitle: "Waterproofing & Weeping Tile",
    category: "Drainage & Waterproofing",
    tagline: "Keep moisture out for the life of the building.",
    description:
      "Protect your property with expert drainage and waterproofing systems.",
    longDescription:
      "Foundations only last when water has somewhere else to go. We install peel-and-stick membranes, dimple board, and weeping tile systems that direct groundwater away from the building and into the sump or daylight outflow. Proper detailing at corners, penetrations, and tie-ins helps prevent future callbacks.",
    detailParagraph:
      "Water is the slow, expensive enemy of any foundation. We give it a clear path away from the building — membrane on the wall, weeping tile at the footing, and clean detailing at every corner and penetration so moisture never gets the chance to sit.",
    bullets: [
      "Membrane, damp-proofing, and spray systems",
      "Weeping tile installation with gravel and filter sock",
      "Sump pit and outflow coordination",
      "Retrofit waterproofing on existing foundations",
    ],
    highlights: [
      {
        title: "Complete moisture barrier",
        body: "Peel-and-stick membrane, dimple board, and damp-proofing detailed properly at corners and penetrations.",
      },
      {
        title: "Drainage that works",
        body: "Weeping tile with gravel and filter sock carries groundwater to the sump or daylight outflow, away from the wall.",
      },
      {
        title: "New builds and retrofits",
        body: "We waterproof fresh foundations and dig down to fix drainage problems on existing buildings.",
      },
    ],
    faqs: [
      {
        question: "Can you waterproof an existing foundation?",
        answer:
          "Yes. We excavate around the existing wall, repair and re-waterproof it, and install or replace weeping tile to fix chronic moisture and seepage issues.",
      },
      {
        question: "What waterproofing systems do you use?",
        answer:
          "Depending on the project we use peel-and-stick membranes, dimple board, and spray-applied damp-proofing, with detailing at all tie-ins and penetrations.",
      },
      {
        question: "Do you coordinate the sump and outflow?",
        answer:
          "We tie the weeping tile into a sump pit or daylight outflow so groundwater is carried away from the foundation rather than pooling against it.",
      },
    ],
    gallery: [
      { src: "/images/services/waterproofing.jpg", alt: "Waterproofing membrane applied to a foundation wall" },
      { src: "/images/unique/rocks-gravel.jpg", alt: "Drainage rock prepared for a weeping tile system" },
      { src: "/images/unique/gravel-debris.jpg", alt: "Excavator placing drainage gravel on site" },
    ],
    icon: "drop",
    image: "/images/unique/rocks-gravel.jpg",
  },
  {
    slug: "aggregate-material-supply",
    title: "Aggregate & Material Supply",
    shortTitle: "Aggregate & Materials",
    category: "Materials & Supply",
    tagline: "Gravel, washed rock, sand, and road crush delivered when you need them.",
    description:
      "Delivery of gravel, washed rock, sand, and road crush using quad trucks and dump trucks.",
    longDescription:
      "Our quad and dump truck fleet keeps your site stocked without the wait. We supply pit-run, road crush, drain rock, washed rock, and bedding sand, and we can spread or pile materials to specification on arrival. Volume pricing is available for commercial sites and ongoing residential developments.",
    detailParagraph:
      "A site that runs out of material loses a day. Our quad and dump trucks keep the right aggregate arriving on time, placed where your crew needs it, so groundwork and foundation work never stall waiting on a load.",
    bullets: [
      "Quad and dump truck delivery across Alberta",
      "Pit-run, road crush, drain rock, and sand",
      "Spread and grade on delivery available",
      "Volume pricing for repeat projects",
    ],
    highlights: [
      {
        title: "Full material range",
        body: "Pit-run, road crush, drain rock, washed rock, and bedding sand for groundwork, drainage, and backfill.",
      },
      {
        title: "Fleet that shows up",
        body: "Quad and dump trucks scheduled to your site so material is on hand before your crew needs it.",
      },
      {
        title: "Placed, not just dumped",
        body: "We can spread, pile, or grade material on delivery to spec, saving your crew the rehandling.",
      },
    ],
    faqs: [
      {
        question: "What materials can you supply?",
        answer:
          "Pit-run, road crush, drain rock, washed rock, and bedding sand, along with related aggregate for groundwork, drainage, and backfill.",
      },
      {
        question: "Do you deliver outside Edmonton?",
        answer:
          "Our quad and dump trucks deliver across Greater Edmonton and Alberta depending on volume and schedule. Tell us the location and we will confirm.",
      },
      {
        question: "Is there pricing for repeat or volume orders?",
        answer:
          "Yes. We offer volume pricing for commercial sites and ongoing residential developments that need regular material supply.",
      },
    ],
    gallery: [
      { src: "/images/services/aggregate-supply.jpg", alt: "Aggregate material loaded for delivery" },
      { src: "/images/unique/two-dump-trucks.jpg", alt: "Two dump trucks ready for material delivery" },
      { src: "/images/unique/rocks-gravel.jpg", alt: "Washed rock and gravel stockpile" },
    ],
    icon: "truck",
    image: "/images/fleet/slinger-truck.jpg",
  },
  {
    slug: "excavation-truck-services",
    title: "Excavation & Truck Services",
    shortTitle: "Excavation & Trucking",
    category: "Excavation & Trucking",
    tagline: "Site preparation, excavation, and hauling done right the first time.",
    description: "Complete excavation, hauling, and site preparation services.",
    longDescription:
      "From rough grading and trenching to full basement excavations and lot cleanup, our equipment and operators handle the heavy work safely and efficiently. We locate, dig, haul away spoils, and leave the site ready for footings.",
    detailParagraph:
      "Everything starts with the dig. We strip, grade, trench, and excavate to the right depths and lines, then haul the spoils away so the site is clean, accurate, and ready for footings the day your foundation crew arrives.",
    bullets: [
      "Basement and footing excavations",
      "Lot stripping, grading, and backfill",
      "Trenching for services and weeping tile",
      "Material hauling and disposal",
    ],
    highlights: [
      {
        title: "Dug to the line",
        body: "Basement and footing excavations cut to the right depth and grade so foundation work starts clean.",
      },
      {
        title: "Trenching and services",
        body: "Trenches for utilities, services, and weeping tile dug accurately and backfilled when the work is done.",
      },
      {
        title: "Haul and dispose",
        body: "Spoils, debris, and excess material loaded and hauled off so the site stays clear and workable.",
      },
    ],
    faqs: [
      {
        question: "Do you handle full basement excavations?",
        answer:
          "Yes. We dig basements and footings to the required depth and grade, then leave the site clean and ready for foundation crews.",
      },
      {
        question: "Can you haul away the spoils?",
        answer:
          "We load and haul excavated material, debris, and excess soil for disposal so your site stays clear throughout the work.",
      },
      {
        question: "Do you do grading and backfill too?",
        answer:
          "Lot stripping, rough grading, trenching, and backfill are all part of our site-preparation work, coordinated around the rest of the build.",
      },
    ],
    gallery: [
      { src: "/images/services/excavation.jpg", alt: "Excavator preparing a building site" },
      { src: "/images/unique/excavator-debris.jpg", alt: "Excavator clearing debris on a job site" },
      { src: "/images/unique/excavator-green-site.jpg", alt: "Excavator working a prepared green site" },
    ],
    icon: "excavator",
    image: "/images/unique/excavator-debris.jpg",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
