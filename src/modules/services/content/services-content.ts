export interface ServiceOption {
  title: string;
  description: string;
  icon: "diamond" | "scissors" | "star";
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceIncluded {
  title: string;
  icon: "check" | "diamond" | "star" | "clock";
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  heroImage: string;
  cardImage: string;
  overviewImages: { main: string; secondary: string; tertiary: string };
  overviewHeading: string;
  overviewParagraphs: string[];
  options?: ServiceOption[];
  process: ServiceProcessStep[];
  gallery: string[];
  included: ServiceIncluded[];
}

const IMG = {
  seatDiamond: "https://images.unsplash.com/photo-1760688965950-e8dcca426544?q=80&fm=webp&fit=crop&w=1600",
  seatWood: "https://images.unsplash.com/photo-1779496893953-e5c16a5df802?q=80&fm=webp&fit=crop&w=1600",
  seatVintageRed: "https://images.unsplash.com/photo-1633586020715-0b462f444ed3?q=80&fm=webp&fit=crop&w=1600",
  interior2: "/images/interior2.jpg",
  interior3: "/images/interior3.jpg",
  seatQuilted: "https://images.unsplash.com/photo-1760161339261-56487b766a17?q=80&fm=webp&fit=crop&w=1600",
  headliner: "https://images.unsplash.com/photo-1687634366063-fafb136751b8?q=80&fm=webp&fit=crop&w=1600",
  rooflining2: "/images/rooflining2.jpg",
  rooflining3: "/images/rooflining3.jpg",
  doorPanel: "https://images.unsplash.com/photo-1652860316601-79be565197d8?q=80&fm=webp&fit=crop&w=1600",
  doorpanel2: "/images/doorpanel2.jpg",
  doorpanel3: "/images/doorpanel2.jpg",
  steeringWheel: "https://images.unsplash.com/photo-1661336878257-1c51b5af959a?q=80&fm=webp&fit=crop&w=1600",
  steering2: "/images/steering2.jpg",
  workshop: "https://images.unsplash.com/photo-1650535517973-1139e7feb023?q=80&fm=webp&fit=crop&w=1600",
  customOrange: "https://images.unsplash.com/photo-1689310872349-1eb7597bc666?q=80&fm=webp&fit=crop&w=1600",
  redStitchInterior: "https://images.unsplash.com/photo-1680102143987-c62b572f6276?q=80&fm=webp&fit=crop&w=1600",
  seatUpholstery: "/images/car-seat1.jpg",
};

export const services: Service[] = [
  {
    slug: "car-seat-upholstery",
    title: "Car seat upholstery",
    shortDescription: "Fabric, leather and custom designs, fitted with precision.",
    metaDescription:
      "Professional car seat upholstery in Nairobi — fabric, leather and fully custom designs, hand-cut and stitched for a factory-grade fit.",
    heroImage: IMG.seatDiamond,
    cardImage: IMG.seatDiamond,
    overviewImages: { main: IMG.seatDiamond, secondary: IMG.seatWood, tertiary: IMG.seatUpholstery },
    overviewHeading: "Precision, built into every seam",
    overviewParagraphs: [
      "Whether your seats need a simple refresh or a complete rebuild, we work with you to choose the right material, pattern and finish for your car and your budget. Every job starts with a look at the existing foam and frame, so the new upholstery fits and wears the way factory seating should.",
      "We handle everything from single seat repairs to full-cabin re-upholstery, matching original factory patterns or building something entirely your own.",
    ],
    options: [
      {
        title: "Fabric",
        description:
          "Durable, breathable cloth options in a range of weaves and colors — a practical, budget-friendly upgrade from worn factory seating.",
        icon: "diamond",
      },
      {
        title: "Leather",
        description:
          "Genuine and premium synthetic leather, hand-cut and stitched for a factory-grade finish that ages well and cleans easily.",
        icon: "scissors",
      },
      {
        title: "Custom designs",
        description:
          "Contrast stitching, embossed logos, two-tone panels or diamond quilting — built around exactly what you have in mind.",
        icon: "star",
      },
    ],
    process: [
      {
        title: "Consultation",
        description: "We assess your seats and talk through material, color and stitching options.",
      },
      {
        title: "Material selection",
        description: "Choose fabric, leather or a custom combination, with samples on hand.",
      },
      {
        title: "Cutting & stitching",
        description: "Panels are hand-cut to your seat's exact pattern and precision-stitched.",
      },
      {
        title: "Fitting & quality check",
        description: "Seats are refitted, tensioned and inspected before your car leaves the shop.",
      },
    ],
    gallery: [IMG.seatDiamond, IMG.seatWood, IMG.seatVintageRed, IMG.seatQuilted],
    included: [
      { title: "Precision stitching", icon: "check" },
      { title: "Premium materials", icon: "diamond" },
      { title: "Perfect fit guarantee", icon: "star" },
      { title: "Fast turnaround", icon: "clock" },
    ],
  },
  {
    slug: "roof-lining-repairs",
    title: "Roof lining repairs",
    shortDescription: "Sagging, replacements and full restoration.",
    metaDescription:
      "Roof lining and headliner repair in Nairobi — fix sagging fabric, full replacements and restoration to like-new condition.",
    heroImage: IMG.headliner,
    cardImage: IMG.headliner,
    overviewImages: { main: IMG.headliner, secondary: IMG.rooflining2, tertiary: IMG.rooflining3 },
    overviewHeading: "No more sagging fabric overhead",
    overviewParagraphs: [
      "A sagging headliner is one of the most common interior issues — and one of the most noticeable. We remove the old lining completely, clean the backing board, and fit new material properly glued and tensioned so it stays put.",
      "Whether it's a small sag around the sunroof or the whole ceiling needs replacing, we match the original texture and color as closely as possible.",
    ],
    process: [
      { title: "Inspection", description: "We check the backing board and fabric to see what can be saved." },
      { title: "Removal", description: "The headliner panel is carefully removed without damaging trim or wiring." },
      { title: "Re-lining", description: "New fabric is cut, glued and fitted under proper tension." },
      { title: "Reinstallation", description: "The panel goes back in, with grab handles and trim refitted cleanly." },
    ],
    gallery: [IMG.headliner, IMG.workshop, IMG.seatWood, IMG.doorPanel],
    included: [
      { title: "Sag-free finish", icon: "check" },
      { title: "Matched texture", icon: "diamond" },
      { title: "No trim damage", icon: "star" },
      { title: "Same-day service", icon: "clock" },
    ],
  },
  {
    slug: "door-panel-upholstery",
    title: "Door panel upholstery",
    shortDescription: "Durable finishing with a perfect factory fit.",
    metaDescription:
      "Car door panel upholstery and re-trimming in Nairobi — durable finishing that keeps the factory fit and function.",
    heroImage: IMG.doorPanel,
    cardImage: IMG.doorPanel,
    overviewImages: { main: IMG.doorPanel, secondary: IMG.doorpanel2, tertiary: IMG.doorpanel2 },
    overviewHeading: "Panels that still fit like factory",
    overviewParagraphs: [
      "Door panels take a lot of daily wear — armrests, pull handles and pockets all get used constantly. We re-trim worn or torn panels in matching or upgraded material, keeping every clip and fitting in exactly the right place.",
      "We also handle speaker cutouts, courtesy lighting and switch panels, so nothing gets compromised in the process.",
    ],
    process: [
      {
        title: "Panel removal",
        description: "Doors are opened up carefully, with all clips and connectors kept safe.",
      },
      { title: "Pattern matching", description: "We map the original panel to cut new material precisely." },
      {
        title: "Trimming & stitching",
        description: "Panels are re-covered and stitched to match the rest of the cabin.",
      },
      {
        title: "Refitting",
        description: "Everything is reassembled and function-tested — switches, handles, speakers.",
      },
    ],
    gallery: [IMG.doorPanel, IMG.workshop, IMG.seatDiamond, IMG.headliner],
    included: [
      { title: "Factory-fit clips", icon: "check" },
      { title: "Matched materials", icon: "diamond" },
      { title: "Function tested", icon: "star" },
      { title: "Fast turnaround", icon: "clock" },
    ],
  },
  {
    slug: "steering-wheel-wrapping",
    title: "Steering wheel wrapping",
    shortDescription: "Leather wraps with custom stitching detail.",
    metaDescription:
      "Steering wheel leather wrapping in Nairobi — custom stitching, perforated leather and grip upgrades.",
    heroImage: IMG.steeringWheel,
    cardImage: IMG.steeringWheel,
    overviewImages: { main: IMG.steeringWheel, secondary: IMG.steering2, tertiary: IMG.steering2 },
    overviewHeading: "A wheel that feels as good as it looks",
    overviewParagraphs: [
      "Your steering wheel is the part of the car you touch most. We re-wrap worn, cracked or slippery wheels in fresh leather, hand-stitched panel by panel for a grip that feels genuinely factory — or better.",
      "Contrast stitching, perforated leather for grip, and thumb-rest detailing are all options if you want something more custom.",
    ],
    process: [
      { title: "Wheel assessment", description: "We check the core condition and take exact wrap measurements." },
      { title: "Material choice", description: "Pick your leather grade, color and stitching style." },
      { title: "Hand stitching", description: "The wrap is cut and hand-stitched directly onto the wheel." },
      { title: "Finish & trim", description: "Excess is trimmed and the wheel is cleaned for a factory-fresh look." },
    ],
    gallery: [IMG.steeringWheel, IMG.seatDiamond, IMG.workshop, IMG.customOrange],
    included: [
      { title: "Hand-stitched wrap", icon: "check" },
      { title: "Premium leather", icon: "diamond" },
      { title: "Better grip", icon: "star" },
      { title: "Quick service", icon: "clock" },
    ],
  },
  {
    slug: "interior-restoration",
    title: "Interior restoration",
    shortDescription: "Bring back that new-car look, inside and out.",
    metaDescription:
      "Full car interior restoration in Nairobi — seats, panels, headliner and trim brought back to like-new condition.",
    heroImage: IMG.workshop,
    cardImage: IMG.workshop,
    overviewImages: { main: IMG.interior3, secondary: IMG.interior2, tertiary: IMG.interior3 },
    overviewHeading: "A full-cabin rebuild, done right",
    overviewParagraphs: [
      "When more than one thing needs attention — worn seats, a tired headliner, faded panels — a full interior restoration brings the whole cabin back together with a consistent finish and material story.",
      "We plan the whole job upfront so materials, colors and stitching match across every surface, not just whatever's most worn.",
    ],
    process: [
      { title: "Full assessment", description: "We walk through the whole cabin and scope out every surface." },
      { title: "Material plan", description: "One consistent material and color plan across the whole interior." },
      { title: "Stage-by-stage work", description: "Seats, panels, headliner and trim are restored in sequence." },
      {
        title: "Final detail",
        description: "The finished cabin is cleaned and inspected as a whole, not piece by piece.",
      },
    ],
    gallery: [IMG.workshop, IMG.seatVintageRed, IMG.doorPanel, IMG.headliner],
    included: [
      { title: "Consistent finish", icon: "check" },
      { title: "Whole-cabin plan", icon: "diamond" },
      { title: "Factory-grade result", icon: "star" },
      { title: "Clear timeline", icon: "clock" },
    ],
  },
  {
    slug: "custom-interior-upgrades",
    title: "Custom interior upgrades",
    shortDescription: "Make it unique. Make it you.",
    metaDescription:
      "Custom car interior upgrades in Nairobi — contrast stitching, two-tone panels and bespoke design work.",
    heroImage: IMG.customOrange,
    cardImage: IMG.customOrange,
    overviewImages: { main: IMG.customOrange, secondary: IMG.seatQuilted, tertiary: IMG.seatQuilted },
    overviewHeading: "Built around exactly what you want",
    overviewParagraphs: [
      "Sometimes the goal isn't repair — it's making the interior genuinely yours. Contrast stitching, two-tone leather, embroidered logos, diamond quilting — we build the design with you before a single cut is made.",
      "This is the service for anyone who wants their car's interior to stand out, not just hold up.",
    ],
    process: [
      { title: "Design conversation", description: "We talk through colors, patterns and details you're picturing." },
      { title: "Mockup & samples", description: "Material and stitch samples are laid out before we commit." },
      { title: "Custom build", description: "Panels are cut and stitched to the agreed design." },
      { title: "Reveal & walkthrough", description: "We go through the finished interior with you before handover." },
    ],
    gallery: [IMG.customOrange, IMG.seatQuilted, IMG.redStitchInterior, IMG.steeringWheel],
    included: [
      { title: "Bespoke design", icon: "check" },
      { title: "Premium materials", icon: "diamond" },
      { title: "One-of-a-kind result", icon: "star" },
      { title: "Guided process", icon: "clock" },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceOptions = services.map((s) => ({ value: s.title, slug: s.slug }));
