import type { IconType } from "react-icons";
import { FiAlertTriangle } from "react-icons/fi";
import {
  SiAlibabacloud,
  SiAmazonaws,
  SiArangodb,
  SiCplusplus,
  SiDart,
  SiDatadog,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGo,
  SiGooglecloud,
  SiGrafana,
  SiHaskell,
  SiJavascript,
  SiJira,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiMariadb,
  SiMicrosoftazure,
  SiMongodb,
  SiMqtt,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPagerduty,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPowerbi,
  SiPrometheus,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiSupabase,
  SiTableau,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export interface Skill {
  name: string;
  level: 1 | 2 | 3;
  icon: IconType;
}
export interface SkillGroup {
  id: string;
  name: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    name: "Backend & Languages",
    skills: [
      { name: "Go", level: 3, icon: SiGo },
      { name: "TypeScript", level: 3, icon: SiTypescript },
      { name: "JavaScript", level: 3, icon: SiJavascript },
      { name: "PHP", level: 2, icon: SiPhp },
      { name: "Python", level: 2, icon: SiPython },
      { name: "NodeJS", level: 3, icon: SiNodedotjs },
      { name: "Laravel", level: 2, icon: SiLaravel },
      { name: "Java", level: 2, icon: SiOpenjdk },
      { name: "Kotlin", level: 1, icon: SiKotlin },
      { name: "Dart", level: 2, icon: SiDart },
      { name: "C / C++", level: 1, icon: SiCplusplus },
      { name: "Haskell", level: 1, icon: SiHaskell },
    ],
  },
  {
    id: "frontend",
    name: "Frontend & Mobile",
    skills: [
      { name: "Vue", level: 3, icon: SiVuedotjs },
      { name: "React", level: 3, icon: SiReact },
      { name: "Next.js", level: 2, icon: SiNextdotjs },
      { name: "Flutter", level: 3, icon: SiFlutter },
      { name: "React Native", level: 2, icon: SiReact },
      { name: "Redux", level: 2, icon: SiRedux },
      { name: "MUI", level: 2, icon: SiMui },
    ],
  },
  {
    id: "data",
    name: "Data & Messaging",
    skills: [
      { name: "PostgreSQL", level: 3, icon: SiPostgresql },
      { name: "MySQL", level: 3, icon: SiMysql },
      { name: "MariaDB", level: 2, icon: SiMariadb },
      { name: "MongoDB", level: 2, icon: SiMongodb },
      { name: "ArangoDB", level: 1, icon: SiArangodb },
      { name: "Redis", level: 2, icon: SiRedis },
      { name: "RabbitMQ", level: 2, icon: SiRabbitmq },
      { name: "MQTT", level: 2, icon: SiMqtt },
      { name: "WebSocket", level: 2, icon: SiSocketdotio },
      { name: "Supabase", level: 2, icon: SiSupabase },
      { name: "Firebase", level: 2, icon: SiFirebase },
      { name: "Pandas", level: 2, icon: SiPandas },
      { name: "Tableau", level: 1, icon: SiTableau },
      { name: "Power BI", level: 1, icon: SiPowerbi },
    ],
  },
  {
    id: "devops",
    name: "Cloud & DevOps / SRE",
    skills: [
      { name: "AWS", level: 2, icon: SiAmazonaws },
      { name: "GCP", level: 2, icon: SiGooglecloud },
      { name: "Azure", level: 2, icon: SiMicrosoftazure },
      { name: "Alibaba Cloud", level: 2, icon: SiAlibabacloud },
      { name: "Docker", level: 3, icon: SiDocker },
      { name: "Kubernetes", level: 2, icon: SiKubernetes },
      { name: "Prometheus", level: 2, icon: SiPrometheus },
      { name: "Grafana", level: 2, icon: SiGrafana },
      { name: "Datadog", level: 2, icon: SiDatadog },
      { name: "PagerDuty", level: 3, icon: SiPagerduty },
      { name: "Incident management", level: 3, icon: FiAlertTriangle },
      { name: "Git", level: 3, icon: SiGit },
      { name: "Postman", level: 3, icon: SiPostman },
      { name: "Jira", level: 2, icon: SiJira },
    ],
  },
];
