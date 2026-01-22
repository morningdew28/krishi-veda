"use client";

import { ThreeDMarquee } from "@/components/ui/shadcn-io/3d-marquee";

export default function Marquee() {
  const images = [
    "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80", // Drone Close-up
    "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80", // Drone Spraying
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80", // Tablet Control
    "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80", // Smart Farmer Interface
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80", // Solar Energy Farm
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", // Data Analytics Dashboard
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // Global Connectivity/Network

    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80", // Purple LED Farm
    "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&w=800&q=80", // Vertical Shelves
    "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80", // Modern Greenhouse Glass
    "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=800&q=80", // Lab Grow Lights
    "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800&q=80", // Scientist in Lab
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80", // Microscope View
    "https://images.unsplash.com/photo-1527847263472-aa5338d178b8?auto=format&fit=crop&w=800&q=80", // PVC Pipes Farming

    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80", // Hand holding soil (Classic)
    "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80", // Seedling in soil
    "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=800&q=80", // Garden Soil with Trowel

    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80", // Hand holding soil (Classic)
    "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80", // Seedling in soil
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80", // Hands Planting Seed
    "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&w=800&q=80", // Rich Black Soil Macro
    "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=800&q=80", // Garden Soil with Trowel
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80", // Nature/Earth Background
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80", // Field Furrows (Plowed land)

    "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80", // Corn Field (Maize)
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80", // Golden Wheat Field
    "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80", // Leaf Macro (Veins)
    "https://images.unsplash.com/photo-1518531933037-9a60aa698154?auto=format&fit=crop&w=800&q=80", // Plant Sprout Macro
    "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80", // Green Leaf Texture (Health)
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", // Sunset over Field
  ];
  return <ThreeDMarquee images={images} />;
}
