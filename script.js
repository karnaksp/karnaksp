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

        // Рассчитываем ширину и позицию бара
        const containerWidth = document.querySelector(".gantt-container").offsetWidth;
        const yearRange = 2025 - 2005; // Примерный диапазон лет
        const barWidth = ((endYear - startYear) / yearRange) * containerWidth;
        const offsetLeft = ((startYear - 2005) / yearRange) * containerWidth;

        const bar = item.querySelector(".gantt-bar");
        bar.style.width = `${barWidth}px`;
        bar.style.left = `${offsetLeft}px`;

        // Добавляем тултип
        const description = `Годы: ${startYear}-${endYear}`;
        bar.setAttribute("data-tooltip", description);
    });
});