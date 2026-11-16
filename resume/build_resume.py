"""
Builds public/Dhanush_Kumar_T.pdf (one-page A4 resume).
Edit the content below, then run from the repo root:   python resume/build_resume.py
Requires: pip install reportlab
"""
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

OUT = Path(__file__).resolve().parent.parent / "public" / "Dhanush_Kumar_T.pdf"

# ── Content ─────────────────────────────────────────────────────────────────
NAME = "DHANUSH KUMAR T"
TITLE = "Full Stack Developer"
CONTACT = [
    "Trichy, Tamil Nadu, India  •  +91 7708522584  •  dhanushkrock@gmail.com",
    "linkedin.com/in/dhanush-kumar-t-7b8268281  •  github.com/dhanushoas  •  portfolio-psi-swart38.vercel.app",
]
SUMMARY = (
    "Full Stack Developer with 3+ years of experience building secure, scalable web applications with Java, Spring Boot, "
    "Angular, and React. Develops features for the Tamil Nadu Public Distribution System portal (tnpds.gov.in), a state-wide "
    "government service. Skilled in RESTful API design, JWT-based authentication, and database management (PostgreSQL, MySQL). "
    "Delivered core Co-Optex ERP features—secure authentication and QR-code product tracking—that improved user engagement "
    "by 10% and strengthened supply chain visibility."
)
SKILLS = [
    ("Languages", "Java (incl. Java 21), TypeScript, JavaScript, SQL, HTML, CSS"),
    ("Frameworks &amp; Libraries", "Spring Boot, Angular, React, Angular CLI"),
    ("Backend &amp; APIs", "RESTful APIs, JWT Authentication, Java Collections, Multithreading, Exception Handling, DTO-based Design"),
    ("Databases", "PostgreSQL, MySQL"),
    ("Tools &amp; Build", "Maven, Gradle, NPM, Postman, Git, GitHub"),
    ("Practices", "Agile / SDLC, Code Review, Debugging, Unit Testing, Software Documentation"),
]
EXPERIENCE = [
    {
        "role": "Full Stack Developer",
        "period": "Aug 2023 – Present",
        "org": "Oasys Cybernetics Private Limited — Trichy, Tamil Nadu",
        "bullets": [
            "Developed smart card services, citizen and department login, complaint registration and NFSA / PDS reporting "
            "modules for the Tamil Nadu Public Distribution System portal (tnpds.gov.in) using Angular, Java 21 and MySQL.",
            "Engineered and maintained 12+ Spring Boot REST APIs for branch, user, and designation management within the "
            "Co-Optex ERP system.",
            "Implemented JWT-based authentication and authorization, securing 12+ API endpoints across login and registration workflows.",
            "Integrated an ERP application login page that boosted user engagement by 10%.",
            "Built QR-code generation for product track-and-trace functionality, reducing manual tracking effort by ~30%.",
        ],
    },
    {
        "role": "HelpDesk Executive",
        "period": "Sep 2021 – Aug 2023",
        "org": "Oasys Cybernetics Private Limited — Trichy, Tamil Nadu",
        "bullets": [
            "Resolved 40+ client queries weekly via phone, email, and call by diagnosing problems and guiding users through corrective steps.",
            "Researched and delivered timely, accurate solutions, sustaining a 95% client satisfaction rate.",
        ],
    },
]
PROJECTS = [
    {
        "name": "Tamil Nadu Public Distribution System (TNPDS) — tnpds.gov.in",
        "tech": "Angular, Java 21, MySQL",
        "bullets": [
            "Built smart card services – new and duplicate smart card applications and application status tracking – for the "
            "Government of Tamil Nadu's PDS portal serving 2.2 crore+ family cards.",
            "Developed citizen and department login flows and the complaint registration module.",
            "Built NFSA and PDS reporting modules for the Civil Supplies and Consumer Protection Department.",
            "Resolved portal issues raised by citizens, fair price shop staff and department officials.",
        ],
    },
    {
        "name": "Co-Optex ERP System",
        "tech": "Java, Spring Boot, Angular, PostgreSQL",
        "bullets": [
            "Architected secure login and registration using JWT and Spring Security.",
            "Created REST APIs for branch, user, and designation modules consumed by an Angular front end.",
            "Modeled and integrated a PostgreSQL data layer supporting ERP operations.",
        ],
    },
    {
        "name": "Oasys Employee Portal",
        "tech": "Java, Spring Boot, React, MySQL",
        "bullets": [
            "Automated product track-and-trace through dynamic QR-code generation from live database records.",
            "Designed React components backed by a MySQL data store for real-time product lookup.",
            "Validated REST endpoints in Postman using DTO-based request and response mapping.",
        ],
    },
]
RESPONSIBILITIES = [
    "Built and maintained Java-based applications across the full SDLC.",
    "Developed front-end components using modern TypeScript frameworks (Angular, React).",
    "Connected back-end services with front-end components to deliver seamless user experiences.",
    "Wrote clean, testable, and maintainable code following best practices and coding standards.",
    "Optimized application performance and scalability, improving average API response time by ~25%.",
    "Supported and enhanced web applications using Java technologies.",
    "Collaborated with cross-functional teams to design and ship features.",
    "Troubleshot and debugged applications to ensure reliability.",
]
EDUCATION = [
    ("<b>Bachelor of Engineering (B.E.), Electrical and Electronics Engineering</b>",
     "Kongunadu College of Engineering and Technology, Trichy  |  2015 – 2019  |  CGPA: 7.3 (First Class)"),
    ("<b>HSC (Bio-Maths)</b> — Government Higher Secondary School, Thiruvellarai, Trichy  |  2015  |  77%", None),
    ("<b>SSLC</b> — Government Higher Secondary School, Thiruvellarai, Trichy  |  2013  |  93%", None),
]
LANGUAGES = "English (Working Proficiency)  •  Tamil (Native Proficiency)"

