export interface Award {
  id: string;
  title: string;
  event: string;
  year: number;
  place: "gold" | "silver" | "bronze" | "finalist";
  blurb: string;
  link?: { label: string; url: string };
}

export const awards: Award[] = [
  {
    id: "findit",
    title: "First Winner",
    event: "Hackathon FindIT 2024, Gadjah Mada University",
    year: 2024,
    place: "gold",
    blurb:
      "Kiddy: real-time baby and toddler monitoring with AI and IoT, using ESP32, NodeJS, Docker, Flutter, WebSockets, and Firebase.",
    link: { label: "Repository", url: "https://github.com/orgs/SiKAT-FindIT/repositories" },
  },
  {
    id: "digihatch",
    title: "First Winner",
    event: "Digihatch: Dexa Group Hackathon",
    year: 2023,
    place: "gold",
    blurb:
      "MediGuard: pharmaceutical logistics with web monitoring, IoT, and driver mobile apps for safety and real-time tracking (ESP32, NodeJS, Azure VM, MongoDB, React, Flutter, WebSocket, MQTT).",
    link: { label: "Repository", url: "https://github.com/ardhanurfan/MediGuard-web" },
  },
  {
    id: "yelp",
    title: "Third Winner",
    event: "Youth Economic Leadership Program 2024, Central Bank of Indonesia",
    year: 2024,
    place: "bronze",
    blurb:
      "BI-Trade Repository: automates money market data processing with an AI-based early warning system for quotation obligations. Top 3 of 30 groups, 153 participants.",
  },
  {
    id: "huawei",
    title: "Top 9",
    event: "Huawei Developer Competition 2024, Asia Pacific Enterprise Track",
    year: 2024,
    place: "finalist",
    blurb:
      "Finalist out of 220 teams with I-BAMS, a smart building system using cloud, AI, and IoT for centralized control, predictive analytics, and energy optimization.",
  },
];
