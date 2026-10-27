from pathlib import Path
import sys

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent
SOURCE_ROOT = Path("/Users/jaimecastresanaiza/Documents/New project 3")
sys.path.insert(0, str(SOURCE_ROOT))

import build_soundboks_audio_engineer_cv_modern as style


OUT = ROOT.parent / "public" / "Jaime_Castresana_CV.pdf"
PAGE_W, PAGE_H = A4


def build():
    photo = SOURCE_ROOT / "jaime_demant_generic_photo.png"
    c = canvas.Canvas(str(OUT), pagesize=A4)
    margin = 17 * mm
    full_width = PAGE_W - 2 * margin
    top = PAGE_H - 15 * mm

    c.setFillColor(style.PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    c.setFont("GeistMono-Medium", 7.5)
    c.setFillColor(style.ACCENT)
    c.drawString(margin, top, "CURRICULUM VITAE")

    photo_size = 27 * mm
    photo_x = PAGE_W - margin - photo_size
    photo_y = top - photo_size - 2
    c.drawImage(str(photo), photo_x, photo_y, photo_size, photo_size, mask="auto")

    y = top - 27
    name_text = c.beginText(margin, y)
    name_text.setFont("Geist-SemiBold", 31.2)
    name_text.setCharSpace(-0.55)
    name_text.setFillColor(style.INK)
    name_text.textLine("Jaime Castresana Iza")
    c.drawText(name_text)

    y -= 23
    c.setFont("Geist", 9.9)
    c.setFillColor(style.MUTED)
    c.drawString(margin, y, "Software Engineer | Product Engineering, Applied AI & Audio")

    y -= 23
    profile = (
        "Software engineer building full-stack engineering software and independent AI applications. I combine user "
        "discovery, backend and frontend implementation, testing, and an audio/DSP foundation to turn complex data "
        "and specialist workflows into useful, reliable products."
    )
    y = style.draw_wrapped(c, profile, margin, y, 135 * mm, 8.4, 11.5, "Geist", style.BODY)
    y -= 12
    c.setStrokeColor(style.LINE)
    c.setLineWidth(0.65)
    c.line(margin, y, PAGE_W - margin, y)
    y -= 24

    gap = 10 * mm
    column_space = full_width - gap
    left_w = column_space * 0.28
    right_x = margin + left_w + gap
    right_w = column_space * 0.72
    left_y = y
    right_y = y

    # Supporting information.
    left_y = style.section_label(c, "Contact", margin, left_y, left_w)
    left_y = style.contact_row(
        c,
        "Email",
        "jaime.castresana@gmail.com",
        margin,
        left_y,
        left_w,
        "mailto:jaime.castresana@gmail.com",
    )
    left_y = style.contact_row(c, "Location", "Copenhagen, Denmark", margin, left_y, left_w)
    left_y = style.contact_row(
        c,
        "GitHub",
        "github.com/jci24",
        margin,
        left_y,
        left_w,
        "https://github.com/jci24",
    )
    left_y = style.contact_row(
        c,
        "Website",
        "jaimecastresana.com",
        margin,
        left_y,
        left_w,
        "https://jaimecastresana.com",
    )
    left_y -= 7

    left_y = style.section_label(c, "Core Competencies", margin, left_y, left_w)
    left_y = style.compact_group(
        c,
        "Product Engineering",
        [
            "Technical product development",
            "Workflow mapping and UX",
            "Testing and validation",
            "POC-to-release delivery",
        ],
        margin,
        left_y,
        left_w,
    )
    left_y = style.compact_group(
        c,
        "Audio & Signal",
        [
            "Acoustic analysis",
            "Sound quality",
            "Embedded audio and DSP",
            "Measurement workflows",
        ],
        margin,
        left_y,
        left_w,
    )
    left_y = style.compact_group(
        c,
        "AI & Automation",
        [
            "LLM application development",
            "Tool calling",
            "Agent-style workflows",
            "Evidence-bound evaluation",
        ],
        margin,
        left_y,
        left_w,
    )

    left_y = style.section_label(c, "Core Tools", margin, left_y, left_w)
    left_y = style.draw_chips(
        c,
        ["C#/.NET", "React", "TypeScript", "Python", "MATLAB", "C/C++", "Git", "CI/CD", "REST APIs", "Azure DevOps"],
        margin,
        left_y,
        left_w,
        accent=True,
        size=6.05,
    )
    left_y -= 6

    left_y = style.section_label(c, "Development", margin, left_y, left_w)
    left_y = style.draw_wrapped(
        c,
        "Selected by management for the one-week Effective Communication Skills for Professionals programme.",
        margin,
        left_y,
        left_w,
        7.25,
        9.5,
        "Geist",
        style.BODY,
    )
    left_y -= 12

    left_y = style.section_label(c, "Beyond Work", margin, left_y, left_w)
    left_y = style.draw_wrapped(
        c,
        "Music producer for independent artists in Spain, including Suave, winner of VillaSound Festival Bilbao 2021.",
        margin,
        left_y,
        left_w,
        7.25,
        9.5,
        "Geist",
        style.BODY,
    )
    left_y -= 12

    left_y = style.section_label(c, "Languages", margin, left_y, left_w)
    for language in ["Spanish - Native", "English - C1", "Danish - A2", "French - B1"]:
        c.setFont("Geist", 7.4)
        c.setFillColor(style.BODY)
        c.drawString(margin, left_y, language)
        left_y -= 11.5

    # Main evidence.
    right_y = style.section_label(c, "Professional Experience", right_x, right_y, right_w)
    right_y = style.role_header(
        c,
        "Hottinger Brüel & Kjær",
        "Software Engineer",
        "Sep 2023 - Present",
        right_x,
        right_y,
        right_w,
    )
    for item in [
        "Owned product features across requirements, technical design, C#/.NET APIs, React implementation, automated tests, and delivery.",
        "Gathered user and specialist requirements; separated essential from optional needs before implementation.",
        "Compared UI/UX, algorithm, and visualisation-library options; documented trade-offs and presented decisions to stakeholders.",
        "Ran user tests and specialist reviews for acoustic model-comparison, visualisation, and validation workflows.",
    ]:
        right_y = style.bullet(c, item, right_x, right_y, right_w)
    right_y -= 8

    right_y = style.role_header(
        c,
        "ICEpower A/S",
        "R&D Software Assistant",
        "May 2022 - Jun 2023",
        right_x,
        right_y,
        right_w,
    )
    for item in [
        "Extended an existing Python and pytest framework for amplifier, network, audio, and communication testing.",
        "Tested traffic stress, disruption, power cycling, triggering, and recovery; processed results and generated plots in Python.",
        "Contributed automation to existing test pipelines and investigated system behaviour across failure and recovery paths.",
        "Modelled digital crossover responses in MATLAB and implemented selected filters in C++ on ARM Cortex-M7.",
    ]:
        right_y = style.bullet(c, item, right_x, right_y, right_w)
    right_y -= 10

    right_y = style.section_label(c, "Education", right_x, right_y, right_w)
    right_y = style.education_item(
        c,
        "MSc Sound and Music Computing",
        "Aalborg University, Copenhagen Campus",
        "2021 - 2023",
        right_x,
        right_y,
        right_w,
    )
    right_y = style.education_item(
        c,
        "BSc Industrial Technology Engineering",
        "University of Deusto",
        "2015 - 2020",
        right_x,
        right_y,
        right_w,
    )
    right_y -= 5

    right_y = style.section_label(c, "Selected Project", right_x, right_y, right_w)
    card_top = right_y + 6
    card_h = 159
    card_bottom = card_top - card_h
    c.setFillColor(style.NEUTRAL_TINT)
    c.setStrokeColor(style.NEUTRAL_BORDER)
    c.setLineWidth(0.5)
    c.roundRect(right_x, card_bottom, right_w, card_h, 4, fill=1, stroke=1)

    card_x = right_x + 10
    card_w = right_w - 20
    project_y = card_top - 18
    c.setFont("Geist-SemiBold", 9.1)
    c.setFillColor(style.INK)
    c.drawString(card_x, project_y, "JustCall")
    period = "INDEPENDENT PROJECT"
    period_w = stringWidth(period, "GeistMono", 6.2)
    c.setFont("GeistMono", 6.2)
    c.setFillColor(style.FAINT)
    c.drawString(card_x + card_w - period_w, project_y, period)
    project_y -= 12
    c.setFont("GeistMono-Medium", 6.8)
    c.setFillColor(style.ACCENT)
    c.drawString(card_x, project_y, "RELIABLE VOICE PRACTICE PRODUCT")
    project_y -= 14

    link = "jaimecastresana.com/projects/justcall"
    c.setFont("GeistMono", 6.5)
    c.setFillColor(style.MUTED)
    c.drawString(card_x, project_y, link)
    c.linkURL(
        "https://jaimecastresana.com/projects/justcall",
        (card_x, project_y - 2, card_x + stringWidth(link, "GeistMono", 6.5), project_y + 8),
        relative=0,
    )
    project_y -= 17

    for item in [
        "React Native app with authenticated TypeScript API, voice integration, owned session evidence, and explicit recovery paths.",
        "Validated through automated tests and ten consecutive two-way iPhone calls; production and learner outcomes remain separate gates.",
    ]:
        project_y = style.bullet(c, item, card_x, project_y, card_w)

    style.draw_chips(
        c,
        ["TypeScript", "React Native", "Hono", "Supabase", "Voice AI"],
        card_x,
        card_bottom + 48,
        card_w,
        accent=False,
        size=6.1,
    )

    callout_y = card_bottom + 10
    callout_h = 18
    c.setFillColor(style.TEAL_TINT)
    c.setStrokeColor(style.TEAL_BORDER)
    c.setLineWidth(0.4)
    c.roundRect(card_x, callout_y, card_w, callout_h, 2, fill=1, stroke=1)
    c.setFont("GeistMono-Medium", 6.4)
    c.setFillColor(style.ACCENT)
    c.drawString(card_x + 6, callout_y + 6, "FROM VOICE DEMO TO TESTED SESSION RELIABILITY")

    footer_y = 10 * mm
    c.setStrokeColor(style.LINE)
    c.setLineWidth(0.45)
    c.line(margin, footer_y + 11, PAGE_W - margin, footer_y + 11)
    footer = "JAIMECASTRESANA.COM  ·  GITHUB.COM/JCI24  ·  COPENHAGEN"
    c.setFont("GeistMono", 6.3)
    c.setFillColor(style.FAINT)
    c.drawCentredString(PAGE_W / 2, footer_y, footer)

    bottom = min(left_y, card_bottom)
    if bottom < 13 * mm:
        print(f"WARNING: content close to bottom margin y={bottom:.1f}")

    c.showPage()
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
