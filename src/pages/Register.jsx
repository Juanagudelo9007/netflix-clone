import { useContext } from "react";
import { UserLogin } from "../context/LoginContext";

const Register = () => {
  const { handleForm, isRegistered, setIsRegistered, loading, errors } =
    useContext(UserLogin);

  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-[url('/netflix-bg.jpg')]">
      <div className="fixed inset-0 bg-black/60" />
      <h1 className="absolute top-2 left-5 text-4xl md:text-5xl font-bebas text-red-600">
        Netflix
      </h1>
      <img
        src="/public/netflix-logo.png"
        alt=""
        className=" absolute   top-2 right-2  h-12  md:w-14 md:h-14 "
      />
      <form
        action=""
        className="relative bg-black/80 flex flex-col items-center justify-center w-[300px] h-[350px]  gap-4"
        onSubmit={handleForm}
      >
        <h1 className="absolute top-10 left-15 font-extrabold tracking-wide capitalize">
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
          className="w-46 bg-red-600 py-0.5 font-extrabold tracking-wide cursor-pointer"
          type="submit"
        >
          {!isRegistered ? "sign up" : "Login"}
        </button>

        <button
          className="underline font-bold md:no-underline md:hover:underline cursor-pointer capitalize"
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
      {errors && <div className="text-2xl  text-red-600 z-2">{errors}</div>}
    </div>
  );
};

export default Register;
