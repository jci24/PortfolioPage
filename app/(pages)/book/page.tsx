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
    label: "Short and focused",
    value: "An introductory conversation",
  },
  {
    icon: Video,
    label: "Meet online",
    value: "Google Meet details arrive by email",
  },
  {
    icon: CalendarDays,
    label: "Your time zone",
    value: "Available times adjust automatically",
  },
];

export default function BookPage() {
  return (
    <div className="booking-page">
      <div className="booking-background" aria-hidden="true">
        <span className="booking-orbit booking-orbit-one" />
        <span className="booking-orbit booking-orbit-two" />
      </div>

      <div className="booking-shell">
        <Link className="projects-back-link booking-back-link" href="/">
          <ArrowLeft aria-hidden="true" />
          Back to portfolio
        </Link>

        <div className="booking-layout">
          <section className="booking-intro">
            <span className="figma-status-badge">
              <CalendarDays aria-hidden="true" />
              Schedule a conversation
            </span>
            <div>
              <p className="booking-kicker">A direct line, without the email chain.</p>
              <h1>Let&apos;s find a time that works.</h1>
              <p className="booking-lead">
                Choose an available slot to discuss software engineering roles,
                technical products, or work in audio and DSP.
              </p>
            </div>

            <div className="booking-details">
              {meetingDetails.map(({ icon: Icon, label, value }) => (
                <div className="booking-detail" key={label}>
                  <span>
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{label}</strong>
                    <p>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="booking-fallback">
              Prefer email?{" "}
              <a href="mailto:jaime.castresana@gmail.com">
                <Mail aria-hidden="true" />
                jaime.castresana@gmail.com
              </a>
            </p>
          </section>

          <section className="booking-calendar-card" aria-label="Appointment calendar">
            <div className="booking-calendar-topbar">
              <span />
              <p>Available conversations</p>
              <small>Copenhagen · CET/CEST</small>
            </div>
            <iframe
              className="booking-calendar"
              height="700"
              loading="eager"
              src={profile.bookingEmbedUrl}
              title="Book an appointment with Jaime Castresana Iza"
              width="100%"
            />
            <div className="booking-calendar-fallback">
              <p>Calendar not loading?</p>
              <a
                href={profile.bookingExternalUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open the secure booking page
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
