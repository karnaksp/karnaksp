document.addEventListener("DOMContentLoaded", () => {

    const progressBars = document.querySelectorAll(".elementor-progress-bar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                progressBar.style.width = progressBar.getAttribute("data-width");
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach((bar) => {
        observer.observe(bar);
    });

    const ganttItems = document.querySelectorAll(".gantt-item");

    ganttItems.forEach((item) => {
        const startYear = parseInt(item.getAttribute("data-start"));
        const endYear = parseInt(item.getAttribute("data-end"));
        const title = item.getAttribute("data-title");
        const description = item.getAttribute("data-description");

        // Рассчитываем ширину полосы
        const containerWidth = document.querySelector(".gantt-chart").offsetWidth;
        const yearRange = 2025 - 2005; // Примерный диапазон лет
        const barWidth = ((endYear - startYear) / yearRange) * containerWidth;

        // Позиционируем полосу
        const bar = item.querySelector(".gantt-bar");
        const offsetLeft = ((startYear - 2005) / yearRange) * containerWidth;
        bar.style.width = `${barWidth}px`;
        bar.style.left = `${offsetLeft}px`;

        // Создаем tooltip
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerHTML = `
            <strong>${title} (${startYear}-${endYear})</strong><br>
            ${description}
        `;
        item.appendChild(tooltip);

        // Позиционируем tooltip
        item.addEventListener("mouseenter", () => {
            const rect = item.getBoundingClientRect();
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        });
    });
});