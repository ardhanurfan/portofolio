import type { Project } from "../data/projects";

export const filterProjects = (list: Project[], tag: string): Project[] =>
  tag === "all" ? list : list.filter((p) => p.tags.includes(tag));
