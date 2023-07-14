// SIDEBAR

const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messageNotifications = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme");

// FONT
const fontSizes = document.querySelectorAll(".choose-size span");

// ROOT
var root = document.querySelector(":root");

const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// Remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

// ============================================ SIDEBAR ============================================

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector(
                "#notifications  .notifications-count"
            ).style.display = "none";
        }
    });
});

// ============================================ MESSAGES ============================================
// Searchs chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((user) => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = "flex";
        } else {
            user.style.display = "none";
        }
    });
};

// Search chat

messageSearch.addEventListener("keyup", searchMessage);

// Heiglight message when message box clicked
messageNotifications.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageNotifications.querySelector(".notifications-count").style.display =
        "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

// ============================================ THEME CUSTOMISATION ============================================

// Open Modal
const openThemeModel = () => {
    themeModel.style.display = "grid";
};
theme.addEventListener("click", openThemeModel);

// Close Modal

const closeThemeModel = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModel.style.display = "none";
    }
};
themeModel.addEventListener("click", closeThemeModel);

// ============================================ FONTS ============================================

// remove active class from span or font size selectors

const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        size.classList.remove("active");
    });
};
fontSizes.forEach((size) => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");

        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem");
            root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("--sticky-top-left", "-10rem");
            root.style.setProperty("--sticky-top-right", "-33rem");
        }
        //   CHANGE FONT SIZE OF ROOT HTML ELEMENT

        document.querySelector("html").style.fontSize = fontSize;
    });
});

// Remove active class from color
const removeActiveColor = () => {
    colorPalette.forEach((colorPicker) => {
        colorPicker.classList.remove("active");
    });
};

// Change Primary Color

colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        // Remove active class from color
        removeActiveColor();
        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 202;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 152;
        }
        color.classList.add("active");
        root.style.setProperty("--primary-color-hue", primaryHue);
    });
});

// Theme Background Values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

bg1.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    // add active class
    bg1.classList.add("active");
    // reove active class from others
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    window.location.reload;
});

bg2.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    // add active class
    bg2.classList.add("active");
    // reove active class from others
    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changeBg();
});

bg3.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    // add active class
    bg3.classList.add("active");
    // reove active class from others
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    changeBg();
});
