const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/*--------------------NAV---------------------*/

let navMenu = document.querySelectorAll('nav a')

const partners = document.createElement('a')
partners.textContent = 'Partners'
partners.href = '#'

const projects = document.createElement('a')
projects.textContent = 'Projects'
projects.href = '#'

const nav = document.querySelector('nav')
nav.appendChild(partners)

const navNew = document.querySelector('nav')
nav.prepend(projects)

const nav1 = navMenu[0]
const nav2 = navMenu[1]
const nav3 = navMenu[2]
const nav4 = navMenu[3]
const nav5 = navMenu[4]
const nav6 = navMenu[5]

nav1.textContent = siteContent['nav']['nav-item-1']
nav2.textContent = siteContent['nav']['nav-item-2']
nav3.textContent = siteContent['nav']['nav-item-3']
nav4.textContent = siteContent['nav']['nav-item-4']
nav5.textContent = siteContent['nav']['nav-item-5']
nav6.textContent = siteContent['nav']['nav-item-6']

let allNav = document.querySelectorAll ("a");
console.log(allNav);
for (let i = 0; i < allNav.length; i++) {
  allNav[i].style.color = "green"
}

const topSect = document.querySelector('.cta');
const topSectHeading = topSect.querySelector('.cta-text h1');
const topSectImage = topSect.querySelector('#cta-img');
const topSectButton = topSect.querySelector('button');

topSectHeading.textContent = siteContent['cta']['h1']
topSectButton.textContent = siteContent['cta']['button']
topSectImage.setAttribute('src', siteContent['cta']['img-src'])


/*--------------------middle content--------------------*/

const midSectImg = document.querySelector('#middle-img')
const midSect = document.querySelector('.main-content .top-content')

const midSectBot = document.querySelector('.main-content .bottom-content')
const midSectHeading1 = midSect.querySelector('.text-content:nth-of-type(1) h4')
const midSectHeading2 = midSect.querySelector('.text-content:nth-of-type(2) h4')
const midSectHeading3 = midSectBot.querySelector('.text-content:nth-of-type(1) h4')
const midSectHeading4 = midSectBot.querySelector('.text-content:nth-of-type(2) h4')
const midSectHeading5 = midSectBot.querySelector('.text-content:nth-of-type(3) h4')

midSectHeading1.textContent = siteContent['main-content']['features-h4']
midSectHeading2.textContent = siteContent['main-content']['about-h4']
midSectHeading3.textContent = siteContent['main-content']['services-h4']
midSectHeading4.textContent = siteContent['main-content']['product-h4']
midSectHeading5.textContent = siteContent['main-content']['vision-h4']

const midSectP1 = midSect.querySelector('.text-content:nth-of-type(1) p')
const midSectP2 = midSect.querySelector('.text-content:nth-of-type(2) p')
const midSectP3 = midSectBot.querySelector('.text-content:nth-of-type(1) p')
const midSectP4 = midSectBot.querySelector('.text-content:nth-of-type(2) p')
const midSectP5 = midSectBot.querySelector('.text-content:nth-of-type(3) p')

midSectP1.textContent = siteContent['main-content']['features-content']
midSectP2.textContent = siteContent['main-content']['about-content']
midSectP3.textContent = siteContent['main-content']['services-content']
midSectP4.textContent = siteContent['main-content']['product-content']
midSectP5.textContent = siteContent['main-content']['vision-content']

const midImg = midSectImg.setAttribute('src', siteContent['main-content']['middle-img-src'])