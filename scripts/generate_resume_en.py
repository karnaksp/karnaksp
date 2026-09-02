from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PDF = ROOT / "Irinyakov_Denis_EN.pdf"

NAVY = colors.HexColor("#18242C")
TEAL = colors.HexColor("#087F8C")
ORANGE = colors.HexColor("#C15B42")
SLATE = colors.HexColor("#52616B")
PALE = colors.HexColor("#EEF5F5")
LINE = colors.HexColor("#D5E2E4")


pdfmetrics.registerFont(TTFont("Arial", "/System/Library/Fonts/Supplemental/Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Italic", "/System/Library/Fonts/Supplemental/Arial Italic.ttf"))


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="ResumeBody",
        fontName="Arial",
        fontSize=8.3,
        leading=11.1,
        textColor=NAVY,
        spaceAfter=3.2,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSummary",
        parent=styles["ResumeBody"],
        fontSize=8.8,
        leading=12.2,
        spaceAfter=5,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeName",
        fontName="Arial-Bold",
        fontSize=23,
        leading=26,
        textColor=NAVY,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeKicker",
        fontName="Arial-Bold",
        fontSize=9.5,
        leading=12,
        textColor=TEAL,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSection",
        fontName="Arial-Bold",
        fontSize=12.3,
        leading=14,
        textColor=TEAL,
        spaceBefore=2,
        spaceAfter=5,
        keepWithNext=True,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeCompany",
        fontName="Arial-Bold",
        fontSize=9.3,
        leading=11.5,
        textColor=NAVY,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeRole",
        fontName="Arial-Bold",
        fontSize=8,
        leading=10,
        textColor=ORANGE,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeMeta",
        fontName="Arial",
        fontSize=7.8,
        leading=10,
        textColor=SLATE,
        alignment=TA_RIGHT,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeContact",
        fontName="Arial",
        fontSize=8,
        leading=10,
        textColor=SLATE,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSkillLabel",
        fontName="Arial-Bold",
        fontSize=8,
        leading=10.5,
        textColor=TEAL,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSkillValue",
        fontName="Arial",
        fontSize=8,
        leading=10.5,
        textColor=NAVY,
    )
)


def P(text, style="ResumeBody"):
    return Paragraph(text, styles[style])


def section_title(title):
    return Table(
        [[P(title.upper(), "ResumeSection")]],
        colWidths=[None],
        style=TableStyle(
            [
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
                ("LINEBELOW", (0, 0), (-1, -1), 1, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
            ]
        ),
    )


def bullets(items, compact=False):
    body_style = ParagraphStyle(
        name=f"BulletBody{int(compact)}",
        parent=styles["ResumeBody"],
        fontSize=7.9 if compact else 8.25,
        leading=10.4 if compact else 11,
        spaceAfter=1.5 if compact else 2,
    )
    return ListFlowable(
        [ListItem(Paragraph(item, body_style), leftIndent=10) for item in items],
        bulletType="bullet",
        start="circle",
        leftIndent=12,
        bulletFontName="Arial",
        bulletFontSize=5.5,
        bulletColor=TEAL,
        spaceAfter=4,
    )


def entry(company, location, role, dates, items, compact=False):
    header = Table(
        [
            [P(company, "ResumeCompany"), P(location, "ResumeMeta")],
            [P(role.upper(), "ResumeRole"), P(dates, "ResumeMeta")],
        ],
        colWidths=[116 * mm, 47 * mm],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        ),
    )
    return [KeepTogether([header, Spacer(1, 1.5 * mm)]), bullets(items, compact=compact)]


def skill_table(rows):
    table_rows = [[P(label, "ResumeSkillLabel"), P(value, "ResumeSkillValue")] for label, value in rows]
    table = Table(table_rows, colWidths=[43 * mm, 120 * mm], repeatRows=0)
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ("LINEBELOW", (0, 0), (-1, -2), 0.35, LINE),
            ]
        )
    )
    return table


