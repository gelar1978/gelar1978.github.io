document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'id';
    const langToggleBtn = document.getElementById('langToggle');
    
    function setLanguage(lang) {
        if (!siteData || !siteData[lang]) return;
        
        const dictionary = siteData[lang];
        
        // Find all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary[key]) {
                el.textContent = dictionary[key];
            }
        });
        
        document.documentElement.lang = lang;
        langToggleBtn.textContent = lang === 'id' ? 'ID / EN' : 'EN / ID';
    }
    
    // Toggle language button click event
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        setLanguage(currentLang);
    });
    
    // Initial setup
    setLanguage(currentLang);

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
