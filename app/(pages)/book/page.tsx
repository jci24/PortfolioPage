import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  Video,
} from "lucide-react";
import { AudioVisual, RevealObserver } from "@/components/audio-visuals";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Book a conversation | Jaime Castresana Iza",
  description:
    "Choose a convenient time for a short conversation with software engineer Jaime Castresana Iza.",
  alternates: {
    canonical: "/book",
  },
};

const meetingDetails = [
  {
    icon: Clock3,
    label: "Format",
    value: "A short, focused introductory conversation",
  },
  {
    icon: Video,
    label: "Location",
    value: "Online · Google Meet details arrive by email",
  },
  {
    icon: CalendarDays,
    label: "Time zone",
    value: "Available times adjust to your location",
  },
];

export default function BookPage() {
  return (
    <div className="premium-subpage premium-booking-page">
      <RevealObserver />
      <div className="premium-booking-shell">
        <Link className="premium-back-link" href="/">
          <ArrowLeft aria-hidden="true" />
          Portfolio
        </Link>

        <header className="premium-booking-intro" data-reveal>
          <div>
            <p className="premium-section-label">Schedule a conversation</p>
            <h1>Let&apos;s find a time that works.</h1>
            <p>
              Choose an available slot to discuss software engineering roles,
              technical products, or work in audio and DSP.
            </p>
          </div>
          <AudioVisual className="premium-booking-signal" variant="waveform" />
        </header>

        <div className="premium-booking-layout">
          <aside className="premium-booking-details" data-reveal>
            {meetingDetails.map(({ icon: Icon, label, value }, index) => (
              <div key={label}>
                <span>
                  <Icon aria-hidden="true" />
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong>{label}</strong>
                  <p>{value}</p>
                </div>
              </div>
            ))}
            <p className="premium-booking-email">
              Prefer email?
              <a href="mailto:jaime.castresana@gmail.com">
                <Mail aria-hidden="true" />
                jaime.castresana@gmail.com
              </a>
            </p>
          </aside>

          <section
            aria-label="Appointment calendar"
            className="premium-calendar-card"
            data-reveal
          >
            <div className="premium-calendar-topbar">
              <span />
              <p>Available conversations</p>
              <small>Copenhagen · CET/CEST</small>
            </div>
            <iframe
              className="premium-calendar"
              height="700"
              loading="eager"
              src={profile.bookingEmbedUrl}
              title="Book an appointment with Jaime Castresana Iza"
              width="100%"
            />
            <div className="premium-calendar-fallback">
              <p>Calendar not loading?</p>
              <a
                href={profile.bookingExternalUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open Google&apos;s secure booking page
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
