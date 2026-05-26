(() => {
    const concepts = [
        { id: "", label: "Оригинал", colors: ["#2a3b47", "#e8491d"] },
        { id: "signal", label: "Signal Desk", colors: ["#0f766e", "#ff6b4a"] },
        { id: "console", label: "Data Console", colors: ["#64d2ff", "#7ee787"] },
        { id: "folio", label: "Technical Folio", colors: ["#087f8c", "#c15b42"] },
    ];

    const params = new URLSearchParams(window.location.search);
    const requestedConcept = params.get("concept") || "";
    const requestedTheme = params.get("theme") || "";
    const previewRequested = params.get("preview") === "1" || params.has("concept");
    const themeStorageKey = "karnaksp-site-theme";
    const defaultConcept = "folio";

    function conceptExists(id) {
        return concepts.some((concept) => concept.id === id);
    }

    function applyConcept(id) {
        if (id && conceptExists(id)) {
            document.documentElement.dataset.concept = id;
        } else {
            delete document.documentElement.dataset.concept;
        }
    }

    function getDefaultTheme(conceptId) {
        if (conceptId === "console") {
            return "dark";
        }

        return "light";
    }

    function normalizeTheme(theme) {
        return theme === "dark" || theme === "light" ? theme : "";
    }

    function applyTheme(theme) {
        const normalizedTheme = normalizeTheme(theme) || "light";
        document.documentElement.dataset.theme = normalizedTheme;
        localStorage.setItem(themeStorageKey, normalizedTheme);
        return normalizedTheme;
    }

    function syncUrl(id, theme, includePreview = previewRequested) {
        const nextParams = new URLSearchParams(window.location.search);

        if (includePreview) {
            nextParams.set("preview", "1");
        } else {
            nextParams.delete("preview");
        }

        if (id) {
            nextParams.set("concept", id);
        } else {
            nextParams.delete("concept");
        }

        if (theme) {
            nextParams.set("theme", theme);
        } else {
            nextParams.delete("theme");
        }

        const query = nextParams.toString();
        const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
        window.history.replaceState({}, "", nextUrl);
    }

    function setActiveButton(container, id) {
        container.querySelectorAll(".concept-option").forEach((button) => {
            const isActive = button.dataset.concept === id;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
    }

    function setThemeButton(button, theme) {
        const isDark = theme === "dark";
        button.classList.toggle("is-dark", isDark);
        button.setAttribute("aria-label", isDark ? "Включить светлую тему" : "Включить темную тему");
        button.title = isDark ? "Светлая тема" : "Темная тема";
        button.innerHTML = `<i class="fas ${isDark ? "fa-sun" : "fa-moon"}" aria-hidden="true"></i>`;
    }

    function createThemeControls(activeConcept, activeTheme, includeConceptOptions) {
        const switcher = document.createElement("div");
        switcher.className = "concept-switcher";
        switcher.setAttribute("aria-label", includeConceptOptions ? "Выбор концепции сайта" : "Выбор темы сайта");

        if (includeConceptOptions) {
            concepts.forEach((concept) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "concept-option";
                button.dataset.concept = concept.id;
                button.title = concept.label;
                button.setAttribute("aria-label", concept.label);
                button.style.setProperty("--swatch-a", concept.colors[0]);
                button.style.setProperty("--swatch-b", concept.colors[1]);
                button.innerHTML = "<span></span>";

                button.addEventListener("click", () => {
                    applyConcept(concept.id);
                    syncUrl(concept.id, document.documentElement.dataset.theme, true);
                    setActiveButton(switcher, concept.id);
                });

                switcher.appendChild(button);
            });

            const divider = document.createElement("span");
            divider.className = "concept-divider";
            switcher.appendChild(divider);
        }

        const themeButton = document.createElement("button");
        themeButton.type = "button";
        themeButton.className = "theme-toggle";
        setThemeButton(themeButton, activeTheme);
        themeButton.addEventListener("click", () => {
            const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
            applyTheme(nextTheme);
            syncUrl(includeConceptOptions ? document.documentElement.dataset.concept || "" : "", nextTheme, includeConceptOptions);
            setThemeButton(themeButton, nextTheme);
        });
        switcher.appendChild(themeButton);

        document.body.appendChild(switcher);
        setActiveButton(switcher, activeConcept);
    }

    const activeConcept = requestedConcept && conceptExists(requestedConcept) ? requestedConcept : defaultConcept;
    const savedTheme = normalizeTheme(localStorage.getItem(themeStorageKey) || "");
    const activeTheme = normalizeTheme(requestedTheme) || savedTheme || getDefaultTheme(activeConcept);
    applyConcept(activeConcept);
    applyTheme(activeTheme);

    document.addEventListener("DOMContentLoaded", () => createThemeControls(activeConcept, activeTheme, previewRequested));
})();
