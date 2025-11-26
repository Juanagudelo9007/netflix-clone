import React, { useRef, useContext } from "react";
import { PersonalInfo } from "../context/UserInfo";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaMinus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const MyNetflix = () => {
  const { favorites, later, removeFav, removeWatchLater } =
    useContext(PersonalInfo);
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
      <div className="w-full h-[180px] md:h-[270px]">
        <img
          src="/public/netflix-bg-option3.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div id="container" className="mt-6">
        {later.length > 0 && (
          <div id="btns" className="relative group ">
            <button onClick={() => scrollingX("left", "later")}>
              <GrPrevious
                className="absolute left-1 top-28 bg-black/80 backdrop-blur-sm  cursor-pointer rounded-full p-2 z-20  hover:bg-black/50 transition-all duration-300"
                size={30}
              />
            </button>
            <button
              className="absolute right-2 top-28 bg-black/80 backdrop-blur-sm  cursor-pointer rounded-full p-2 z-20 hover:bg-black/50 transition-all duration-300 "
              onClick={() => scrollingX("right", "later")}
            >
              <GrNext size={15} />
            </button>
          </div>
        )}
        {later.length <= 0 ? (
          <h1 className="text-center font-bebas tex-lg tracking-wider">
            Nothing Added Yet...
          </h1>
        ) : (
          <div
            id="watchLater"
            className="relative h-full overflow-x-auto scroll-smooth whitespace-nowrap  no-scrollbar w-full"
            ref={watchLaterRef}
          >
            <h1 className="capitalize tracking-wider font-bebas ml-1 text-lg md:text-xl">
              Watch Later
            </h1>

            {later.map((l) => (
              <div
                key={l.id}
                className="inline-block relative sm:w-[200px] md:w-60 lg:w-[280px] overflow-hidden m-1 cursor-pointer group "
              >
                <button
                  className="absolute  top-1 right-2 cursor-pointer  md:hidden group-hover:md:block text-red-600 z-1"
                  onClick={() => removeWatchLater(l.id)}
                >
                  <FaMinus size={18} />
                </button>

                <img
                  className="h-40 w-full block rounded-md cursor-pointer object-cover"
                  src={`https://image.tmdb.org/t/p/w200${
                    l.backdrop_path || l.poster_path
                  }`}
                  alt=""
                />

                <h1 className="md:hidden absolute top-[80%] left-1 text-lg font-bebas tracking-wider text-white/90">
                  {l.name} {l.title}
                </h1>

                {/* Overlay */}
                <div className="flex absolute inset-0 bg-black/60 backdrop-blur-md items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 rounded-md">
                  <h1 className="font-bebas tracking-wider">
                    {l.name} {l.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        )}
        {favorites.length > 0 && (
          <div id="btns" className="relative">
            <button onClick={() => scrollingX("left", "favorites")}>
              <GrPrevious
                className="absolute  left-1 top-28 bg-black/80 backdrop-blur-sm  cursor-pointer rounded-full p-2 z-20   hover:bg-black/50 transition-all duration-300"
                size={30}
              />
            </button>
            <button
              className="absolute   right-2 top-28 bg-black/80 backdrop-blur-sm  cursor-pointer rounded-full p-2 z-20  hover:bg-black/50 transition-all duration-300"
              onClick={() => scrollingX("right", "favorites")}
            >
              <GrNext size={15} />
            </button>
          </div>
        )}
        {favorites.length <= 0 ? (
          <h1 className="text-center font-bebas tex-lg tracking-wider mt-24">
            No Favorites Added Yet...
          </h1>
        ) : (
          <div
            id="favorites"
            className="relative h-full overflow-x-auto scroll-smooth whitespace-nowrap  no-scrollbar w-full"
            ref={favoritesRef}
          >
            <h1 className="capitalize tracking-wider font-bebas ml-1 text-lg md:text-xl">
              favorites
            </h1>
            {favorites.map((t) => (
              <div
                key={t.id}
                className="inline-block relative sm:w-[200px] md:w-60 lg:w-[280px] overflow-hidden m-1 cursor-pointer group"
              >
                <button
                  className="absolute md:hidden top-1 right-2 group-hover:md:block text-red-600 cursor-pointer  z-1"
                  onClick={() => removeFav(t.id)}
                >
                  <MdFavorite size={18} />
                </button>
                <img
                  className="h-40 w-full block rounded-md cursor-pointer object-cover"
                  src={`https://image.tmdb.org/t/p/w200${
                    t.backdrop_path || t.poster_path
                  }`}
                  alt=""
                />

                <h1 className="md:hidden absolute top-[80%] left-1 text-lg font-bebas tracking-wider text-white/90">
                  {t.name} {t.title}
                </h1>
                {/* Overlay */}
                <div className="flex absolute inset-0 bg-black/60 backdrop-blur-md items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 rounded-md">
                  <h1 className="font-bebas tracking-wider">
                    {t.name} {t.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNetflix;
