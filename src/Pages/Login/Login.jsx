import "./login.scss";
import toast, { Toaster } from "react-hot-toast";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { UserLogin } from "../../Stores/AuthStore";

const Login = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Succesfull Login", { duration: 1000 });
        dispatch(UserLogin(user));
        localStorage.setItem("user", JSON.stringify(user));
        setMail("");
        setPassword("");
        setTimeout(() => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Emilia Gates
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Sure! 8:30pm works great!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, { duration: 1000 });
      });
  };
  return (
    <div className="login">
      <Toaster />
      <form action="" className="form" onSubmit={loginHandler}>
        <div>
          Email{" "}
          <input
            type="mail"
            value={email}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </div>
        <div>
          Password{" "}
          <input
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
