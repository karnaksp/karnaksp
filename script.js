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

    const ganttItems = document.querySelectorAll(".gantt-item");
    const containerWidth = document.querySelector(".gantt-container").offsetWidth;
    const yearRange = 2025 - 2005;

    const colors = ["#35427a", "#ff5733", "#33ff57", "#5733ff", "#ffaa00"];

    ganttItems.forEach((item, index) => {
        const startYear = parseInt(item.getAttribute("data-start"));
        const endYear = parseInt(item.getAttribute("data-end"));
        const description = item.getAttribute("data-description");
        const link = item.getAttribute("data-link");

        // Вычисление ширины и позиции
        const barWidth = ((endYear - startYear) / yearRange) * containerWidth;
        const offsetLeft = ((startYear - 2005) / yearRange) * containerWidth;
        const bar = item.querySelector(".gantt-bar");

        bar.style.width = `${barWidth}px`;
        bar.style.left = `${offsetLeft}px`;

        // Размещаем элементы на разных уровнях
        item.style.top = `${index * 60}px`;

        // Добавляем цвет и тултип с описанием и ссылкой
        bar.style.backgroundColor = colors[index % colors.length];
        bar.setAttribute("data-tooltip", `${description}\n\n🔗 [GitHub](${link})`);
    });
});