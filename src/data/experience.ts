export interface Role {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  xp: { label: string; value: string }[];
  bullets: string[];
}

export const experience: Role[] = [
  {
    id: "mekari",
    role: "Software Engineer I",
    org: "Mekari",
    period: "Jan 2026 – Present",
    location: "Hybrid",
    xp: [
      { label: "microservices", value: "25+" },
      { label: "reliability", value: "99.9%" },
      { label: "MTTA", value: "<60s" },
      { label: "SDLC speed-up", value: "10x" },
      { label: "story points / sprint", value: "19+" },
    ],
    bullets: [
      "Developed and maintained 25+ microservices for Mekari's no-code platform, used by single-tenant and multi-tenant clients, covering the report feature, the plugin feature, and cross-product API integrations, with 99.9% system reliability and 100% technical documentation coverage.",
      "Directed end-to-end engineering initiatives as Project In Charge (PIC), from authoring RFCs and challenging product scope to execution, with zero major bugs (P0/P1) leaked to staging or production and ≥90% coverage for unit and SUT tests.",
      "Accelerated the SDLC by 10x by pioneering AI-assisted workflows across ATDD, automated testing, troubleshooting, and PRD/RFC reviews, at an 80% AI-assisted PR completion rate. Engineers build the test automation themselves instead of relying on a dedicated QA.",
      "Upskilled the engineering team by leading technical sharing sessions on emerging AI methodologies.",
      "Sustained delivery averaging 19+ story points per sprint (25% above the engineering baseline) with under 10% ticket carryover and a median lead time for change under 3 days.",
      "Achieved 100% SLA fulfillment during on-call rotations: P0 incidents resolved within 30 minutes, P1s the same day, MTTA under 60 seconds for high-urgency PagerDuty alerts, followed by RCA to prevent recurrences.",
      "Engineered backend services in Go and PHP on a microservices architecture, alongside a Vue and TypeScript frontend.",
    ],
  },
  {
    id: "kpmg",
    role: "Fullstack Engineer Associate",
    org: "KPMG Siddharta Advisory",
    period: "Oct 2025 – Dec 2025",
    location: "Jakarta, Indonesia",
    xp: [{ label: "engagement", value: "3 mo" }],
    bullets: [
      "Developed a Financial Risk Management tool that automates Expected Credit Loss (ECL) calculations, enabling clients to achieve full compliance with PSAK 109 standards.",
      "Delivered the tool within a three-month engagement, with an Indonesia Stock Exchange-listed multifinance company as the main client.",
    ],
  },
  {
    id: "paperid",
    role: "Software Engineer Intern",
    org: "Paper.id",
    period: "Feb 2025 – Apr 2025",
    location: "Remote",
    xp: [{ label: "businesses served", value: "600K+" }],
    bullets: [
      "Developed the VA BCA Open Amount feature across the full development lifecycle, including System Integration Testing (SIT) and User Acceptance Testing (UAT).",
      "Delivered customized solutions for enterprise clients in the Medium-Large Enterprise unit of Paper.id, a B2B invoicing and payments platform serving 600,000+ businesses.",
    ],
  },
  {
    id: "bi",
    role: "Analyst",
    org: "Central Bank of Indonesia (KMBI Program)",
    period: "Sep 2024 – Dec 2024",
    location: "Yogyakarta, Indonesia",
    xp: [{ label: "regional governments", value: "6" }],
    bullets: [
      "Led development of Bregada, a Non-Cash Payment System Performance dashboard that supports monitoring of electronification in 6 regional governments in DIY.",
      "Gained in-depth knowledge of central banking and payment systems, including AI and blockchain applications.",
    ],
  },
  {
    id: "kalbe",
    role: "Software Engineer Intern (Corporate Digital Technology)",
    org: "PT Kalbe Farma Tbk",
    period: "Jan 2024 – Sep 2024",
    location: "Hybrid",
    xp: [],
    bullets: [
      "Developed VisionX, a platform covering Patent Information, Technical Papers, PACS Software, DICOM Viewer, AI for Medical Imaging, and Radiogenomics.",
      "Implemented a jBPM-based workflow platform to improve operational efficiency.",
    ],
  },
  {
    id: "pln",
    role: "Software Engineer Intern",
    org: "PLN Icon Plus",
    period: "Jun 2023 – Dec 2023",
    location: "Hybrid",
    xp: [],
    bullets: [
      "Developed a website and mobile application for preventive maintenance with real-time data display and updates for Icon assets.",
    ],
  },
  {
    id: "gss",
    role: "IT Manager",
    org: "Ganesha Student Innovation Summit",
    period: "Apr 2023 – Oct 2023",
    location: "Bandung, Indonesia",
    xp: [
      { label: "divisions", value: "15" },
      { label: "participants", value: "500+" },
    ],
    bullets: [
      "Managed IT infrastructure and technical requirements across 15 divisions, and led website design and development serving over 500 participants.",
    ],
  },
];
