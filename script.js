document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".elementor-progress-bar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute("data-width");

                console.log(`Запускаем анимацию: ${targetWidth}`);
                
                // Устанавливаем ширину только при пересечении
                progressBar.style.width = targetWidth;

                observer.unobserve(progressBar); // Больше не следим за этим элементом
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach((bar) => {
        observer.observe(bar);

        // Создаём тултип
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerText = bar.getAttribute("data-tooltip") || "";
        document.body.appendChild(tooltip);

        // Показываем тултип при наведении
        bar.addEventListener("mouseenter", (event) => {
            tooltip.style.display = "block";
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        // Перемещаем тултип при движении мыши
        bar.addEventListener("mousemove", (event) => {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        // Прячем тултип при уходе мыши
        bar.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });

    const chartBars = document.querySelectorAll(".chart-bar");
    const colors = ["#35427a", "#6a4a8c", "#4a7a6c"]; // Массив цветов
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

        // Создаём тултип
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.style.display = "none";

        // Составляем текст тултипа и ссылку
        const description = bar.getAttribute("data-description") || "";
        // Получаем массив ссылок из атрибута data-links
        const links = JSON.parse(bar.getAttribute("data-links") || "[]");

        // Генерируем HTML для описания и ссылок
        let tooltipContent = `<p>${description}</p>`;
        if (links.length > 0) {
            tooltipContent += "<ul>";
            links.forEach((linkObj, index) => {
                const title = linkObj.title || `Ссылка ${index + 1}`;
                const url = linkObj.url || "#";

                // Создаем ASCII-ссылку в формате [название](ссылка)
                const asciiLink = `${title}`;

                tooltipContent += `<li><a href="${url}" target="_blank">${asciiLink}</a></li>`;
            });
            tooltipContent += "</ul>";
        }

        // Добавляем содержимое в тултип
        tooltip.innerHTML = tooltipContent;

        document.body.appendChild(tooltip);

        // Показываем тултип при наведении
        bar.addEventListener("mouseenter", (event) => {
            if (!tooltip.isFixed) { // Если тултип не зафиксирован
                tooltip.style.display = "block";
                tooltip.style.left = `${event.pageX + 10}px`;
                tooltip.style.top = `${event.pageY + 10}px`;
            }
        });

        // Перемещаем тултип при движении мыши
        bar.addEventListener("mousemove", (event) => {
            if (!tooltip.isFixed) { // Если тултип не зафиксирован
                tooltip.style.left = `${event.pageX + 10}px`;
                tooltip.style.top = `${event.pageY + 10}px`;
            }
        });

        // Скрываем тултип при уходе мыши
        bar.addEventListener("mouseleave", () => {
            if (!tooltip.isFixed) { // Если тултип не зафиксирован
                tooltip.style.display = "none";
            }
        });

        // Фиксируем тултип при клике
        bar.addEventListener("click", (event) => {
            event.preventDefault(); // Предотвращаем стандартное поведение
            tooltip.isFixed = true; // Отмечаем тултип как зафиксированный
            tooltip.style.display = "block"; // Показываем тултип
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        // Скрываем тултип при клике вне области
        document.addEventListener("click", (event) => {
            if (!tooltip.contains(event.target) && !bar.contains(event.target)) {
                tooltip.isFixed = false; // Снимаем фиксацию
                tooltip.style.display = "none"; // Скрываем тултип
            }
        });
    });
});
