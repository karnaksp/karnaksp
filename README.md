# Denis Irinyakov | Data Engineer

Я строю production-oriented data systems: ETL/ELT-конвейеры, event streams, аналитические хранилища, проверки качества данных, metadata workflows и Python-сервисы вокруг data products.

> English note: this profile is primarily localized for Russian-speaking engineering teams; project names, stacks, commands, and documentation links are kept in their original form.

**Ссылки:** [CV / portfolio](https://karnaksp.github.io/karnaksp/) · [PDF resume](https://github.com/karnaksp/karnaksp/raw/main/Irinyakov_Denis.pdf) · [GitHub](https://github.com/karnaksp) · [Telegram](https://t.me/calmeds)

## Ключевые Data Engineering проекты

| Project | Stack | Почему это важно |
| --- | --- | --- |
| [investment-signals](https://github.com/karnaksp/investment-signals) | Python, Redpanda/Kafka, ClickHouse, Postgres, FastAPI, Dagster, Prometheus, Grafana | Production-конвейер рыночных аномалий: live ingestion, stream processing, хранение сигналов, observability, admin cockpit и документация. [Docs](https://karnaksp.github.io/investment-signals/) |
| [stock-prices](https://github.com/karnaksp/stock-prices) | Python, Telegram Bot, CLI, Docker, MkDocs, GitHub Actions | Production data product для анимированных рыночных видео по акциям, фьючерсам, FX, металлам и crypto data. [Docs](https://karnaksp.github.io/stock-prices/) |
| [data-forge](https://github.com/karnaksp/data-forge) | Kafka, Debezium, Spark, Trino, MinIO, ClickHouse, Airflow, Superset | Applied fork-to-case-study: retail CDC/lakehouse runbook, validation SQL, Kafka-проверки, аналитические SQL-примеры и явное описание моего вклада. |
| [dbt-af](https://github.com/karnaksp/dbt-af) | Python, dbt, Airflow, Docker Compose, GitHub Actions | Secondary open-source orchestration case: reliability fix, явный вклад в fork, воспроизводимый Airflow/dbt demo и CI smoke. |
| [Oil-code](https://github.com/karnaksp/Oil-code) | Python, Jupyter, data contracts, validation CI, deterministic batch scoring | DS-to-DE conversion case для предсказания свойств масел: raw data contract, stdlib data-quality gate, deterministic batch scoring artifact, GitHub Actions validation и monitoring reports. |
| [self-tg-approve](https://github.com/karnaksp/self-tg-approve) | Python, Telegram, Docker Compose, Ollama, LangChain, Neo4j | Вторичный AI automation проект: бот для approval flow в Telegram-канале, graph-backed memory и локальные LLM-компоненты. |

## Основной стек

- **Warehouses and storage:** Greenplum, ClickHouse, PostgreSQL, S3-compatible storage, Iceberg/Lakehouse concepts.
- **Pipelines and orchestration:** Airflow, dbt, Dagster, dlt, Spark, Kafka/Redpanda.
- **Data quality and governance:** data contracts, metadata catalog workflows, semantic layer, lineage, validation checks.
- **Engineering:** Python, SQL/PLpgSQL, Bash, Docker, GitHub Actions, GitLab Runner.
- **Applied ML / AI:** pandas, scikit-learn, PyTorch, LLM tooling, Ollama, LangChain, MCP.

## Рабочий фокус

- Проектировал и поддерживал ETL/ELT-потоки для аналитических систем и data products.
- Делал Python-сервисы для ingestion, validation, observability и операционных workflows.
- Работал с DWH/lakehouse-паттернами, автоматизацией data quality и metadata governance.
- Вёл и менторил технические сообщества и проектные команды.

## Обучение и архив

Старые DS/ML notebooks, хакатоны, задания School 21 и учебные forks специально вынесены в архив. [Educational-projects](https://github.com/karnaksp/Educational-projects) — индекс практики по School 21, SQL, Python, DevOps, Linux и monitoring. [Retail_Analytics_s21](https://github.com/karnaksp/Retail_Analytics_s21) — отдельный secondary SQL/warehouse lab: fork учебного retail analytics задания, оформленный как воспроизводимый PostgreSQL case study с data contract, Docker smoke, materialized views и явным описанием моего вклада. Если fork или notebook repo попадает в витрину, он помечен как lab/conversion case и содержит явный раздел с моим вкладом, а не маскируется под оригинальный production-проект.
