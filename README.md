🎥 React Netflix Clone

This project is a Netflix clone built with React.js, Tailwind CSS, Axios, Framer Motion, and Firebase for authentication and database. It includes pages for Login, Register, Home, Shows, and MyNetflix, where users can save their favorite shows and movies.

Features:

MyNetflix: A page where users can save their favorite shows and movies with just one click.

Carousels: Display upcoming, top-rated, and trending movies so users can see what’s trending.

Carousel Arrow Buttons

I added arrow buttons to the carousel using scrollBy, offsetWidth, and useRef to handle horizontal scrolling.
I chose this approach to learn how these properties work.
In my previous projects, I used an index and state to scroll through the cards, but this time the data is fetched from an API.

🧠 Main Goal:
The main goal of this project is to practice different concepts, like fetching data from an API and displaying it in multiple ways. I use both map and destructured objects to render data on the UI. I created a services folder to centralize all endpoints, making them easier to use across the app. Currently, all endpoints fetch specific data, so I’m not using a custom hook to display data. I know this could be improved, but this is my limit for now.
