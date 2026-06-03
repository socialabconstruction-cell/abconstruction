export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  bullets: string[];
  icon: "pump" | "foundation" | "forming" | "drop" | "truck" | "excavator";
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "concrete-pumping",
    title: "Concrete Pumping",
    shortTitle: "Concrete Pumping",
    tagline: "Reach every pour cleanly, quickly, and on schedule.",
    description:
      "Efficient and reliable concrete pumping services for residential and commercial projects.",
    longDescription:
      "Our modern line and boom pump fleet places concrete exactly where it needs to go: basements, slabs, columns, and hard-to-reach pours. Operators are certified, briefed on your site plan, and ready to deliver consistent flow with minimal mess. We coordinate with your supplier and crew so the pour stays on schedule from the first truck to the final washout.",
    bullets: [
      "Line and boom pump options for any site",
      "Residential basements, commercial slabs, and columns",
      "Certified, safety-first operators",
      "Tight scheduling around supplier delivery",
    ],
    icon: "pump",
    image: "/images/unique/concrete-foundation-pour.jpg",
  },
  {
    slug: "footings-foundation-walls",
    title: "Footings & Foundation Walls",
    shortTitle: "Footings & Foundations",
    tagline: "Professional forming and foundation systems built to last.",
    description:
      "Professional forming and foundation systems built for long-term durability.",
    longDescription:
      "From layout to stripping, AB Construction Group builds footings and foundation walls engineered to support whatever rises above them. We work to grade with precision, place rebar to specification, and form straight, square walls that meet Alberta's residential and commercial standards. Every pour is monitored for slump and finish so the next trade can build with confidence.",
    bullets: [
      "Residential & ICF-ready foundation walls",
      "Commercial footings built to engineered specifications",
      "Rebar placement and inspection coordination",
      "Form stripping, patching, and site cleanup included",
    ],
    icon: "foundation",
    image: "/images/unique/steel-framework.jpg",
  },
  {
    slug: "cribbing-forming",
    title: "Cribbing & Forming",
    shortTitle: "Cribbing & Forming",
    tagline: "Accurate forming and structural support for projects of every size.",
    description:
      "Accurate forming and structural support solutions for all project sizes.",
    longDescription:
      "Our cribbing crews handle walls, columns, grade beams, and step footings with the accuracy that pays off downstream. Tight tolerances, clean lines, and proper bracing help ensure framers, masons, and finishers are not left with avoidable problems.",
    bullets: [
      "Wood and aluminum forming systems",
      "Step footings, grade beams, and pilasters",
      "Stripping, oiling, and form maintenance",
      "Coordination with engineers and inspectors",
    ],
    icon: "forming",
    image: "/images/unique/foundation-workers.jpg",
  },
  {
    slug: "waterproofing-weeping-tile",
    title: "Waterproofing & Weeping Tile",
    shortTitle: "Waterproofing & Weeping Tile",
    tagline: "Keep moisture out for the life of the building.",
    description:
      "Protect your property with expert drainage and waterproofing systems.",
    longDescription:
      "Foundations only last when water has somewhere else to go. We install peel-and-stick membranes, dimple board, and weeping tile systems that direct groundwater away from the building and into the sump or daylight outflow. Proper detailing at corners, penetrations, and tie-ins helps prevent future callbacks.",
    bullets: [
      "Membrane, damp-proofing, and spray systems",
      "Weeping tile installation with gravel and filter sock",
      "Sump pit and outflow coordination",
      "Retrofit waterproofing on existing foundations",
    ],
    icon: "drop",
    image: "/images/unique/rocks-gravel.jpg",
  },
  {
    slug: "aggregate-material-supply",
    title: "Aggregate & Material Supply",
    shortTitle: "Aggregate & Materials",
    tagline: "Gravel, washed rock, sand, and road crush delivered when you need them.",
    description:
      "Delivery of gravel, washed rock, sand, and road crush using quad trucks and dump trucks.",
    longDescription:
      "Our quad and dump truck fleet keeps your site stocked without the wait. We supply pit-run, road crush, drain rock, washed rock, and bedding sand, and we can spread or pile materials to specification on arrival. Volume pricing is available for commercial sites and ongoing residential developments.",
    bullets: [
      "Quad and dump truck delivery across Alberta",
      "Pit-run, road crush, drain rock, and sand",
      "Spread and grade on delivery available",
      "Volume pricing for repeat projects",
    ],
    icon: "truck",
    image: "/images/unique/two-dump-trucks.jpg",
  },
  {
    slug: "excavation-truck-services",
    title: "Excavation & Truck Services",
    shortTitle: "Excavation & Trucking",
    tagline: "Site preparation, excavation, and hauling done right the first time.",
    description:
      "Complete excavation, hauling, and site preparation services.",
    longDescription:
      "From rough grading and trenching to full basement excavations and lot cleanup, our equipment and operators handle the heavy work safely and efficiently. We locate, dig, haul away spoils, and leave the site ready for footings.",
    bullets: [
      "Basement and footing excavations",
      "Lot stripping, grading, and backfill",
      "Trenching for services and weeping tile",
      "Material hauling and disposal",
    ],
    icon: "excavator",
    image: "/images/unique/excavator-debris.jpg",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
