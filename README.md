🎥 React Netflix Clone

This project is a Netflix clone built with React.js, Tailwind CSS, Axios, Framer Motion, and Firebase for authentication and database. It includes pages for Login, Register, Home, Shows, and MyNetflix, where users can save their favorite shows and movies.

Features:

MyNetflix: A page where users can save their favorite shows and movies with just one click.

Carousels: Display upcoming, top-rated, and trending movies so users can see what’s trending.

Carousel Arrow Buttons

I added arrow buttons to the carousel using scrollBy, offsetWidth, and useRef to handle horizontal scrolling.
I chose this approach to learn how these properties work.
In my previous projects, I used an index and state to scroll through the cards, but this time the data is fetched from an API.

Tv Shows page added with its own hero section and key sections: Top Rated, Trending, Anime. To keep the code as modular and clean as possible, I use the useLocation hook from react-router-dom so that I can use the MovieSection component to display both Movies and Tv Shows. I changed the name of the url prop for movies, and I’m not using a custom hook because I want to use the same URL with just a couple of API calls. If I used a custom hook, I would have to make way too many API calls. I know this can be improved, I just don’t know how to implement it yet, but once I learn more I will fix it.

🧠 Main Goal:
The main goal of this project is to practice different concepts, like fetching data from an API and displaying it in multiple ways. I use both map and destructured objects to render data on the UI. I created a services folder to centralize all endpoints, making them easier to use across the app. Currently, all endpoints fetch specific data, so I’m not using a custom hook to display data. I know this could be improved, but this is my limit for now.
