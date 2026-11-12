export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export function validateContact(v: ContactInput): Record<string, string> {
  const e: Record<string, string> = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email.";
  if (!v.message.trim()) e.message = "Please write a message.";
  return e;
}
