export interface Command {
  id: string;
  label: string;
  keywords: string[];
  run: () => void;
}

export function searchCommands(commands: Command[], query: string): Command[] {
  const q = query.trim().toLowerCase();
  if (!q) return commands;
  return commands.filter(
    (c) => c.label.toLowerCase().includes(q) || c.keywords.some((k) => k.toLowerCase().includes(q)),
  );
}
