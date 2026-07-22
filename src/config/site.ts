import { clientConfig } from "./client";

interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  logoText: string;
  ogImage: string;
  logo: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  contact: {
    phone: { label: string; link: string };
    email: { label: string; link: string };
    whatsapp: { label: string; number: string; link: string };
  };
  address: {
    line: string;
    city: string;
    country: string;
    full: string;
    mapLabel: string;
    geo?: { lat: number; lng: number };
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  hours: { day: string; time: string }[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  nav: { label: string; href: string }[];
  developerLink: string;
}

export const siteConfig: SiteConfig = {
  name: "Moro Automotive",
  shortName: "Moro",
  tagline: "Where quality meets comfort.",
  description:
    "We deliver quality workmanship, durable materials, and affordable prices to make your car look and feel brand new. Car seat upholstery, roof lining, door panels, steering wheel wrapping, interior restoration and custom upgrades.",
  siteUrl: clientConfig.app.siteUrl,
  logoText: "M",
  ogImage: "/images/logo-image.jpg",
  logo: {
    src: "/images/logo-image.jpg", // put your actual logo file in /public/images
    width: 60,
    height: 60,
    alt: "Moro Automotive logo",
  },
  contact: {
    phone: {
      label: "+254 716 871 165",
      link: "tel:+254716871165",
    },
    email: {
      label: "upendocarseatcovers@gmail.com",
      link: "upendocarseatcovers@gmail.com",
    },
    whatsapp: {
      label: "+254 716871165",
      number: "254716871165",
      link: "https://wa.me/254716871165",
    },
  },
  address: {
    line: "Along Kangundo Rd, Komarock",
    city: "Nairobi",
    country: "Kenya",
    full: "Along Kangundo Rd, Komarock, Nairobi, Kenya",
    mapLabel: "Komarock, Nairobi",
    // TODO: replace with real coordinates once confirmed
    geo: { lat: -1.2833, lng: 36.9 },
    googleMapsUrl: "https://maps.app.goo.gl/zjcermeZVycnRP259",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8439611559047!2d36.901820573974085!3d-1.266279135602495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15001a29014d%3A0xa4d5277332bfb280!2sMORO%20AUTOMOTIVE!5e0!3m2!1sen!2ske!4v1784709488335!5m2!1sen!2ske",
  },
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/car_upholstery_nairobi",
    facebook: "https://facebook.com/Moro-Automotive-254",
    tiktok: "https://tiktok.com/@moroautomotive",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact us", href: "/contact" },
  ],
  developerLink: "Developed by ScriptTagg",
};
