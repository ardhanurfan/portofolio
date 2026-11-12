import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Section } from "../components/Section";
import { profile } from "../data/profile";
import { validateContact } from "../lib/validate";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const errs = validateContact({
      name: String(fd.get("user_name") ?? ""),
      email: String(fd.get("user_email") ?? ""),
      message: String(fd.get("message") ?? ""),
    });
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    emailjs
      .sendForm("service_bmhyr3c", "template_ovrt8sd", form, "W2Hn93rroAeNTWoAH")
      .then(() => {
        setStatus("sent");
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  const field = "divider w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm";
  return (
    <Section id="contact" eyebrow="Contact" title={"Let's schedule an interview"} lead="Hiring for backend, platform or full-stack? Send a note and I will reply quickly.">
      <div className="grid gap-8 pb-16 md:grid-cols-2 md:pb-0">
        <div className="space-y-4">
          <p className="muted">Or reach me directly:</p>
          <a className="btn-primary" href={`mailto:${profile.email}?subject=Interview%20invitation`}><FiMail /> {profile.email}</a>
          <div className="flex gap-3">
            <a className="btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            <a className="btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
          </div>
        </div>
        <form onSubmit={onSubmit} noValidate className="card space-y-4 p-6 md:p-8">
          {(["name", "email"] as const).map((n) => (
            <div key={n}>
              <label htmlFor={n} className="ink mb-1 block text-sm font-medium capitalize">{n}</label>
              <input id={n} name={n === "name" ? "user_name" : "user_email"} type={n === "email" ? "email" : "text"} aria-invalid={!!errors[n]} className={field} />
              {errors[n] && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors[n]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="ink mb-1 block text-sm font-medium capitalize">Message</label>
            <textarea id="message" name="message" rows={4} aria-invalid={!!errors.message} className={field} />
            {errors.message && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message}</p>}
          </div>
          <button className="btn-primary w-full" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
          <p role="status" className="text-sm">
            {status === "sent" && "Thanks! I'll get back to you soon."}
            {status === "error" && `Couldn't send. Please email ${profile.email} directly.`}
          </p>
        </form>
      </div>
      <footer className="muted mt-16 hidden text-center md:block">© {new Date().getFullYear()} {profile.name}</footer>
    </Section>
  );
}
