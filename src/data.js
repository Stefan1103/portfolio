export const sidebarItems = [
  {
    id: 1,
    name: "Home",
    url: "#intro",
  },
  {
    id: 2,
    name: "About",
    url: "#about",
  },
  {
    id: 3,
    name: "Portfolio",
    url: "#portfolio",
  },
  {
    id: 4,
    name: "Projects",
    url: "#works",
  },

  {
    id: 5,
    name: "Contact",
    url: "#contact",
  },
];

export const portfolioListItems = [
  {
    id: 1,
    title: "Webb App",
  },
  {
    id: 2,
    title: "Mobile App",
  },
  {
    id: 3,
    title: "Design",
  },
];

export const webbAppPortfolio = [
  {
    id: 1,
    title: "EU-car-Rental",
    img: "assets/car_rental.png",
    webLink: "https://github.com/Stefan1103/eu-car-rentals",
  },

  {
    id: 2,
    title: "Flea market",
    img: "assets/Flea_market.jpg",
    webLink: "https://elastic-shirley-36b743.netlify.app/",
  },
  {
    id: 3,
    title: "Movies App",
    img: "assets/movies_roll_tape.png",
    webLink: "https://compassionate-brown-bb6b8a.netlify.app/",
  },
  {
    id: 4,
    title: "Portfolio",
    img: "assets/portfolio.jpg",
    webLink: "https://github.com/Stefan1103/portfolio",
  },

  {
    id: 5,
    title: "Quotes App",
    img: "assets/quotes_web_app.png",
    webLink: "https://github.com/Stefan1103/quotesfs-app",
  },
];
export const designPortfolio = [
  {
    id: 1,
    title: "EU-car-Rental",
    img: "assets/car_rental.png",
    webLink: "https://github.com/Stefan1103/eu-car-rentals",
  },

  {
    id: 2,
    title: "Flea market",
    img: "assets/Flea_market.jpg",
    webLink: "https://elastic-shirley-36b743.netlify.app/",
  },
  {
    id: 3,
    title: "Movies App",
    img: "assets/movies_roll_tape.png",
    webLink: "https://compassionate-brown-bb6b8a.netlify.app/",
  },
  {
    id: 4,
    title: "Portfolio",
    img: "assets/portfolio.jpg",
    webLink: "https://github.com/Stefan1103/portfolio",
  },
  {
    id: 5,
    title: "Quotes App",
    img: "assets/quotes_web_app.png",
    webLink: "https://github.com/Stefan1103/quotesfs-app",
  },
];

export const mobileAppPortfolio = [];

