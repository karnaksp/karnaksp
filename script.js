
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
    const progressGroups = document.querySelectorAll(".competencies");

    function animateBar(progressBar) {
        if (progressBar.dataset.animated === "true") {
            return;
        }

        const targetWidth = progressBar.getAttribute("data-width");
        progressBar.dataset.animated = "true";

        setTimeout(() => {
            progressBar.style.width = targetWidth;
        }, 200);
    }

    const groupObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".elementor-progress-bar").forEach(animateBar);
                groupObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: "160px 0px", threshold: 0.05 });

    progressBars.forEach((bar) => {
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

    progressGroups.forEach((group) => {
        groupObserver.observe(group);
    });
}

function initChartBars() {
    const chartBars = Array.from(document.querySelectorAll(".chart-bar"));
    const timelineStart = 2022;
    const timelineEnd = Math.max(
        2025.35,
        ...chartBars.map((bar) => parseFloat(bar.getAttribute("data-end")) || timelineStart)
    );
    const totalColumns = Math.max(40, Math.ceil((timelineEnd - timelineStart) * 12));

    document.documentElement.style.setProperty("--gantt-columns", totalColumns);
    document.querySelectorAll(".chart-row-bars").forEach((row) => {
        row.style.setProperty("--gantt-columns", totalColumns);
    });
    
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

        const safeStart = Number.isFinite(startYear) ? startYear : timelineStart;
        const safeEnd = Number.isFinite(endYear) && endYear > safeStart
            ? endYear
            : safeStart + (1 / 12);
        const startRatio = (safeStart - timelineStart) / (timelineEnd - timelineStart);
        const endRatio = (safeEnd - timelineStart) / (timelineEnd - timelineStart);
        const startColumn = Math.max(1, Math.min(totalColumns, Math.floor(startRatio * totalColumns) + 1));
        const endColumn = Math.max(
            startColumn + 2,
            Math.min(totalColumns + 1, Math.ceil(endRatio * totalColumns) + 1)
        );

        bar.style.gridColumnStart = startColumn;
        bar.style.gridColumnEnd = endColumn;
        
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
