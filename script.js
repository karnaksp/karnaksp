
document.addEventListener("DOMContentLoaded", () => {
    // Инициализация всех компонентов
    initProgressBars();
    initChartBars();
    initScrollAnimations();
    initStickyHeader();
    initBackToTop();
    initSmoothScroll();
});

function initProgressBars() {
    const progressBars = document.querySelectorAll(".elementor-progress-bar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute("data-width");
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 200);

                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.2 });

    progressBars.forEach((bar) => {
        observer.observe(bar);

        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerText = bar.getAttribute("data-tooltip") || "";
        document.body.appendChild(tooltip);

        // Показываем тултип при наведении
        bar.addEventListener("mouseenter", (event) => {
            tooltip.style.display = "block";
            positionTooltip(tooltip, event);
            
            // Добавляем анимацию появления
            tooltip.style.opacity = "0";
            tooltip.style.transform = "translateY(10px)";
            setTimeout(() => {
                tooltip.style.opacity = "1";
                tooltip.style.transform = "translateY(0)";
            }, 10);
        });

        // Перемещаем тултип при движении мыши
        bar.addEventListener("mousemove", (event) => {
            positionTooltip(tooltip, event);
        });

        // Прячем тултип при уходе мыши
        bar.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
            tooltip.style.transform = "translateY(10px)";
            
            // Скрываем после завершения анимации
            setTimeout(() => {
                tooltip.style.display = "none";
            }, 200);
        });
    });
}

function initChartBars() {
    const chartBars = document.querySelectorAll(".chart-bar");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    chartBars.forEach((bar) => {
        const startYear = parseFloat(bar.getAttribute("data-start"));
        const endYear = parseFloat(bar.getAttribute("data-end"));

        // Рассчитываем ширину и позицию бара
        const containerWidth = document.querySelector(".gantt-container").offsetWidth;
        const yearRange = 2025 - 2022; // Диапазон лет
        const barWidth = ((endYear - startYear) / yearRange) * containerWidth;
        const offsetLeft = ((startYear - 2022) / yearRange) * containerWidth;

        // Устанавливаем стили
        bar.style.gridColumnStart = Math.ceil(offsetLeft / (containerWidth / 12)) + 1;
        bar.style.gridColumnEnd = Math.ceil((offsetLeft + barWidth) / (containerWidth / 12)) + 1;
        
        observer.observe(bar);

        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.style.display = "none";
        tooltip.style.transition = "opacity 0.2s ease, transform 0.2s ease";
        const description = bar.getAttribute("data-description") || "";
        const links = JSON.parse(bar.getAttribute("data-links") || "[]");

        // Генерируем HTML для описания и ссылок
        let tooltipContent = `<p>${description}</p>`;
        if (links.length > 0) {
            tooltipContent += "<ul>";
            links.forEach((linkObj) => {
                const title = linkObj.title || "Ссылка";
                const url = linkObj.url || "#";
                tooltipContent += `<li><a href="${url}" target="_blank">${title}</a></li>`;
            });
            tooltipContent += "</ul>";
        }

        // Добавляем содержимое в тултип
        tooltip.innerHTML = tooltipContent;
        document.body.appendChild(tooltip);

        // Показываем тултип при наведении
        bar.addEventListener("mouseenter", (event) => {
            if (!tooltip.isFixed) {
                tooltip.style.display = "block";
                positionTooltip(tooltip, event);
                
                // Добавляем анимацию появления
                tooltip.style.opacity = "0";
                tooltip.style.transform = "translateY(10px)";
                setTimeout(() => {
                    tooltip.style.opacity = "1";
                    tooltip.style.transform = "translateY(0)";
                }, 10);
            }
        });

        // Перемещаем тултип при движении мыши
        bar.addEventListener("mousemove", (event) => {
            if (!tooltip.isFixed) {
                positionTooltip(tooltip, event);
            }
        });

        // Скрываем тултип при уходе мыши
        bar.addEventListener("mouseleave", () => {
            if (!tooltip.isFixed) {
                tooltip.style.opacity = "0";
                tooltip.style.transform = "translateY(10px)";
                
                // Скрываем после завершения анимации
                setTimeout(() => {
                    tooltip.style.display = "none";
                }, 200);
            }
        });

        // Фиксируем тултип при клике
        bar.addEventListener("click", (event) => {
            event.preventDefault();
            tooltip.isFixed = true;
            tooltip.style.display = "block";
            positionTooltip(tooltip, event);
            tooltip.style.opacity = "1";
            tooltip.style.transform = "translateY(0)";
        });

        // Скрываем тултип при клике вне области
        document.addEventListener("click", (event) => {
            if (!tooltip.contains(event.target) && !bar.contains(event.target)) {
                tooltip.isFixed = false;
                tooltip.style.opacity = "0";
                tooltip.style.transform = "translateY(10px)";
                
                // Скрываем после завершения анимации
                setTimeout(() => {
                    tooltip.style.display = "none";
                }, 200);
            }
        });
    });
}

function initScrollAnimations() {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        observer.observe(section);
    });
}

function initStickyHeader() {
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

function initBackToTop() {
    // Создаем кнопку "Наверх"
    const backToTop = document.createElement("div");
    backToTop.className = "back-to-top";
    backToTop.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" transform="rotate(180, 8, 8)"></path></svg>';
    document.body.appendChild(backToTop);
    
    // Показываем/скрываем кнопку при скролле
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });
    
    // Прокручиваем страницу наверх при клике
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Учитываем высоту шапки
                    behavior: 'smooth'
                });
            }
        });
    });
}

function positionTooltip(tooltip, event) {
    const windowWidth = window.innerWidth;
    const tooltipWidth = tooltip.offsetWidth;
    
    // Проверяем, не выходит ли тултип за правый край экрана
    if (event.pageX + tooltipWidth + 20 > windowWidth) {
        tooltip.style.left = `${event.pageX - tooltipWidth - 10}px`;
    } else {
        tooltip.style.left = `${event.pageX + 15}px`;
    }
    
    tooltip.style.top = `${event.pageY + 15}px`;
}
