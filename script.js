// script.js

// Translations for English and Farsi
const translations = {
    en: {
        "course-title": "Operating Systems Course",
        "nav-home": "Home",
        "nav-syllabus": "Syllabus",
        "nav-assignments": "Assignments",
        "nav-resources": "Resources",
        "nav-contact": "Contact",
        "nav-join": "Join Us",
        "home-title": "Welcome to the Operating Systems Course",
        "home-description": "This course covers fundamental concepts of operating systems, including process management, memory management, file systems, and more. Explore the syllabus, assignments, and resources to get started!",
        "syllabus-title": "Syllabus",
        "syllabus-list": "<li>Week 1: Introduction to Operating Systems</li><li>Week 2: Process Management</li><li>Week 3: Memory Management</li><li>... and so on</li>",
        "assignments-title": "Assignments",
        "assignments-description": "Here you will find all assignments and their due dates.",
        "assignments-list": "<li>Assignment 1: Process Scheduling - Due Date: 20th Sept</li><li>Assignment 2: Memory Allocation - Due Date: 27th Sept</li>",
        "resources-title": "Resources",
        "resources-description": "Useful resources and lecture notes will be provided here.",
        "contact-title": "Contact",
        "contact-description": "For any inquiries, please contact the course coordinator at ",
        "contact-email": "coordinator@aut.ac.nz",
    },
    fa: {
        "course-title": "دوره سیستم های عامل",
        "nav-home": "خانه",
        "nav-syllabus": "برنامه درسی",
        "nav-assignments": "تکالیف",
        "nav-resources": "منابع",
        "nav-contact": "تماس",
        "nav-join": "به ما بپیوندید",
        "home-title": "به دوره سیستم های عامل خوش آمدید",
        "home-description": "این دوره مفاهیم اساسی سیستم های عامل از جمله مدیریت فرایند، مدیریت حافظه، سیستم فایل ها و موارد دیگر را پوشش می دهد. برنامه درسی، تکالیف و منابع را برای شروع کاوش کنید!",
        "syllabus-title": "برنامه درسی",
        "syllabus-list": "<li>هفته ۱: مقدمه ای بر سیستم های عامل</li><li>هفته ۲: مدیریت فرایند</li><li>هفته ۳: مدیریت حافظه</li><li>... و ادامه دارد</li>",
        "assignments-title": "تکالیف",
        "assignments-description": "در اینجا می توانید همه تکالیف و تاریخ های سررسید آنها را پیدا کنید.",
        "assignments-list": "<li>تکلیف ۱: زمان بندی فرایند - تاریخ سررسید: ۲۰ سپتامبر</li><li>تکلیف ۲: تخصیص حافظه - تاریخ سررسید: ۲۷ سپتامبر</li>",
        "resources-title": "منابع",
        "resources-description": "منابع مفید و یادداشت های سخنرانی در اینجا ارائه می شود.",
        "contact-title": "تماس",
        "contact-description": "برای هر گونه سوال، لطفاً با هماهنگ کننده دوره تماس بگیرید: ",
        "contact-email": "coordinator@aut.ac.nz",
    },
};

// Function to switch languages
function switchLanguage(language) {
    const elements = document.querySelectorAll("[id]");
    elements.forEach((element) => {
        const key = element.id;
        if (translations[language][key]) {
            if (element.tagName === "UL") {
                element.innerHTML = translations[language][key];
            } else if (element.tagName === "A" && key === "contact-email") {
                element.innerHTML = translations[language][key];
                element.href = `mailto:${translations[language][key]}`;
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
}

// Event listener for language switcher
document.getElementById("language-switcher").addEventListener("change", (event) => {
    switchLanguage(event.target.value);
});

// Set default language
switchLanguage("en");
