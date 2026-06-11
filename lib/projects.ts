export type Project = {
  title: string;
  type: string;
  location: string;
  image: string;
  detail: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Residential Foundation Package",
    type: "Excavation & Concrete",
    location: "Greater Edmonton",
    image: "/images/unique/excavator-green-site.jpg",
    detail:
      "Basement excavation, footing preparation, foundation wall coordination, and backfill delivered as one connected workflow.",
  },
  {
    title: "Tight-Access Concrete Pour",
    type: "Concrete Pumping",
    location: "Edmonton Infill",
    image: "/images/unique/edmonton-crane-rooftop-2014.jpg",
    detail: "Coordinated concrete placement for tight urban access and staged pours.",
  },
  {
    title: "Commercial Footing Preparation",
    type: "Commercial Site Work",
    location: "Alberta",
    image: "/images/unique/paving-dump-truck.jpg",
    detail: "Footing preparation, aggregate delivery, and heavy equipment support.",
  },
  {
    title: "Foundation Waterproofing",
    type: "Drainage & Membrane",
    location: "Greater Edmonton",
    image: "/images/unique/rebar-sky.jpg",
    detail: "Foundation membrane, drainage rock, and weeping tile installation.",
  },
  {
    title: "Forming & Cribbing Setup",
    type: "Cribbing & Forming",
    location: "Residential Build",
    image: "/images/unique/workers-hardhats.jpg",
    detail: "Accurate forming and bracing for a compact residential build.",
  },
  {
    title: "Aggregate Delivery & Hauling",
    type: "Excavation & Trucking",
    location: "Active Job Site",
    image: "/images/services/aggregate-supply.jpg",
    detail: "Lot stripping, grading, hauling, and a clean handoff for foundation crews.",
  },
  {
    title: "Downtown Field Coordination",
    type: "Excavation & Site Access",
    location: "Downtown Edmonton",
    image: "/images/unique/edmonton-downtown-skyline-night.jpg",
    detail:
      "Urban staging for a high-density development with crane sequencing, grading checks, and clean handoff windows.",
  },
];