export const sliderProjects = [
  {
    id: 1,
    icon: "assets/globe.png",
    title: "EU-car-rental",
    shortDesc:
      "This is a website for a car rental service that showcases the landing page and contact page.",
    desc: "This website design showcases mainly features about a car rental service like booking,showing car models, navigation,faq section and contact page. Technologies used for this website are material UI icons, sass, hmtl, React and typescript.",
    techStack: [
      {
        id: 1,
        icon: "assets/icons8-html-96.png",
        alt: "html icon",
      },
      {
        id: 2,
        icon: "assets/icons8-sass-96.png",
        alt: "css icon",
      },
      {
        id: 3,
        icon: "assets/icons8-react-100.png",
        alt: "react icon",
      },
      {
        id: 4,
        icon: "assets/icons8-typescript-96.png",
        alt: "typescript icon",
      },
    ],
    img: "assets/car_rental.png",
    webLink: "https://main--steady-empanada-359a65.netlify.app/",
    gitLink: "https://github.com/Stefan1103/eu-car-rentals",
  },
  {
    id: 2,
    icon: "assets/globe.png",
    title: "Flea market",
    shortDesc:
      'This is a Web application for a retail online store/market. This app among others technologies is based on the MERN(Mongo,Express,React,Node) stack, and for the state menagment of the app is utilized a state manager: "Redux". ',
    desc: "This is a Web application for a retail online store/market. The app's Landing page showcases the stores featured items that are on a sale in a carousel, also you can see other items that are not on sale in the cards below. For navigation and selection for a specific item(s) from the store you can use either the search bar and search for the name of the desired item or you can see the items by categories from the drop down button. You can select items for buying by clicking the button with the cart+ icon or you can see details about the specific item by clicking the Learn more button which will take you to the details page for the selected item. By clicking the button for adding items to your cart you can see the number of items update in the right corner of the navbar. To access your cart you can simply click on the right corner of the navbar cart icon, it will take you to the items in your cart page. In this page you can see your items maniuplate with the cart how ever you want and when you are satisfied you can go to the checkout page. Here you also have an option if you are not satisfied with the selection to go back to the cart and double check your purchase. On the other hand if evrything looks good you can proceed to pay for the items. For this app thechnologies that are used are : the stack MERN(Mongo,Express,React,Node), Scss,HTML,Bootstrap. For the state managment of this app is used REDUX the state manager tool.",
    techStack: [
      {
        id: 1,
        icon: "assets/icons8-html-96.png",
        alt: "html icon",
      },
      {
        id: 2,
        icon: "assets/icons8-sass-96.png",
        alt: "css icon",
      },
      {
        id: 3,
        icon: "assets/icons8-mongodb-96.png",
        alt: "mongodb icon",
      },
      {
        id: 4,
        icon: "assets/icons8-react-100.png",
        alt: "react icon",
      },
      {
        id: 5,
        icon: "assets/icons8-nodejs-96.png",
        alt: "node icon",
      },
      {
        id: 6,
        icon: "assets/icons8-redux-96.png",
        alt: "redux icon",
      },
    ],
    img: "assets/Flea_market.jpg",
    webLink: "https://elastic-shirley-36b743.netlify.app/",
    gitLink: "https://github.com/Stefan1103/eCommerce-app",
  },
  {
    id: 3,
    icon: "assets/globe.png",
    title: "Movies App",
    shortDesc:
      "Web application that enables searching for all movies and inofrmation details about the movie, in order to achive this the app uses the open source OMDB API. Technologies that are used for this app are : React,Html,Scss.",
    desc: "Web application that enables searching for all movies. Also this app shows details and information about the movies, like ratings and cast for the movie, in order to achive this the app uses an open source API (OMDB-API). The technologies that are used to make this web app are: React, HTML, SCSS and Bootstrap. The app can be used by utilizing the search bar which searches for specific movie or movies by the name of the movie, example of a search: Batman.The webb app will provide the search results from the Api which are showcased by a carousel and cards, also you can navigate to the details for the selected movie and see the information from the OMDB Api about the movie and its details.",
    techStack: [
      {
        id: 1,
        icon: "assets/icons8-html-96.png",
        alt: "html icon",
      },
      {
        id: 2,
        icon: "assets/icons8-sass-96.png",
        alt: "css icon",
      },
      {
        id: 3,
        icon: "assets/icons8-bootstrap-96.png",
        alt: "bootstrap icon",
      },
      {
        id: 4,
        icon: "assets/icons8-react-100.png",
        alt: "react icon",
      },
    ],
    img: "assets/movies_roll_tape.png",
    webLink:
      "https://613c7cc0e06be00007fab640--compassionate-brown-bb6b8a.netlify.app/",
    gitLink: "https://github.com/Stefan1103/movies-app",
  },
  {
    id: 4,
    icon: "assets/globe.png",
    title: "Portfolio",
    shortDesc:
      "This website project is the actual portfolio site. This project Mainly uses React and its packages",
    desc: "This website project is the actual portfolio site. Technologies used are: React, Html and scss. And for the contact form is used emailJS. this project is hosted on netlify.",
    techStack: [
      {
        id: 1,
        icon: "assets/icons8-html-96.png",
        alt: "html icon",
      },
      {
        id: 2,
        icon: "assets/icons8-sass-96.png",
        alt: "css icon",
      },
      {
        id: 3,
        icon: "assets/icons8-react-100.png",
        alt: "react icon",
      },
    ],
    img: "assets/portfolio.jpg",
    gitLink: "https://github.com/Stefan1103/portfolio",
  },
  {
    id: 5,
    icon: "assets/globe.png",
    title: "Quotes App",
    shortDesc:
      "This is a full stack web app that gets quotes from open source api and after saving them to a custom database shows them on a screen with option to get random quotes aswell.",
    desc: "This is a full stack web app that gets quotes from open source api and shows them on a screen with option to get random quotes aswell. This app pulls the quotes from open source api, then saves it to mongoDB and then before displaying the quotes on the front-end, it's making another api call to the open source api agify and gets random ages for the authors of the quotes and then displays emoji depending on how old is the author. Technologies used is the MERN stack with typescript",
    techStack: [
      {
        id: 1,
        icon: "assets/icons8-html-96.png",
        alt: "html icon",
      },
      {
        id: 2,
        icon: "assets/icons8-sass-96.png",
        alt: "css icon",
      },
      {
        id: 3,
        icon: "assets/icons8-mongodb-96.png",
        alt: "mogodb icon",
      },
      {
        id: 4,
        icon: "assets/icons8-react-100.png",
        alt: "react icon",
      },
      {
        id: 5,
        icon: "assets/icons8-nodejs-96.png",
        alt: "node icon",
      },
    ],
    img: "assets/quotes_web_app.png",
    webLink: "https://master--polite-lebkuchen-7db1cc.netlify.app/",
    gitLink: "https://github.com/Stefan1103/quotesfs-app",
  },
];

export const underContst = "assets/under_construction.png";
