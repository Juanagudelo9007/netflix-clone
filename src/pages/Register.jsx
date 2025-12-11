import { useContext } from "react";
import { UserLogin } from "../context/LoginContext";
import { createPortal } from "react-dom";

const Register = () => {
  const {
    handleForm,
    isRegistered,
    setIsRegistered,
    loading,
    errors,
    closeErrors,
    setCloseErrors,
  } = useContext(UserLogin);

  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-[url('/netflix-bg.jpg')]">
      <div className="fixed inset-0 bg-black/60" />
      <h1 className="absolute top-2 left-5 text-4xl md:text-5xl font-bebas text-red-600">
        Netflix
      </h1>
      <img
        src="/netflix-logo.png"
        alt=""
        className=" absolute   top-2 right-2  h-12  md:w-14 md:h-14 "
      />
      <form
        action=""
        className="relative bg-black/80 flex flex-col items-center justify-center w-[300px] h-[350px]  gap-4"
        onSubmit={handleForm}
      >
        <h1 className="text-start font-extrabold tracking-wide capitalize">
          {!isRegistered ? "sign up" : "Login"}
        </h1>
        {!isRegistered && (
          <label htmlFor="name">
            <input
              type="name"
              placeholder="Name"
              id="name"
              name="name"
              className="p-1 outline-none bg-gray-300/20 placeholder-white/60 indent-2f indent-2"
            />
          </label>
        )}
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            className="p-1 outline-none bg-gray-300/20 placeholder-white/60 indent-2"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="p-1 outline-none bg-gray-300/20 placeholder-white/60 indent-2"
          />
        </label>
        <button
          className="w-36 bg-red-600 py-0.5 font-extrabold tracking-wide cursor-pointer active:scale-[0.7] transition-all duration-300 hover:bg-red-800"
          type="submit"
        >
          {!isRegistered ? "sign up" : "Login"}
        </button>

        <button
          className="underline font-bold md:no-underline md:hover:underline cursor-pointer capitalize "
          type="button"
          onClick={() => setIsRegistered(!isRegistered)}
        >
          {!isRegistered
            ? "already have an account?"
            : "don't have an account?"}
        </button>
      </form>

      {/* Loading overlay */}

      {loading && (
        <div className="flex flex-col gap-11 justify-center items-center fixed inset-0 bg-black">
          <div className="h-14 w-14 border-8 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <h1 className="text-xl font-bebas tracking-wider capitalize">
            Loading...
          </h1>
        </div>
      )}

      {/* Error Message */}
      {console.log(errors)}
      {errors &&
        !closeErrors &&
        createPortal(
          <div className="fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-xl">
            <div className="bg-white/15 w-72 h-52 flex flex-col justify-center items-center gap-4 p-2">
              <h1 className="text-lg font-bebas tracking-wider text-center text-white">
                {errors}
              </h1>
              <button
                className="bg-red-600 px-6 py-1 font-bebas tracking-wider rounded-sm active:scale-[0.7] transition-all duration-300 hover:bg-red-800"
                onClick={() => setCloseErrors(!closeErrors)}
              >
                ok
              </button>
            </div>
          </div>,
          document.getElementById("errors")
        )}
    </div>
  );
};

export default Register;
