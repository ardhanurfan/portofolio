export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  hint?: string;
}

export const profile = {
  name: "Ardhan Nur Urfan",
  role: "Software Engineer I",
  company: "Mekari",
  location: "Yogyakarta, Indonesia",
  email: "ardhanurfan@gmail.com",
  summary:
    "I build and run reliable backend systems and full-stack products, from SaaS microservices to IoT. ITB Summa Cum Laude, four-time competition placer.",
  cv: "https://drive.google.com/file/d/12KOBWQSUFsD0pXpB5_Ijus8cKn8-0o3T/view?usp=sharing",
  links: {
    github: "https://github.com/ardhanurfan",
    linkedin: "https://www.linkedin.com/in/ardhanurfan/",
    instagram: "https://instagram.com/ardhanurfan_",
  },
  stats: [
    { label: "microservices maintained", value: 25, suffix: "+" },
    { label: "system reliability", value: 99.9, suffix: "%" },
    {
      label: "MTTA on urgent alerts",
      value: 60,
      prefix: "<",
      suffix: "s",
      hint: "100% SLA fulfillment during on-call",
    },
    {
      label: "faster SDLC with AI workflows",
      value: 10,
      suffix: "x",
      hint: "Engineers build the test automation themselves instead of relying on QA",
    },
    { label: "GPA, Summa Cum Laude", value: 3.85 },
  ] as Stat[],
};
