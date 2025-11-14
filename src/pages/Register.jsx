import { useContext } from "react";
import { UserLogin } from "../context/LoginContext";
import { createPortal } from "react-dom";

const Register = () => {
  const { handleForm, isRegistered, setIsRegistered, loading } =
    useContext(UserLogin);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[url('/netflix-bg.jpg')]">
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
      {loading && (
        <div className="flex flex-col gap-11 justify-center items-center fixed inset-0 bg-black/80">
          <div className="h-12 w-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <h1 className="text-xl font-bebas tracking-wider">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Register;
