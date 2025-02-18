
```python
class DeveloperProfile:
    def __init__(self):
        self.role = "Middle Data Developer"
        self.email = "irinyakov2016@yandex.ru"
        self.name = "Denis"
        self.key_skills = {
            "programming_languages": ["Python", "SQL", "PL/pgSQL", "Bash", "Go"],
            "data_tools": ["Greenplum", "PostgreSQL", "ClickHouse", "Apache Kafka", "Apache Airflow"],
            "development": ["ETL/ELT", "Docker", "Data Vault 2.0", "ML", "Data Analysis"],
            "soft_skills": ["Team Communication", "Problem Solving"]
        }
    
    def summary(self):
        return f"{self.role} with expertise in {', '.join(self.key_skills['programming_languages'])}, " \
               f"working with {', '.join(self.key_skills['data_tools'])}, and skilled in {', '.join(self.key_skills['development'])}. " \
               f"Strong in {', '.join(self.key_skills['soft_skills'])}."

myProfile = DeveloperProfile()
print(myProfile.summary())
```

Расширенное резюме здесь -> https://karnaksp.github.io/karnaksp/ 
