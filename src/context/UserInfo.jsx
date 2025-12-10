import { useContext, useState, useEffect, createContext } from "react";
import { db } from "../firebase/firebase";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { UserLogin } from "./LoginContext";

export const PersonalInfo = createContext();

const UserInfo = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [later, setLater] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [favAdded, setFavAdded] = useState(false);
  const [watchAdded, setWatchAdded] = useState(false);

  const { user } = useContext(UserLogin);

  {
    /* Loading liked Movies (PERSISTENCE) */
  }

  useEffect(() => {
    if (!user) return;

    const loadMovies = async () => {
      const favRef = doc(db, "Favorites", user.uid);
      const favSnap = await getDoc(favRef);
      if (favSnap.exists()) {
        setFavorites(favSnap.data().likedMovies || []);
      } else {
        setFavorites([]);
      }
      setLoaded(true);
    };
    loadMovies();
  }, [user]);

  {
    /* Liked Movies */
  }
  useEffect(() => {
    if (!user || !loaded) return;

    const likeMov = async () => {
      try {
        await setDoc(doc(db, "Favorites", user.uid), {
          likedMovies: favorites,
        });
      } catch (error) {
        console.log("Error while saving Movies", error);
      }
    };
    likeMov();
  }, [user, favorites, loaded]);

  {
    /* Message added  */
  }

  const addMovies = (movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
    console.log("Movie added:", favorites);
  };

  const removeFav = (id) => {
    setFavorites(favorites.filter((t) => t.id !== id));
  };

  {
    /*  Watch Later */
  }

  useEffect(() => {
    if (!user || !loaded) return;
    const addLater = async () => {
      try {
        await setDoc(doc(db, "watchLater", user.uid), {
          saved: later,
        });
      } catch (error) {
        console.log("Error while saving watch later section", error);
      }
    };

    addLater();
  }, [user, loaded, later]);

  {
    /* Loading Watch later Section */
  }

  useEffect(() => {
    if (!user) return;
    const loadingWatchLater = async () => {
      const docLater = doc(db, "watchLater", user.uid);
      const laterSnap = await getDoc(docLater);
      if (laterSnap.exists()) {
        setLater(laterSnap.data().saved || []);
      } else {
        setLater([]);
      }
      setLoaded(true);
    };

    loadingWatchLater();
  }, [user]);

  const addWatchLater = (movie) => {
    if (!later.find((w) => w.id === movie.id)) {
      setLater([...later, movie]);
    }
  };

  const removeWatchLater = (id) => {
    setLater(later.filter((f) => f.id !== id));
  };

  {
    /* Overlay message added to...  */
  }
  const messageAdded = (type) => {
    if (type === "favorites") {
      setFavAdded(true);
    } else if (type === "watchLater") {
      setWatchAdded(true);
    }

    setTimeout(() => {
      setFavAdded(false);
      setWatchAdded(false);
    }, 10000);
  };

  return (
    <PersonalInfo.Provider
      value={{
        favorites,
        setFavorites,
        addMovies,
        addWatchLater,
        later,
        setLater,
        removeFav,
        removeWatchLater,
        toggle,
        setToggle,
        messageAdded,
        favAdded,
        watchAdded,
      }}
    >
      {children}
    </PersonalInfo.Provider>
  );
};

export default UserInfo;
