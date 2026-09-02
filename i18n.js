(() => {
    const translations = {
        "CV Денис Ириняков": "CV Denis Irinyakov",
        "Обо мне": "About",
        "Опыт": "Experience",
        "Образование": "Education",
        "Контакты": "Contacts",
        "Фото": "Portrait",
        "Инженер данных с опытом в программной разработке, анализе данных и машинном обучении. Работаю на стыке BI и ML: проектирую и развиваю стек данных, ETL/ELT-пайплайны, data catalog, строю инженерные контуры для AI-продуктов и обеспечиваю качество данных. Сильные стороны: системная инженерия данных, глубокое погружение в бизнес-домен, автоматизация рутинных процессов, документация и доведение решений до production-эксплуатации.": "Data Engineer with experience in software development, data analysis, and machine learning. I work at the intersection of BI and ML: designing and developing the data stack and ETL/ELT pipelines, advancing the data catalog, building engineering foundations for AI products, and ensuring data quality. My strengths are systematic data engineering, deep understanding of the business domain, routine process automation, documentation, and taking solutions through to production operations.",
        "Контактный email:": "Contact email:",
        "Любимые инструменты": "Favorite tools",
        "Работаю с Greenplum для проектирования высоконагруженных аналитических систем. Разрабатываю оптимизированные схемы данных, высокопроизводительные хранимые процедуры и функции на PL/pgSQL. Применяю техники партиционирования, индексации и параллельной обработки. Использую методологии Anchor и Data Vault для создания масштабируемых и гибких баз данных.": "I use Greenplum to design high-load analytical systems. I develop optimized data schemas and high-performance stored procedures and functions in PL/pgSQL. I apply partitioning, indexing, and parallel processing techniques. I use Anchor and Data Vault methodologies to build scalable and flexible databases.",
        "Использую ClickHouse как аналитическую СУБД для витрин, быстрых ad-hoc запросов, мониторинга качества данных и подготовки слоев для BI/ML. Проектирую таблицы, инкрементальные загрузки, SQL-проверки и производительные пайплайны вокруг колоночного хранения.": "I use ClickHouse as an analytical DBMS for data marts, fast ad-hoc queries, data quality monitoring, and preparing layers for BI/ML. I design tables, incremental loads, SQL checks, and high-performance pipelines around columnar storage.",
        "Развиваю data catalog и metadata governance: табличные контракты, семантический слой, теги, FQN-реестры, проверки покрытия и процессы синхронизации метаданных. Использую каталог как инструмент прозрачности данных для BI, ML и продуктовых команд.": "I develop the data catalog and metadata governance: table contracts, a semantic layer, tags, FQN registries, coverage checks, and metadata synchronization processes. I use the catalog to make data transparent for BI, ML, and product teams.",
        "Использую dbt-подход для декларативного описания трансформаций, документирования моделей, проверки качества данных и воспроизводимой сборки аналитических слоев. Ценю dbt за прозрачный lineage, тесты и близость к инженерным практикам разработки.": "I use the dbt approach to describe transformations declaratively, document models, validate data quality, and build analytical layers reproducibly. I value dbt for transparent lineage, testing, and its alignment with software engineering practices.",
        "Использую Python для разработки и анализа данных: от высоконагруженных ETL-пайплайнов и масштабируемых веб-сервисов до продвинутых ML-моделей и интерактивных визуализаций. Создаю эффективный код с использованием asyncio, многопоточности и оптимизации узких мест. Разрабатываю модульные, тестируемые решения с применением современных фреймворков и библиотек (FastAPI, SQLAlchemy, Pandas, Scikit-learn, Plotly и т.д.). Автоматизирую бизнес-процессы через интеграционные решения, включая Telegram-ботов и системы с графическим интерфейсом на PyQt.": "I use Python for development and data analysis: from high-load ETL pipelines and scalable web services to advanced ML models and interactive visualizations. I write efficient code using asyncio, multithreading, and bottleneck optimization. I develop modular, testable solutions with modern frameworks and libraries such as FastAPI, SQLAlchemy, Pandas, Scikit-learn, and Plotly. I automate business processes through integrations, including Telegram bots and PyQt desktop applications.",
        "Написал множество скриптов на Bash и PowerShell для автоматизации процессов. Использую эти инструменты для управления файловой системой, git, управления процессами, создания резервных копий и мониторинга серверов. Работаю с cron и Windows Task Scheduler для планирования задач. Очень полезны, когда правила безопасности не допускают другого софта.": "I have written many Bash and PowerShell scripts for process automation. I use these tools for file system and Git operations, process management, backups, and server monitoring. I schedule tasks with cron and Windows Task Scheduler. They are especially useful when security policies do not allow other software.",
        "Применяю Docker для контейнеризации приложений. Постоянно пишу Dockerfile для разных проектов, используя многоэтапные сборки для минимизации размера образов, docker-compose для оркестрации контейнеров и CI/CD пайплайны с помощью GitHub Actions и GitLab Runner.": "I use Docker to containerize applications. I regularly write Dockerfiles for different projects, using multi-stage builds to minimize image size, Docker Compose for container orchestration, and CI/CD pipelines with GitHub Actions and GitLab Runner.",
        "Использовал Apache Kafka для обработки потоковых данных и влюбился в этого брокера. Kafka Streams для преобразования данных, разделение тем на партиции для повышения производительности.": "I have used Apache Kafka for streaming data processing and grew very fond of this broker. I use Kafka Streams for transformations and topic partitioning to improve performance.",
        "Работаю с Apache Airflow для создания надежных систем оркестрации данных. Разработал масштабируемый подход для автоматической генерации DAG'ов из декларативных YAML-конфигураций, что позволило сократить время разработки на 40% и минимизировать ошибки. Реализовал систему динамической генерации задач на основе метаданных, обеспечивающую адаптивность пайплайнов к изменениям в структуре данных.": "I use Apache Airflow to build reliable data orchestration systems. I developed a scalable approach for automatically generating DAGs from declarative YAML configurations, reducing development time by 40% and minimizing errors. I implemented metadata-driven dynamic task generation so pipelines can adapt to changes in data structure.",
        "Использую Selenium для автоматизации взаимодействия с веб-браузерами. Разрабатываю скрипты для парсинга данных с динамически генерируемых сайтов, тестирования пользовательских сценариев и автоматизации рутинных действий в браузере.": "I use Selenium to automate browser interactions. I develop scripts for scraping dynamically generated websites, testing user scenarios, and automating routine browser actions.",
        "Больше всего работаю с PostgreSQL для создания баз данных, оптимизации запросов и реализации сложных бизнес-логик через хранимые процедуры и триггеры.": "I work primarily with PostgreSQL to build databases, optimize queries, and implement complex business logic through stored procedures and triggers.",
        "Использую LLM и AI-агентов для автоматизации рабочих задач, генерации кода, анализа документов и ускорения разработки. Работаю с Claude от Anthropic, Codex, Cursor, Ollama, Hugging Face, n8n и MCP-серверами, собираю агентные сценарии под разработку, поиск решений и поддержку data-пайплайнов.": "I use LLMs and AI agents to automate work tasks, generate code, analyze documents, and accelerate development. I work with Anthropic Claude, Codex, Cursor, Ollama, Hugging Face, n8n, and MCP servers, building agent workflows for development, problem solving, and data pipeline support.",
        "Проектирование регулярных и инкрементальных загрузок, обновление витрин, интеграция продуктовых и внешних источников, контроль расписаний и SLA.": "Designing scheduled and incremental loads, refreshing data marts, integrating product and external sources, and monitoring schedules and SLAs.",
        "Стандартный SQL и процедурный SQL + Pl/pgSQL.": "Standard SQL and procedural SQL with PL/pgSQL.",
        "Написание .Dockerfile в микросервисной архитектуре, сборка через docker compose / Vagranfile, оркестрация в docker swarm, мониторинг на Prometheus. Настройка сетей на виртуальных машинах.": "Writing Dockerfiles for microservice architectures, builds with Docker Compose / Vagrantfile, orchestration with Docker Swarm, monitoring with Prometheus, and network configuration on virtual machines.",
        "Bash, PowerShell, cmd. Написание скриптов, crud, мониторинг unix-подобных систем.": "Bash, PowerShell, cmd. Scripting, CRUD operations, and monitoring Unix-like systems.",
        "Pep 8, sqlAlchemy, asyncio, unittest, pytest, fastapi, selemium, bs4, pandas, matplotlib, scikit-learn и т. д..": "PEP 8, SQLAlchemy, asyncio, unittest, pytest, FastAPI, Selenium, Beautiful Soup, pandas, matplotlib, scikit-learn, and more.",
        "В большей степени C, работа с памятью, написание библиотек, ускорение пайтон операций, написание расширений для postgresql, написание программ, совместимых с QT.": "Primarily C: memory management, library development, accelerating Python operations, writing PostgreSQL extensions, and developing Qt-compatible programs.",
        "С/C++": "C/C++",
        "Обучение ml моделей, подготовка данных, экстракция и трансформация признаков, генерация признаков, статистика.": "Training ML models, preparing data, extracting and transforming features, feature engineering, and statistics.",
        "Хранилище данных, озеро данных, lakehouse, data catalog, metadata management, data contracts, semantic layer, Data Vault, Anchor, Kimball, SCD.": "Data warehouse, data lake, lakehouse, data catalog, metadata management, data contracts, semantic layer, Data Vault, Anchor, Kimball, and SCD.",
        "Оркестрация": "Orchestration",
        "Прошел курс по Arenadata Hadoop и участвовал в развертывании кластера на проекте.": "Completed an Arenadata Hadoop course and participated in deploying a cluster on a project.",
        "Hadoop экосистема": "Hadoop ecosystem",
        "Отлично себя чувствую при работе в команде. Есть опыт с Kanban и Agile.": "I am comfortable working in a team and have experience with Kanban and Agile.",
        "Командная работа": "Teamwork",
        "Анализирую данные, выдвигаю гипотезы, проверяю на AB тестах и другой статистике: пармаметрической или неправметрической. Отслеживание качетсва данных. Прогнозирую возможные проблемы исходя из предыдущего опыта.": "I analyze data, form hypotheses, and validate them with A/B tests and other parametric or non-parametric statistical methods. I track data quality and anticipate potential problems based on previous experience.",
        "Критическое мышление": "Critical thinking",
        "Высокая обучаемость. Постоянно развиваюсь и изучаю новые технологии. Стараюсь быть в 'тренде' технологий.": "I learn quickly, continuously develop my skills, and study new technologies to stay current.",
        "Адаптивность": "Adaptability",
        "Часто беру на себя лидирующую роль при выполнении работы. Есть опыт с Kanban и Agile. Руковожу data science клубом на 60+ человек. Тимлидил команды на хакатонах.": "I often take a leadership role in project work. I have experience with Kanban and Agile, led a 60+ member data science club, and served as team lead at hackathons.",
        "Лидерство": "Leadership",
        "В меру коммуникабелен для выполнения рабочих задач. Меньше общаюсь с коллегами вне своего проекта.": "I communicate effectively for work tasks and interact less with colleagues outside my project.",
        "Коммуникабельность": "Communication",
        "Создание эффективных решений для обработки данных с использованием инновационных подходов и современных технологий. Использую AI-инструменты, DevOps интсрументы и современные подходы к архитектуре БД.": "Building effective data-processing solutions with innovative approaches and modern technology. I use AI tools, DevOps tools, and modern database architecture practices.",
        "Инновационное мышление": "Innovative thinking",
        "Глубокое понимание принципов работы различных систем управления базами данных и умение обеспечивать целостность, точность и доступность данных на всех этапах их жизненного цикла.": "A deep understanding of database management systems and the ability to ensure data integrity, accuracy, and availability throughout the data lifecycle.",
        "Качество данных": "Data quality",
        "Знание методов защиты информации, включая управление правами доступа, шифрование данных и защиту от SQL-инъекций, а также опыт реализации безопасных хранимых процедур и триггеров.": "Knowledge of information security methods, including access control, data encryption, and SQL injection protection, plus experience implementing secure stored procedures and triggers.",
        "Информационная безопасность": "Information security",
        "Придерживаюсь стандартов разработки. Есть знание PEP 8, ГОСТ 34, ISO 8000.": "I follow development standards and am familiar with PEP 8, GOST 34, and ISO 8000.",
        "Стандарты": "Standards",
        "Навыки создания подробной документации для проектов, включая описание архитектуры, процессов развертывания и мониторинга, что способствует легкому поддержанию и масштабированию системы.": "I create detailed project documentation covering architecture, deployment, and monitoring processes, making systems easier to maintain and scale.",
        "Документация": "Documentation",
        "Опыт работы": "Work experience",
        "Data Engineer в": "Data Engineer at",
        ", Россия (Октябрь 2025 – Настоящее время)": ", Russia (October 2025 - Present)",
        "Data engineering для BI, ML и AI-продуктов": "Data engineering for BI, ML, and AI products",
        "Работаю на стыке BI и ML-команд: развиваю витрины, пайплайны и инженерный слой данных для аналитики, моделей и AI-продуктов.": "I work at the intersection of BI and ML teams, developing data marts, pipelines, and the engineering data layer for analytics, models, and AI products.",
        "Оркестрирую ETL/ELT-процессы: регулярные и инкрементальные загрузки, обновление витрин, интеграцию продуктовых и внешних источников, контроль расписаний и SLA.": "I orchestrate ETL/ELT processes: scheduled and incremental loads, data mart refreshes, integration of product and external sources, and schedule and SLA monitoring.",
        "Отвечаю за качество данных: проверки полноты, дубликатов и расхождений, мониторинг ключевых витрин, алертинг, разбор инцидентов и оперативные исправления.": "I am responsible for data quality: completeness, duplicate, and discrepancy checks; monitoring key data marts; alerting; incident investigation; and prompt fixes.",
        "Развиваю data catalog и metadata governance: табличные контракты, семантический слой, теги, процессы ревью, валидации и синхронизации метаданных.": "I develop the data catalog and metadata governance: table contracts, a semantic layer, tags, and metadata review, validation, and synchronization processes.",
        "Участвую в продуктовой разработке: подготовка данных для бэкенда, обогащение и нормализация данных, сопоставление источников, витрины для аналитики новых продуктов.": "I contribute to product development by preparing backend data, enriching and normalizing data, matching sources, and building data marts for new-product analytics.",
        ", г. Санкт-Петербург (Август 2024 – Октябрь 2025)": ", Saint Petersburg (August 2024 - October 2025)",
        "Разработка ETL/ELT потоков в Airflow через YAML + JSON на фреймворке Python": "Developing Airflow ETL/ELT flows from YAML and JSON with a Python framework",
        "Разработал модульную систему динамической генерации DAG'ов на основе YAML-конфигураций, что позволило сократить время настройки новых ETL-процессов на 40%.": "Developed a modular system for dynamically generating DAGs from YAML configurations, reducing setup time for new ETL processes by 40%.",
        "Автоматизировал процесс тестирования качества данных с использованием Python, Bash и SQL, создав инструмент для детектирования аномалий и проверки целостности данных.": "Automated data quality testing with Python, Bash, and SQL by creating a tool for anomaly detection and data integrity checks.",
        "Преобразовал сложные маппинги бизнес-логики в эффективные ETL-потоки, улучшив производительность обработки данных на 30%.": "Converted complex business-logic mappings into efficient ETL flows, improving data-processing performance by 30%.",
        "Создал хранимые процедуры, функции, витрины и представления в Greenplum для поддержки операционных процессов в поддержке качества данных.": "Created stored procedures, functions, data marts, and views in Greenplum to support data-quality operations.",
        "Обеспечил интеграцию различных источников данных (ClickHouse, Oracle, Hive).": "Integrated multiple data sources, including ClickHouse, Oracle, and Hive.",
        "Поддерживал архитектуру Data Vault 2.0, внедрял версионное хранение данных для обеспечения возможности отката изменений.": "Maintained a Data Vault 2.0 architecture and implemented versioned data storage to support rollbacks.",
        "Осуществлял эффективную коммуникацию с представителями других команд.": "Collaborated effectively with other teams.",
        "Data Scientist в": "Data Scientist at",
        ", г. Краснодар (Апрель 2024 – Август 2024), удаленно": ", Krasnodar (April 2024 - August 2024), remote",
        "Разработка AI-решений для бизнеса": "Developing AI solutions for business",
        "Разработал многофункционального ассистента на базе LLM с использованием моделей HuggingFace, RAG-подхода, LangChain и Unstructured через LLAMA_CPP/VLLM. Ассистент успешно применялся для автоматизации клиентской поддержки и анализа документов.": "Developed a multifunctional LLM-based assistant using Hugging Face models, RAG, LangChain, and Unstructured through llama.cpp/vLLM. The assistant was used to automate customer support and document analysis.",
        "Создал систему динамического ценообразования с использованием интерпретируемых регрессионных моделей, что, по оценкам, позволит увеличить прибыль компании на 15%.": "Built a dynamic pricing system with interpretable regression models, estimated to increase company profit by 15%.",
        "Использовал Apache Airflow для разработки ETL-пайплайна, обеспечивающего актуальность данных для ML-моделей.": "Used Apache Airflow to develop an ETL pipeline that kept data current for ML models.",
        "Внедрил DVC для версионирования данных моделей, что значительно упростило их отслеживание и воспроизведение результатов.": "Introduced DVC for model data versioning, making it significantly easier to track data and reproduce results.",
        "Data Analyst в": "Data Analyst at",
        "АСК «ДиректСервис»": "DirectService",
        ", г. Новосибирск (Сентябрь 2023 – Январь 2025), удаленно": ", Novosibirsk (September 2023 - January 2025), remote",
        "Разработка и поддержка системы управления данными": "Developing and maintaining a data management system",
        "Реализовал с нуля enterprise-level Data Warehouse (DWH) на масштабах десятков терабайт данных, используя Greenplum и ClickHouse как основные хранилища.": "Built an enterprise-level Data Warehouse from scratch at a scale of tens of terabytes, using Greenplum and ClickHouse as the primary data stores.",
        "Автоматизировал процесс обновления витрин данных, создав комплексный пайплайн на основе Shell-скриптов и Windows Task Scheduler, что сократило время обработки данных с нескольких часов до 30 минут.": "Automated data mart refreshes with a comprehensive pipeline based on shell scripts and Windows Task Scheduler, reducing processing time from several hours to 30 minutes.",
        "Настроил механизм миграции данных из Greenplum/ClickHouse в PostgreSQL, обеспечив бесперебойную работу аналитических систем.": "Set up data migration from Greenplum/ClickHouse to PostgreSQL, ensuring uninterrupted operation of analytical systems.",
        "Совместно с системными аналитиками разработал методологии мониторинга и оптимизации производительности DWH, что позволило повысить скорость выполнения запросов на 50%.": "Co-developed DWH monitoring and performance-optimization methods with systems analysts, improving query execution speed by 50%.",
        "ML Engineer в ООО «ColorDent», г. Москва (Июнь 2023 – Декабрь 2023), удаленно": "ML Engineer at ColorDent LLC, Moscow (June 2023 - December 2023), remote",
        "Разработка ML-решений для стоматологической практики": "Developing ML solutions for dental practice",
        "Разработал ML-классификатор изображений зубов для диагностики заболеваний, используя OpenCV и TensorFlow Lite. Модель достигла точности более 95% на тестовых данных.": "Developed an ML classifier for dental images to diagnose diseases using OpenCV and TensorFlow Lite. The model achieved over 95% accuracy on test data.",
        "Интегрировал ML-модели в мобильное приложение с использованием MLflow для управления версиями моделей и DVC для версионирования данных.": "Integrated ML models into a mobile application, using MLflow for model version management and DVC for data versioning.",
        "Оптимизировал производительность модели для работы на устройствах с ограниченными ресурсами, что позволило использовать ее на мобильных платформах без значительной потери качества.": "Optimized model performance for resource-constrained devices, enabling its use on mobile platforms without a significant loss of quality.",
        "Разработал систему отслеживания метрик обучения моделей и внедрил автоматическое тестирование для обеспечения высокого качества решения.": "Developed a model-training metrics tracking system and introduced automated testing to ensure solution quality.",
        "Образование и полученные навыки": "Education and acquired skills",
        "Основное обучение в школе 21 от СБЕР. Изучение C, C++, Bash, Git, Docker, алгоритмов и структур данных.": "Core studies at School 21 by Sber: C, C++, Bash, Git, Docker, algorithms, and data structures.",
        "Проекты из Школы 21": "School 21 projects",
        "Основное обучение в школе 21.": "Core studies at School 21.",
        "Интенсив в школе 21. C, bash, git, Makefile, алгоритмы, структуры данных. Погружение в основы программирования и разработки.": "School 21 intensive: C, Bash, Git, Makefile, algorithms, and data structures. An immersion in programming and software-development fundamentals.",
        "Проекты интенсива Школы 21.": "School 21 intensive projects",
        "C/C++ проекты: написание стандартных библиотек на C, структуры данных, алгоритмы, работа с памятью, написание десктоп программ на C++ & QT: 3dViewer, Калькулятор, Тетрис и др..": "C/C++ projects: standard C libraries, data structures, algorithms, memory management, and desktop applications in C++ and Qt, including 3D Viewer, Calculator, Tetris, and others.",
        "string.h с дополнениями (C)": "Extended string.h (C)",
        "C++ & QT проекты (C++)": "C++ and Qt projects",
        "Контейнеры с дополнениями (C++)": "Extended containers (C++)",
        "C, С++, Qt...": "C, C++, Qt...",
        "Python интенсив.": "Python intensive",
        "pl/pgsql, функции, процедуры, оконные функции, подзапросы, cte, вложенные запросы, рекурсивные запросы.": "PL/pgSQL, functions, procedures, window functions, subqueries, CTEs, nested queries, and recursive queries.",
        "SQL интенсив.": "SQL intensive",
        "DevOps проекты.": "DevOps projects",
        "Начальное поружение в Go, структуры данных, алгоритмы.": "Introductory Go studies, data structures, and algorithms.",
        "Курс - аналитик данных от яндекс практикума. Python библиотеки: pandas, scipy, numpy, matplotlib, scikit-learn, plotly, sqlalchemy, sql запросы": "Yandex Practicum Data Analyst course. Python libraries: pandas, scipy, NumPy, matplotlib, scikit-learn, Plotly, SQLAlchemy; SQL queries.",
        "Аналитик данных": "Data Analyst",
        "Я.Практикум": "Yandex Practicum",
        "Школа дата инженера от холдинга T1 с выпускным проектом.": "T1 Data Engineer School with a graduation project.",
        "DE школа": "DE School",
        "Greenplum расширенный курс. Партиционирование, дистрибуция, хэш, встроенные функции.": "Advanced Greenplum course: partitioning, distribution, hashing, and built-in functions.",
        "Эксплуатация Arenadata Hadoop. HDFS, Zookiper, Grafana, Spark, Kafka и другие сервисы экосистемы. Разворачивание кластеров в экосистеме Hadoop.": "Arenadata Hadoop operations: HDFS, ZooKeeper, Grafana, Spark, Kafka, and other ecosystem services. Deploying clusters in the Hadoop ecosystem.",
        "Хакатон. Python, Jupiter, OOP, генерация фич, работа с энкодерами и векторным представлением, stellargraph, selenium.": "Hackathon: Python, Jupyter, OOP, feature engineering, encoders and vector representations, StellarGraph, and Selenium.",
        "Хакатон. Python, Jupiter, Machine learning, CatBoost, XGBoost, LGBM, Stacking, Blending.": "Hackathon: Python, Jupyter, machine learning, CatBoost, XGBoost, LightGBM, stacking, and blending.",
        "Хакатон. Python, Jupiter, генерация фич, анализ данных, визуализация.": "Hackathon: Python, Jupyter, feature engineering, data analysis, and visualization.",
        "Дата сайнс клуб. Формирвоание сообщества в стенах школы 21, проведение учебных занятий в стиле пир-ту-пир, совместное участие в хакатонах, развитие софт скиллов.": "Data Science Club: building a community at School 21, holding peer-to-peer training sessions, participating in hackathons together, and developing soft skills.",
        "Проекты дата сайнс клуба": "Data Science Club projects",
        "DS Club в Школе 21.": "DS Club at School 21",
        "Проект для стартапа по компьютерному зрению": "Computer vision startup project",
        "Нефтекод - хакатон по инфохимии. Deep Learning, Data preprocessing, OOP, командная работа, бустинги, torch, transformers, blending, stacking.": "Neftecode infochemistry hackathon: deep learning, data preprocessing, OOP, teamwork, boosting, PyTorch, Transformers, blending, and stacking.",
        "Нефтекод": "Neftecode",
        "Данный хакатон был посвящен социально значимым проблема и наш проект занял первое место в одном из кейсов. LLM, postgresql, fastapi, мобильныая разработка, web-разработка.": "This hackathon focused on socially significant problems, and our project won first place in one of the tracks. LLM, PostgreSQL, FastAPI, mobile development, and web development.",
        "Python, ноутбуки и классические библиотеки для работы с данными. Аизуализация данных, анализ различного рода данных, построение ml и dl моделей.": "Python notebooks and standard data libraries. Data visualization, analysis of various data types, and development of ML and deep-learning models.",
        "Соревнования на kaggle": "Kaggle competitions",
        "Pet-проект на python и selenium, который помог мне отправить множество откликов на hh.ru.": "A Python and Selenium pet project that helped me send many applications through hh.ru.",
        "HH.ru автоматизация отправки резюме": "HH.ru resume submission automation",
        "Selenium, nlp, автоматизация.": "Selenium, NLP, automation",
        "Telegram бот на aiogram с поддержкой асинхронности в обработке событий. Бот представляет собой игру-симуляцию обучения в школе 21. Затрагиваются принципы ООП. Оснащен документацией на GitHub Pages.": "An aiogram Telegram bot with asynchronous event handling. The bot is a simulation game about studying at School 21, applies OOP principles, and includes documentation on GitHub Pages.",
        "Pet-проект на python и telegram api, бот - секретарша, которая впускает людей в мой личный канал. Бот поддерживает LLM через ollama и способен общаться. Развернут на легком сервере для впна. Оснащен так же RAG системой, в которой есть база знаний обо мне. Все это обернуть в микросервисную архитектуру в Docker.": "A Python and Telegram API pet project: a secretary bot that admits people to my private channel. The bot supports an LLM through Ollama and can hold conversations. It is deployed on a lightweight VPN server and includes a RAG system with a knowledge base about me. The solution is packaged as a Docker microservice architecture.",
        "Кандидат наук в ФНЦ Биоразнообразия ДВО РАН. Специальность - экология. Глубокий анализ данных, статистика, математическое моделирование экологических процессов с использование пространственных и временных рядов.": "PhD-level research at the Federal Scientific Center of East Asia Terrestrial Biodiversity, Far Eastern Branch of the Russian Academy of Sciences. Specialization: ecology. In-depth data analysis, statistics, and mathematical modeling of ecological processes using spatial and time series.",
        "Список статей": "Publication list",
        "R, статистика, анализ данных.": "R, statistics, data analysis",
        "Выполняю работы в области инженерии и анализа данных. SQL, Python, R, SPSS, Statistica, Power BI, Excel и др.": "Data engineering and data analysis work using SQL, Python, R, SPSS, Statistica, Power BI, Excel, and other tools.",
        "Список заказов и отзывов": "Projects and reviews",
        "Анализ данных: SQL, Python, R, SPSS, Statistica, Power BI, MS Office": "Data analysis: SQL, Python, R, SPSS, Statistica, Power BI, MS Office",
        "Денис": "Denis",
        "© 2025 Денис Ириняков": "© 2025 Denis Irinyakov",
        "Выбор языка": "Language selector",
        "Скачать резюме в PDF": "Download resume as PDF",
        "Ссылка": "Link",
        "Оригинал": "Original",
        "Включить светлую тему": "Switch to light theme",
        "Включить темную тему": "Switch to dark theme",
        "Светлая тема": "Light theme",
        "Темная тема": "Dark theme",
        "Выбор концепции сайта": "Website concept selector",
        "Выбор темы сайта": "Website theme selector",
        "Наверх": "Back to top"
    };

    const translationEntries = Object.entries(translations);
    const translationMap = new Map(translationEntries);
    const reverseTranslations = new Map(translationEntries.map(([ru, en]) => [en, ru]));
    const textState = new WeakMap();
    const attributeState = new WeakMap();
    const translatableAttributes = ["alt", "title", "aria-label", "data-tooltip", "data-description", "data-links"];
    const storageKey = "karnaksp-site-language";
    let currentLanguage = "ru";

    function normalizeWhitespace(value) {
        return value.replace(/\s+/g, " ").trim();
    }

    function splitWhitespace(value) {
        const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
        return { before: match?.[1] || "", core: match?.[2] || "", after: match?.[3] || "" };
    }

    function resolveRussianKey(value) {
        const normalized = normalizeWhitespace(value);
        if (translationMap.has(normalized)) {
            return normalized;
        }
        return reverseTranslations.get(normalized) || normalized;
    }

    function getTranslation(russianText) {
        return translationMap.get(russianText) || russianText;
    }

    function translateTextNode(node, language) {
        if (!textState.has(node)) {
            const parts = splitWhitespace(node.nodeValue || "");
            textState.set(node, { ...parts, russian: resolveRussianKey(parts.core) });
        }

        const state = textState.get(node);
        const translated = language === "en" ? getTranslation(state.russian) : state.russian;
        const nextValue = `${state.before}${translated}${state.after}`;
        if (node.nodeValue !== nextValue) {
            node.nodeValue = nextValue;
        }
    }

    function translateLinksAttribute(value, language) {
        try {
            const links = JSON.parse(value);
            links.forEach((link) => {
                const russian = resolveRussianKey(link.title || "");
                link.title = language === "en" ? getTranslation(russian) : russian;
            });
            return JSON.stringify(links);
        } catch {
            return value;
        }
    }

    function translateElementAttributes(element, language) {
        if (!(element instanceof Element)) {
            return;
        }

        if (!attributeState.has(element)) {
            attributeState.set(element, new Map());
        }
        const states = attributeState.get(element);

        translatableAttributes.forEach((attribute) => {
            if (!element.hasAttribute(attribute)) {
                return;
            }

            if (!states.has(attribute)) {
                states.set(attribute, element.getAttribute(attribute) || "");
            }

            const source = states.get(attribute);
            let nextValue;
            if (attribute === "data-links") {
                nextValue = translateLinksAttribute(source, language);
            } else {
                const parts = splitWhitespace(source);
                const russian = resolveRussianKey(parts.core);
                const translated = language === "en" ? getTranslation(russian) : russian;
                nextValue = `${parts.before}${translated}${parts.after}`;
            }

            if (element.getAttribute(attribute) !== nextValue) {
                element.setAttribute(attribute, nextValue);
            }
        });
    }

    function translateTree(root, language) {
        if (root.nodeType === Node.TEXT_NODE) {
            translateTextNode(root, language);
            return;
        }
        if (!(root instanceof Element) && root !== document.body) {
            return;
        }

        if (root instanceof Element) {
            translateElementAttributes(root, language);
        }

        const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();
        while (node) {
            if (node.nodeType === Node.TEXT_NODE) {
                translateTextNode(node, language);
            } else {
                translateElementAttributes(node, language);
            }
            node = walker.nextNode();
        }
    }

    function updateUrl(language) {
        const params = new URLSearchParams(window.location.search);
        if (language === "en") {
            params.set("lang", "en");
        } else {
            params.delete("lang");
        }
        const query = params.toString();
        const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
        window.history.replaceState({}, "", nextUrl);
    }

    function updateControls(language) {
        document.querySelectorAll("[data-language]").forEach((button) => {
            const active = button.dataset.language === language;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        const pdfLink = document.querySelector("[data-pdf-download]");
        if (pdfLink) {
            const english = language === "en";
            pdfLink.href = english ? "Irinyakov_Denis_EN.pdf" : "Irinyakov_Denis.pdf";
            pdfLink.setAttribute("download", english ? "Irinyakov_Denis_EN.pdf" : "Irinyakov_Denis.pdf");
        }
    }

    function applyLanguage(language, { syncUrl = true } = {}) {
        currentLanguage = language === "en" ? "en" : "ru";
        document.documentElement.lang = currentLanguage === "en" ? "en" : "ru-RU";
        document.title = currentLanguage === "en" ? getTranslation("CV Денис Ириняков") : "CV Денис Ириняков";
        translateTree(document.body, currentLanguage);
        updateControls(currentLanguage);
        localStorage.setItem(storageKey, currentLanguage);
        if (syncUrl) {
            updateUrl(currentLanguage);
        }
        document.dispatchEvent(new CustomEvent("resume-language-change", { detail: { language: currentLanguage } }));
    }

    function t(russianText) {
        return currentLanguage === "en" ? getTranslation(russianText) : russianText;
    }

    window.resumeI18n = { applyLanguage, getLanguage: () => currentLanguage, t };

    document.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);
        const requestedLanguage = params.get("lang");
        const savedLanguage = localStorage.getItem(storageKey);
        const initialLanguage = requestedLanguage === "en" || requestedLanguage === "ru"
            ? requestedLanguage
            : savedLanguage === "en" ? "en" : "ru";

        document.querySelectorAll("[data-language]").forEach((button) => {
            button.addEventListener("click", () => applyLanguage(button.dataset.language));
        });

        applyLanguage(initialLanguage);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => translateTree(node, currentLanguage));
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
})();
