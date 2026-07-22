export interface PricingMaterialTier {
  material: string;
  price: number;
}

export interface SeatPricingGroup {
  label: string;
  tiers: PricingMaterialTier[];
}

export interface PricingLineItem {
  label: string;
  price: number;
}

export const seatPricing: SeatPricingGroup[] = [
  {
    label: "5 Seater",
    tiers: [
      { material: "Grade 2 Leather", price: 30000 },
      { material: "PU Leather", price: 22000 },
      { material: "Synthetic Leather", price: 15000 },
    ],
  },
  {
    label: "7 Seater",
    tiers: [
      { material: "Grade 2 Leather", price: 40000 },
      { material: "PU Leather", price: 30000 },
      { material: "Synthetic Leather", price: 22000 },
    ],
  },
];

export const pricingLineItems: PricingLineItem[] = [
  { label: "Full door", price: 12000 },
  { label: "Middle part", price: 4000 },
  { label: "Dashboard restoration", price: 12000 },
  { label: "Roofliner (original)", price: 15000 },
  { label: "Roof liner (leather)", price: 10000 },
  { label: "Floor PVC", price: 10000 },
  { label: "Floor 3D", price: 15000 },
  { label: "Boot down part", price: 4000 },
  { label: "Steering restoration", price: 4000 },
  { label: "Star lights", price: 35000 },
  { label: "Ambient light", price: 15000 },
];

export function formatKsh(amount: number): string {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}
