
```python
class DeveloperProfile:
    def __init__(self):
        self.role = "Middle Data Developer"
        self.email = "irinyakov2016@yandex.ru"
        self.name = "Denis"
        self.key_skills = {
            "languages": ["Python", "R", "SQL", "PL/pgSQL", "Bash", "C/C++", "Go"],
            "big_data_tools": ["Greenplum", "Hadoop", "PostgreSQL", "ClickHouse"],
            "data_tools": ["Apache Kafka", "Apache Airflow", "Apache Spark", "Redis"],
            "devops_tools": ["VMBox", "Docker", "Nets", "Ansible", "Vagrant"],
            "ci/cd_tools": ["Jenkins", "GitHub Actions", "Gitlab Runner"],
            "development": ["ETL/ELT", "Data Vault 2.0", "ML", "Data Analysis", "Web Backend", 
                            "Desktop", "Microservices", "API"
                            ],
            "data_science": ["Pandas", "NumPy", "Plotly", "Scikit-learn", "TensorFlow", "PyTorch"],
            "statistics": ["Hypothesis Testing", "Data Visualization", "Forecasting", "Parametric/Non-Parametric"
                            "Discriminant Analysis", "Cluster Analysis", "Correlation Analysis", 
                            "Stochastic Processes", "Bootstrap Methods", "Time Series Analysis"
                            ]
        }
        self.hobbies = ["Snowboarding", "Ecology & Biology Research", "Scientific Exploration"]

    def summary(self):
        return (
            f"{self.role} with expertise in programming languages such as {', '.join(self.key_skills['languages'])}. "
            f"Experienced in working with big data tools like {', '.join(self.key_skills['big_data_tools'])}, "
            f"data processing tools including {', '.join(self.key_skills['data_tools'])}."
            f"Proficient in development areas such as {', '.join(self.key_skills['development'])}. "
            f"In my free time, I enjoy {', '.join(self.hobbies)}."
        )

```

> ### [Резюме](https://karnaksp.github.io/karnaksp/ )
> *Подробно со ссылками на портфолио.*


Так же можно скачать резюме в .docx --> [Denis_Irinyakov_Res](https://github.com/karnaksp/karnaksp/blob/main/Irinyakov_Denis.pdf)
