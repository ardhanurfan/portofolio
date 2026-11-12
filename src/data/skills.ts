export interface Skill {
  name: string;
  level: 1 | 2 | 3;
  icon?: string;
}
export interface SkillGroup {
  id: string;
  name: string;
  skills: Skill[];
}

const t = (f: string) => `/tech/${f}`;

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    name: "Backend & Languages",
    skills: [
      { name: "Go", level: 3, icon: t("golang-icon.svg") },
      { name: "TypeScript", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "PHP", level: 2 },
      { name: "Python", level: 2, icon: t("python.svg") },
      { name: "NodeJS", level: 3, icon: t("nodejs-icon.svg") },
      { name: "Laravel", level: 2, icon: t("laravel.svg") },
      { name: "Java", level: 2, icon: t("java-4.svg") },
      { name: "Kotlin", level: 1, icon: t("kotlin-1.svg") },
      { name: "Dart", level: 2 },
      { name: "C / C++", level: 1, icon: t("c-1.svg") },
      { name: "Haskell", level: 1 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend & Mobile",
    skills: [
      { name: "Vue", level: 3 },
      { name: "React", level: 3, icon: t("react-2.svg") },
      { name: "Next.js", level: 2 },
      { name: "Flutter", level: 3, icon: t("flutter.svg") },
      { name: "React Native", level: 2 },
      { name: "Redux", level: 2 },
      { name: "MUI", level: 2 },
    ],
  },
  {
    id: "data",
    name: "Data & Messaging",
    skills: [
      { name: "PostgreSQL", level: 3, icon: t("postgresql.svg") },
      { name: "MySQL", level: 3, icon: t("mysql.svg") },
      { name: "MariaDB", level: 2 },
      { name: "MongoDB", level: 2, icon: t("mongodb.svg") },
      { name: "ArangoDB", level: 1 },
      { name: "Redis", level: 2 },
      { name: "RabbitMQ", level: 2 },
      { name: "MQTT", level: 2 },
      { name: "WebSocket", level: 2, icon: t("websocket.svg") },
      { name: "Supabase", level: 2 },
      { name: "Firebase", level: 2, icon: t("firebase-2.svg") },
      { name: "Pandas", level: 2 },
      { name: "Tableau", level: 1, icon: t("tableau.svg") },
      { name: "Power BI", level: 1, icon: t("powerbi.svg") },
    ],
  },
  {
    id: "devops",
    name: "Cloud & DevOps / SRE",
    skills: [
      { name: "AWS", level: 2 },
      { name: "GCP", level: 2, icon: t("gcp.svg") },
      { name: "Azure", level: 2, icon: t("azure.svg") },
      { name: "Docker", level: 3, icon: t("docker.svg") },
      { name: "Kubernetes", level: 2 },
      { name: "Prometheus", level: 2 },
      { name: "Grafana", level: 2, icon: t("grafana.svg") },
      { name: "Datadog", level: 2 },
      { name: "PagerDuty", level: 3 },
      { name: "Incident management", level: 3 },
      { name: "Git", level: 3 },
      { name: "Postman", level: 3, icon: t("postman.svg") },
      { name: "Jira", level: 2 },
    ],
  },
];
