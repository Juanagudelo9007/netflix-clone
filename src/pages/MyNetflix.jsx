import React, { useRef, useContext } from "react";
import { PersonalInfo } from "../context/UserInfo";
import { GrPrevious, GrNext } from "react-icons/gr";

const MyNetflix = () => {
  const { favorites, later } = useContext(PersonalInfo);
  const watchLaterRef = useRef(null);
  const favoritesRef = useRef(null);

  const scrollingX = (direction, section) => {
    const x =
      section === "later" ? watchLaterRef.current : favoritesRef.current;
    x.scrollBy({
      behavior: "smooth",
      left: direction === "left" ? -x.offsetWidth : x.offsetWidth,
    });
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-[150px] md:h-[250px]">
        <img
          src="/public/netflix-bg-option3.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div id="container" className="mt-6 group">
        <div
          id="watchLater"
          className="relative h-full overflow-x-auto scroll-smooth whitespace-nowrap group no-scrollbar w-full"
          ref={watchLaterRef}
        >
          <h1 className="capitalize tracking-wider font-bebas ml-1 text-lg md:text-xl">
            Watch Later
          </h1>
          {later.map((l) => (
            <div
              key={l.id}
              className="inline-block relative sm:w-[200px] md:w-60 lg:w-[280px] overflow-hidden m-1 cursor-pointer"
            >
              <button onClick={() => scrollingX("left", "later")}>
                <GrPrevious
                  className="absolute left-1 top-[85px] bg-black/80 backdrop-blur-sm block md:hidden group-hover:md:block cursor-pointer rounded-full p-2 z-20"
                  size={30}
                />
              </button>
              <img
                className="h-40 w-full block rounded-md cursor-pointer object-cover"
                src={`https://image.tmdb.org/t/p/w200${
                  l.backdrop_path || l.poster_path
                }`}
                alt=""
              />
              <button
                className="absolute right-1 top-[85px] bg-black/80 backdrop-blur-sm block md:hidden group-hover:md:block cursor-pointer rounded-full p-2 z-20"
                onClick={() => scrollingX("right", "later")}
              >
                <GrNext size={15} />
              </button>
              <h1 className="md:hidden absolute top-[80%] left-1 text-lg font-bebas tracking-wider text-white/80">
                {l.name} {l.title}
              </h1>
            </div>
          ))}
        </div>
        <div
          id="favorites"
          className="relative h-full overflow-x-auto scroll-smooth whitespace-nowrap group no-scrollbar w-full"
          ref={favoritesRef}
        >
          <h1 className="capitalize tracking-wider font-bebas ml-1 text-lg md:text-xl">
            favorites
          </h1>
          {favorites.map((t) => (
            <div
              key={t.id}
              className="inline-block relative sm:w-[200px] md:w-60 lg:w-[280px] overflow-hidden m-1 cursor-pointer"
            >
              <button onClick={() => scrollingX("left", "favorites")}>
                <GrPrevious
                  className="absolute left-1 top-[85px] bg-black/80 backdrop-blur-sm block md:hidden group-hover:md:block cursor-pointer rounded-full p-2 z-20"
                  size={30}
                />
              </button>
              <img
                className="h-40 w-full block rounded-md cursor-pointer object-cover"
                src={`https://image.tmdb.org/t/p/w200${
                  t.backdrop_path || t.poster_path
                }`}
                alt=""
              />
              <button
                className="absolute right-1 top-[85px] bg-black/80 backdrop-blur-sm block md:hidden group-hover:md:block cursor-pointer rounded-full p-2 z-20"
                onClick={() => scrollingX("right", "favorites")}
              >
                <GrNext size={15} />
              </button>
              <h1 className="md:hidden absolute top-[80%] left-1 text-lg font-bebas tracking-wider text-white/80">
                {t.name} {t.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyNetflix;
