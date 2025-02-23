
```python
class DeveloperProfile:
    def __init__(self):
        self.role = "Middle Data Developer"
        self.email = "irinyakov2016@yandex.ru"
        self.name = "Denis"
        self.key_skills = {
            "languages": ["Python", "SQL", "PL/pgSQL", "Bash", "C/C++", "Go"],
            "data_tools": ["Greenplum", "PostgreSQL", "ClickHouse", "Apache Kafka", "Apache Airflow"],
            "development": ["ETL/ELT", "Docker", "Data Vault 2.0", "ML", "Data Analysis"],
            "data_science": ["Pandas", "NumPy", "Plotly", "Scikit-learn", "TensorFlow", "PyTorch"],
            "statistics": ["Hypothesis Testing", "Data Visualization", "Predictive Analytics"]
        }
        self.hobbies = ["Snowboarding", "Ecology & Biology Research", "Scientific Exploration"]

    def summary(self):
        return (f"{self.role} with expertise in {', '.join(self.key_skills['languages'])}, "
                f"working with {', '.join(self.key_skills['data_tools'])}, " 
                f"and skilled in {', '.join(self.key_skills['development'])}. "
                f"Proficient in Data Science tools such as {', '.join(self.key_skills['data_science'])}, "
                f"and experienced in statistical methods like {', '.join(self.key_skills['statistics'])}. "
                f"Soft skills include {', '.join(self.key_skills['soft_skills'])}. "
                f"In my free time, I enjoy {', '.join(self.hobbies)}.")

profile = DeveloperProfile()
print(profile.summary())

```

> ### [Резюме](https://karnaksp.github.io/karnaksp/ )
> *Подробно с ссылками на портфолио.*


Так же можно скачать резюме в .docx --> [Denis_Irinyakov_Res.docx](https://github.com/karnaksp/karnaksp/blob/main/Denis_Irinyakov_Res.docx)