def page_footer(canvas, doc):
    canvas.saveState()
    width, _ = A4
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(24 * mm, 15 * mm, width - 24 * mm, 15 * mm)
    canvas.setFont("Arial", 7)
    canvas.setFillColor(SLATE)
    canvas.drawString(24 * mm, 10.5 * mm, "DENIS IRINYAKOV | RESUME")
    canvas.drawRightString(width - 24 * mm, 10.5 * mm, str(doc.page))
    canvas.restoreState()


def build_pdf():
    doc = BaseDocTemplate(
        str(OUTPUT_PDF),
        pagesize=A4,
        leftMargin=24 * mm,
        rightMargin=24 * mm,
        topMargin=18 * mm,
        bottomMargin=20 * mm,
        title="Denis Irinyakov - Resume",
        author="Denis Irinyakov",
        subject="Data Engineer resume",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
    doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=page_footer)])

    story = []

    hero = Table(
        [
            [
                P("Denis Irinyakov", "ResumeName"),
                P("Russia", "ResumeMeta"),
            ],
            [P("MIDDLE DATA ENGINEER | DATA SCIENTIST", "ResumeKicker"), ""],
        ],
        colWidths=[126 * mm, 37 * mm],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
                ("SPAN", (1, 0), (1, 1)),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        ),
    )
    story.extend([hero, Spacer(1, 2 * mm)])
    story.append(
        P(
            "+7 (924) 236-02-83 &nbsp; | &nbsp; "
            "<link href='mailto:irinyakov2016@yandex.ru' color='#087F8C'>irinyakov2016@yandex.ru</link> &nbsp; | &nbsp; "
            "<link href='https://karnaksp.github.io/karnaksp' color='#087F8C'>karnaksp.github.io/karnaksp</link><br/>"
            "<link href='https://github.com/karnaksp' color='#087F8C'>github.com/karnaksp</link> &nbsp; | &nbsp; "
            "<link href='https://t.me/calmeds' color='#087F8C'>t.me/calmeds</link>",
            "ResumeContact",
        )
    )
    story.extend([Spacer(1, 3 * mm), section_title("Summary"), Spacer(1, 1.5 * mm)])
    story.extend(
        [
            P(
                "Data Engineer with experience in software development, data analysis, and machine learning. I work at the intersection of BI and ML: designing data marts and ETL/ELT pipelines, developing the data catalog, building engineering foundations for AI products, and ensuring data quality across the modern data stack.",
                "ResumeSummary",
            ),
            P(
                "My background in Data Science and academic research helps me apply AI tools, statistics, and a scientific approach effectively. My strengths are systematic data engineering, deep understanding of the business domain, routine process automation, documentation, and taking solutions through to production operations.",
                "ResumeSummary",
            ),
            P(
                "I actively participate in hackathons, meetups, and conferences focused on Data Engineering and Data Science and contribute proactively to professional communities. I continuously study new technologies to stay current with modern data solutions.",
                "ResumeSummary",
            ),
            Spacer(1, 1.5 * mm),
            section_title("Work Experience"),
            Spacer(1, 1.5 * mm),
        ]
    )
    story.extend(
        entry(
            "DDX Fitness",
            "Russia",
            "Data Engineer",
            "October 2025 - Present",
            [
                "Work at the intersection of BI and ML teams, developing data marts, pipelines, and the engineering data layer for analytics, models, and AI products.",
                "Orchestrate ETL/ELT processes: scheduled and incremental loads, data mart refreshes, integration of product and external sources, and schedule and SLA monitoring.",
                "Own data quality: completeness, duplicate, and discrepancy checks; monitoring key data marts; alerting; incident investigation; and prompt fixes.",
                "Develop the data catalog and metadata governance: table contracts, a semantic layer, tags, and metadata review, validation, and synchronization processes.",
                "Contribute to the AI trainer product by preparing a unified exercise dataset and enriching and normalizing data.",
                "Design data migrations and synchronization between analytical and product systems: idempotent loads, dry-run/apply/backfill, rollback/restore, and SQL result audits.",
                "Develop internal services and APIs for expert review and operational work with datasets.",
                "Build ingestion pipelines from APIs and file sources to the analytical layer: incremental processing, SCD2/merge, type contracts, normalization, and raw-data preparation.",
                "Support ML workflows through feature preparation, inference processes, data marts for models and analysts, and reproducible calculations.",
                "Create engineering documentation, runbooks, E2E and smoke scenarios, SQL checks, and merge-request processes, reducing team dependence on undocumented knowledge.",
            ],
        )
    )

    story.append(PageBreak())
    story.extend([section_title("Work Experience - Continued"), Spacer(1, 1.5 * mm)])
    story.extend(
        entry(
            "Axenix",
            "Saint Petersburg, Russia",
            "Data Engineer",
            "August 2024 - October 2025",
            [
                "Participated in Big Tech banking-sector projects within a Data Factory architecture.",
                "Worked in a distributed data ecosystem spanning dozens of domains and teams under high-load and scalability requirements.",
                "Developed and maintained the core Data Warehouse in a lakehouse architecture, ensuring consistency, quality, and availability of Greenplum data for analytics.",
                "Integrated heterogeneous sources: data lakes (S3, HDFS, Hive, Delta Lake), analytical platforms (ClickHouse), data platforms, and other systems.",
                "Built ETL/ELT data-transfer pipelines with a declarative approach to dynamic Airflow DAG generation using YAML and Python.",
                "Maintained and developed the existing Data Vault 2.0 architecture.",
                "Worked within long release cycles across environments from development to production and delivered hotfixes.",
                "Monitored data flows in Grafana and Prometheus, controlled quality and completeness, and resolved issues through DataFix procedures.",
                "Developed a modular system for dynamically generating DAG YAML configurations from Excel mappings, reducing setup time for new ETL processes by 40%.",
                "Created an automation toolkit: an Airflow log parser in PowerShell, synthetic-data generators and artifact and microservice tools in Python, plus a Bash command shell for Git workflows. This accelerated onboarding and reduced code-review defects.",
                "Integrated code review, peer review, and pre-push checks into the team's development process.",
                "Optimized an ETL-flow generator with colleagues from other teams by adding templating, asynchronous processing, and broader coverage of generated artifacts.",
                "Automated PL/pgSQL artifact preparation for data fixes, including consistency checks and expected results, reducing DataFix approval time by 80%.",
                "Created and maintained stored procedures, functions, and views in Greenplum.",
                "Organized a cross-domain Telegram developer community for sharing tools and best practices.",
            ],
            compact=True,
        )
    )
    story.extend(
        entry(
            "Spacecode",
            "Krasnodar, Russia | Remote",
            "Data Scientist",
            "April 2024 - August 2024",
            [
                "Developed a multimodal LLM assistant using RAG, LangChain, Unstructured, Hugging Face, and llama.cpp/vLLM, with ChromaDB for hot storage and S3 for cold storage.",
                "Built a dynamic pricing system with interpretable models; features were generated with PySpark from raw DWH and Data Lake layers.",
                "Orchestrated ETL/ML pipelines with Apache Airflow, integrating Spark jobs on a cluster and data-quality controls.",
                "Introduced DVC for dataset and model versioning, linking it to Spark artifacts and Airflow metadata.",
                "Set up a DVC and Git workflow for ML artifacts, reducing debugging and audit time by 70%.",
            ],
            compact=True,
        )
    )
    story.extend(
        entry(
            "DirectService",
            "Novosibirsk, Russia | Remote",
            "Data Analyst",
            "September 2023 - January 2025",
            [
                "Built an enterprise-level Data Warehouse from scratch at a scale of tens of terabytes, using PostgreSQL as the primary store and ClickHouse for analytics.",
                "Automated data mart refreshes with a comprehensive pipeline based on shell scripts and Windows Task Scheduler.",
                "Set up migration from ClickHouse to PostgreSQL, ensuring uninterrupted operation of analytical systems.",
                "Co-developed DWH monitoring and performance-optimization methods with systems analysts.",
                "Configured monitoring with PostgreSQL extensions and introduced CI/CD for verified code delivery using Flyway and GitHub Actions.",
            ],
            compact=True,
        )
    )
    story.extend(
        entry(
            "ColorDent LLC",
            "Moscow, Russia | Remote",
            "ML Engineer",
            "June 2023 - December 2023",
            [
                "Developed an ML classifier for dental images to diagnose diseases using OpenCV and TensorFlow Lite; the model achieved over 95% accuracy on test data.",
                "Integrated ML models into a mobile application, using MLflow for model version management and DVC for data versioning.",
                "Optimized the model for resource-constrained devices, enabling mobile use without a significant loss of quality.",
                "Developed a model-training metrics tracking system and introduced automated testing to ensure solution quality.",
            ],
            compact=True,
        )
    )

    story.append(PageBreak())
    story.extend([section_title("Main Education"), Spacer(1, 1.5 * mm)])
    story.extend(
        entry(
            "Federal Scientific Center of East Asia Terrestrial Biodiversity, FEB RAS",
            "Vladivostok, Russia",
            "Postgraduate Studies",
            "2019 - 2023",
            [
                "Specialization in ecology, with in-depth data analysis, statistics, and mathematical modeling of ecological processes.",
                "Worked with spatial data and time series for ecological analysis.",
                "Used R, statistical methods, and mathematical modeling.",
                "Published research papers in ecology and data analysis.",
            ],
        )
    )
    story.extend([Spacer(1, 1.5 * mm), section_title("Data Education"), Spacer(1, 1.5 * mm)])
    story.extend(
        entry(
            "School 21",
            "Novosibirsk, Russia",
            "Core Program",
            "2023 - 2025",
            [
                "C, Bash, Python, SQL, Go, Ruby, algorithms, and data structures.",
                "Immersion in programming languages and software-development methodologies.",
                "Peer-to-peer learning and project-based work.",
            ],
            compact=True,
        )
    )
    story.extend(
        entry(
            "Yandex Practicum",
            "Online",
            "Data Analyst",
            "February 2023 - 2024",
            [
                "Python libraries: pandas, SciPy, NumPy, matplotlib, scikit-learn, Plotly, and SQLAlchemy.",
                "SQL queries, data analysis, and machine learning.",
                "Statistical analysis and data visualization.",
            ],
            compact=True,
        )
    )
    story.extend(
        entry(
            "T1 Data Engineer School",
            "Online",
            "Data Engineer",
            "2024 - June 2024",
            [
                "T1 Data Engineer School with a graduation project.",
                "ETL/ELT processes, data architecture, and modern tools.",
                "Practical big-data processing projects in Greenplum.",
            ],
            compact=True,
        )
    )
    story.extend(
        entry(
            "Arenadata",
            "Online",
            "Arenadata Hadoop Administrator",
            "January 2025 - March 2025",
            [
                "Arenadata Hadoop operations: HDFS, ZooKeeper, Grafana, Spark, and Kafka.",
                "Monitoring Hadoop ecosystem services.",
                "Deploying clusters in the Hadoop ecosystem.",
            ],
            compact=True,
        )
    )
    story.extend([Spacer(1, 1.5 * mm), section_title("Specialized Training"), Spacer(1, 1.5 * mm)])
    story.extend(
        entry(
            "School 21",
            "Novosibirsk, Russia",
            "C/C++ Development",
            "2023 - 2024",
            [
                "Standard C libraries, data structures, algorithms, and memory management.",
                "Desktop applications in C++ and Qt.",
                "Projects included 3D Viewer, Calculator, Tetris, and others.",
            ],
            compact=True,
        )
    )
    story.extend(
        entry(
            "School 21",
            "Novosibirsk, Russia",
            "Python Development",
            "2024",
            [
                "Dockerfile, Makefile, Ansible, Neo4j, and Python.",
                "unittest, pytest, subprocess, Beautiful Soup, dotenv, SciPy, and Plotly.",
                "gRPC, SQLAlchemy, asyncio, FastAPI, and aiogram.",
            ],
            compact=True,
        )
    )
    story.extend(
        entry(
            "School 21",
            "Novosibirsk, Russia",
            "SQL and Databases",
            "January 2024 - February 2024",
            [
                "PL/pgSQL, functions, procedures, and window functions.",
                "Subqueries, CTEs, nested queries, and recursive queries.",
                "Database performance optimization.",
            ],
            compact=True,
        )
    )
    story.extend(
        entry(
            "School 21",
            "Novosibirsk, Russia",
            "DevOps and Infrastructure",
            "March 2024 - April 2024",
            [
                "Linux, virtual machines, Docker, CI/CD, and Bash.",
                "Prometheus, Grafana, Makefile, Docker, and Vagrantfile.",
                "Application containerization and orchestration, plus CI/CD setup.",
            ],
            compact=True,
        )
    )

    story.append(PageBreak())
    story.extend([section_title("Key Projects and Achievements"), Spacer(1, 1.5 * mm)])
    story.extend(
        entry(
            "School 21",
            "Novosibirsk, Russia",
            "Data Science Club Lead",
            "March 2023 - September 2024",
            [
                "Built a community of more than 60 people at School 21.",
                "Held peer-to-peer training sessions.",
                "Participated in hackathons together and developed the team's soft skills.",
                "Led teams at hackathons and coordinated project work.",
            ],
        )
    )
    story.extend(
        entry(
            "SmartSocialHack",
            "Moscow, Russia",
            "Hackathon Winner",
            "June 2024 - July 2024",
            [
                "Won first place in a track focused on socially significant problems.",
                "Used LLMs, PostgreSQL, and FastAPI to build the solution.",
                "Developed mobile and web applications as part of a team.",
                "Integrated PWA technologies into the solution.",
                "Built the project with a microservice architecture.",
            ],
        )
    )
    story.extend([Spacer(1, 2 * mm), section_title("Technical Skills"), Spacer(1, 1.5 * mm)])
    story.append(
        skill_table(
            [
                ("System Fundamentals", "Linux, WSL, grep, env, Makefile, cron, systemd, Git, SSH, rsync"),
                ("Programming Languages", "Python, SQL and PL/pgSQL, C, Go, Shell/Bash"),
                ("Favorite Tools", "ClickHouse, OpenMetadata, dbt, Airflow, PostgreSQL, Docker, GitLab"),
                ("Data Storage and Databases", "PostgreSQL, ClickHouse, Greenplum, MySQL, SQLite, Neo4j, ChromaDB, S3, Iceberg, Delta Lake, OpenMetadata"),
                ("Python Stack", "uv, pip, pandas, polars, SciPy, NumPy, matplotlib, scikit-learn, CatBoost, Plotly, SQLAlchemy, asyncio, FastAPI, Flask, Pydantic, pytest"),
                ("DevOps and Infrastructure", "Docker, Docker Compose, VirtualBox, CI/CD, GitHub Actions, GitLab Runner, Vagrant, Ansible, Consul, Prometheus, Grafana"),
                ("Data Pipelines", "Airflow, dlt, PeerDB, Kafka, Redis, Spark, Trino, Flink, dbt, FDW, pg_cron"),
                ("Data Architecture", "Data Lake, Lakehouse, DWH, Data Catalog, Metadata Management, Data Contracts, Semantic Layer, Data Vault 2.0, Anchor, Kimball, SCD 1/2/3"),
                ("Machine Learning", "Computer Vision, NLP, LLMs, time series, EDA, feature engineering, data cleaning and augmentation, data visualization"),
                ("AI Workflows and Integration", "RAG, vector databases, MCP, n8n, Copilot, Cursor, OpenRouter, Hugging Face, OpenAI, Ollama"),
            ]
        )
    )
    story.extend([Spacer(1, 4 * mm), section_title("Soft Skills and Business Skills"), Spacer(1, 1.5 * mm)])
    story.append(
        skill_table(
            [
                ("Leadership and Teamwork", "Teamwork, leadership, Kanban, Agile"),
                ("Problem Solving", "Critical thinking, data analysis, hypothesis development, A/B testing"),
                ("Adaptability", "Fast learning, continuous development, keeping up with technology trends"),
                ("Innovation", "Innovative thinking, AI tools, DevOps, modern database architecture practices"),
                ("Data Quality", "Data integrity, accuracy, and availability throughout the data lifecycle"),
                ("Security and Standards", "Information security and development standards"),
            ]
        )
    )

    doc.build(story)
    print(OUTPUT_PDF)


if __name__ == "__main__":
    build_pdf()