# ── Styles ──────────────────────────────────────────────────────────────────
INK, MUTED = HexColor("#111111"), HexColor("#444444")
BASE = 8.7
s_name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22, leading=24, textColor=INK)
s_title = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=MUTED)
s_contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=8.4, leading=11, textColor=MUTED)
s_h = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=10.2, leading=11.5, textColor=INK, spaceBefore=3.5)
s_body = ParagraphStyle("body", fontName="Helvetica", fontSize=BASE, leading=BASE * 1.18, textColor=INK, alignment=TA_JUSTIFY)
s_text = ParagraphStyle("text", fontName="Helvetica", fontSize=BASE, leading=BASE * 1.18, textColor=INK)
s_bold = ParagraphStyle("bold", parent=s_text, fontName="Helvetica-Bold")
s_italic = ParagraphStyle("italic", parent=s_text, fontName="Helvetica-Oblique", fontSize=BASE - 0.4, textColor=MUTED)
s_right = ParagraphStyle("right", parent=s_italic, alignment=2)
s_bullet = ParagraphStyle("bullet", parent=s_text, leftIndent=9, firstLineIndent=0, bulletIndent=2)
s_muted = ParagraphStyle("muted", parent=s_text, textColor=MUTED)


def heading(text):
    return [Paragraph(text, s_h), HRFlowable(width="100%", thickness=0.9, color=INK, spaceBefore=1, spaceAfter=2)]


def bullets(items):
    return [Paragraph(t, s_bullet, bulletText="•") for t in items]


def role_row(left, right, width):
    t = Table([[Paragraph(left, s_bold), Paragraph(right, s_right)]], colWidths=[width * 0.7, width * 0.3])
    t.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                           ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0), ("VALIGN", (0, 0), (-1, -1), "BOTTOM")]))
    return t


def build():
    doc = SimpleDocTemplate(str(OUT), pagesize=A4, leftMargin=14.5 * mm, rightMargin=14.5 * mm, topMargin=9 * mm, bottomMargin=7 * mm,
                            title=f"{NAME.title()} – Resume", author="Dhanush Kumar T", subject=TITLE)
    w = doc.width - 12  # the page frame has 6pt padding on each side
    story = [Paragraph(NAME, s_name), Paragraph(TITLE, s_title), Spacer(1, 3)]
    story += [Paragraph(c, s_contact) for c in CONTACT]
    story += heading("PROFESSIONAL SUMMARY") + [Paragraph(SUMMARY, s_body)]
    story += heading("TECHNICAL SKILLS") + [Paragraph(f"<b>{k}:</b> {v}", s_text) for k, v in SKILLS]
    story += heading("PROFESSIONAL EXPERIENCE")
    for e in EXPERIENCE:
        story.append(KeepTogether([role_row(e["role"], e["period"], w), Paragraph(e["org"], s_bold), *bullets(e["bullets"]), Spacer(1, 1.5)]))
    story += heading("PROJECTS")
    for p in PROJECTS:
        story.append(KeepTogether([Paragraph(p["name"], s_bold), Paragraph(p["tech"], s_italic), *bullets(p["bullets"]), Spacer(1, 1.5)]))
    story += heading("KEY RESPONSIBILITIES") + bullets(RESPONSIBILITIES)
    story += heading("EDUCATION")
    for a, b in EDUCATION:
        story.append(Paragraph(a, s_text))
        if b:
            story.append(Paragraph(b, s_muted))
    story += heading("LANGUAGES") + [Paragraph(LANGUAGES, s_text)]
    doc.build(story)


if __name__ == "__main__":
    build()
    from pypdf import PdfReader

    print(f"Wrote {OUT} – {len(PdfReader(str(OUT)).pages)} page(s)")
