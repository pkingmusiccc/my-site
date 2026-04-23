"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Input,
  Textarea,
  Select,
  Label,
  Checkbox,
  FieldError,
} from "@/components/ui/Field";
import { useCopy } from "@/lib/locale";

export function ContactForm() {
  const copy = useCopy();
  const f = copy.ready.form;

  const [status, setStatus] = useState<"idle" | "pending" | "ok">("idle");
  const pending = status === "pending";

  const startedAtInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (startedAtInputRef.current) {
      startedAtInputRef.current.value = String(Date.now());
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("pending");
    window.setTimeout(() => setStatus("ok"), 600);
  };

  const err: Record<string, string> = {};
  const formError: string | undefined = undefined;

  if (status === "ok") {
    return (
      <div role="status" aria-live="polite" className="py-4">
        <div className="flex items-start gap-4">
          <span
            aria-hidden
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent shrink-0"
          >
            <Check size={18} strokeWidth={2} className="text-accent-ink" />
          </span>
          <div>
            <h3 className="font-medium text-[20px] md:text-[22px] tracking-[-0.015em] text-current mb-2">
              {f.success.heading}
            </h3>
            <p className="text-[14px] leading-[1.55] opacity-75 max-w-[52ch]">
              {f.success.body}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-describedby="form-status">
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Website (leave blank)
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <input
        ref={startedAtInputRef}
        type="hidden"
        name="startedAt"
        defaultValue=""
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <Label htmlFor="businessName">{f.businessName.label}</Label>
          <Input
            id="businessName"
            name="businessName"
            autoComplete="organization"
            placeholder={f.businessName.placeholder}
            required
            aria-invalid={Boolean(err.businessName)}
            aria-describedby={err.businessName ? "err-businessName" : undefined}
          />
          <FieldError>
            {err.businessName && (
              <span id="err-businessName">{err.businessName}</span>
            )}
          </FieldError>
        </div>

        <div>
          <Label htmlFor="contactName">{f.contactName.label}</Label>
          <Input
            id="contactName"
            name="contactName"
            autoComplete="name"
            placeholder={f.contactName.placeholder}
            required
            aria-invalid={Boolean(err.contactName)}
            aria-describedby={err.contactName ? "err-contactName" : undefined}
          />
          <FieldError>
            {err.contactName && (
              <span id="err-contactName">{err.contactName}</span>
            )}
          </FieldError>
        </div>

        <div>
          <Label htmlFor="role">{f.role.label}</Label>
          <Select
            id="role"
            name="role"
            defaultValue=""
            required
            aria-invalid={Boolean(err.role)}
            aria-describedby={err.role ? "err-role" : undefined}
          >
            <option value="" disabled>
              {f.role.placeholder}
            </option>
            {f.role.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
          <FieldError>
            {err.role && <span id="err-role">{err.role}</span>}
          </FieldError>
        </div>

        <div>
          <Label htmlFor="canton">{f.canton.label}</Label>
          <Select
            id="canton"
            name="canton"
            defaultValue=""
            required
            aria-invalid={Boolean(err.canton)}
            aria-describedby={err.canton ? "err-canton" : undefined}
          >
            <option value="" disabled>
              {f.canton.placeholder}
            </option>
            {f.canton.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          <FieldError>
            {err.canton && <span id="err-canton">{err.canton}</span>}
          </FieldError>
        </div>

        <div>
          <Label htmlFor="email">{f.email.label}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={f.email.placeholder}
            required
            aria-invalid={Boolean(err.email)}
            aria-describedby={err.email ? "err-email" : undefined}
          />
          <FieldError>
            {err.email && <span id="err-email">{err.email}</span>}
          </FieldError>
        </div>

        <div>
          <Label htmlFor="phone">{f.phone.label}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={f.phone.placeholder}
            required
            aria-invalid={Boolean(err.phone)}
            aria-describedby={err.phone ? "err-phone" : undefined}
          />
          <FieldError>
            {err.phone && <span id="err-phone">{err.phone}</span>}
          </FieldError>
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message">{f.message.label}</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder={f.message.placeholder}
            aria-invalid={Boolean(err.message)}
            aria-describedby={err.message ? "err-message" : undefined}
          />
          <FieldError>
            {err.message && <span id="err-message">{err.message}</span>}
          </FieldError>
        </div>

        <div className="md:col-span-2 flex items-start gap-3 pt-2">
          <Checkbox
            id="consent"
            name="consent"
            required
            aria-invalid={Boolean(err.consent)}
            aria-describedby={err.consent ? "err-consent" : undefined}
          />
          <Label
            htmlFor="consent"
            className="mb-0 normal-case tracking-normal text-[14px] text-bg leading-[1.5]"
          >
            {f.consent.label}
          </Label>
        </div>
        {err.consent && (
          <div className="md:col-span-2 -mt-4">
            <FieldError>
              <span id="err-consent">{err.consent}</span>
            </FieldError>
          </div>
        )}
      </div>

      <div
        id="form-status"
        role="alert"
        aria-live="polite"
        className="min-h-[1.5rem] mt-6"
      >
        {formError ? (
          <p className="text-[14px] text-error">{formError}</p>
        ) : null}
      </div>

      <div className="mt-7 flex flex-col items-center gap-3">
        <Button
          type="submit"
          size="lg"
          variant="primary"
          disabled={pending}
          className="bg-[#2F3338] hover:bg-[#3F4348] [background-image:none] hover:[background-image:none]"
        >
          {pending ? f.sending : f.submit.label}
        </Button>
        <p className="text-[11px] tracking-[0.14em] uppercase text-bg/55">
          {f.replyBadge}
        </p>
      </div>
    </form>
  );
}
