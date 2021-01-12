const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street <br> Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav bar

const nav = document.querySelectorAll("nav a");
nav.forEach(
  (navItem, i) =>
    (navItem.textContent = siteContent["nav"][`nav-item-${i + 1}`])
);
nav.forEach((navItem) => (navItem.style.color = "green"));

const navBar = document.querySelector("nav");
const navFirst = document.createElement("a");
navFirst.href = "#";
navFirst.textContent = "FirstyFirst";
navBar.prepend(navFirst);

const navLast = document.createElement("a");
navLast.href = "#";
navLast.textContent = "LastyLast";
navBar.appendChild(navLast);
//Cta

const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = `DOM<br> Is<br> Awesome`;

const btn = ctaH1.nextElementSibling;
btn.textContent = "Get Started";

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

// Main Content

const topContent = document.querySelector(".top-content");
const topFirst = topContent.firstElementChild;
const topSecond = topFirst.nextElementSibling;
topFirst.firstElementChild.textContent =
  siteContent["main-content"]["features-h4"];
topSecond.firstElementChild.textContent =
  siteContent["main-content"]["about-h4"];
topFirst.lastElementChild.textContent =
  siteContent["main-content"]["features-content"];
topSecond.lastElementChild.textContent =
  siteContent["main-content"]["about-content"];

// Middle Content

const midImg = document.querySelector(".middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

// Bottom Content

const botContent = document.querySelectorAll(".bottom-content .text-content");
const botContent1 = botContent[0];
const botContent2 = botContent[1];
const botContent3 = botContent[2];

botContent1.firstElementChild.textContent =
  siteContent["main-content"]["services-h4"];
botContent1.lastElementChild.textContent =
  siteContent["main-content"]["services-content"];
botContent2.firstElementChild.textContent =
  siteContent["main-content"]["product-h4"];
botContent2.lastElementChild.textContent =
  siteContent["main-content"]["product-content"];
botContent3.firstElementChild.textContent =
  siteContent["main-content"]["vision-h4"];
botContent3.lastElementChild.textContent =
  siteContent["main-content"]["vision-content"];

// contact
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactPs = document.querySelectorAll(".contact p");
contactPs[0].innerHTML = siteContent["contact"]["address"];
contactPs[1].textContent = siteContent["contact"]["phone"];
contactPs[2].textContent = siteContent["contact"]["email"];

//footer
const footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];
