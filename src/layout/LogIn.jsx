import { useState, useEffect, useRef } from "react";
import {LoginForm, RegisterForm} from "../content/LoginForms.jsx";

export default function Login({ isOpen, closeModal }) {
  const [activeTab, setActiveTab] = useState("login");
  const modalRef = useRef();
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);
  if (!isOpen) return null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 ">
      <div ref={modalRef} className="bg-white w-96 rounded-lg shadow-lg p-5 mt-14">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="absolute text-xl hover:text-gray-500 transform translate-x-2 -translate-y-3"
          >
            ✕
          </button>
        </div>
        <div className="flex justify-evenly mb-4">
          <button
            onClick={() => setActiveTab("login")}
            className={`${
              activeTab === "login"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`${
              activeTab === "register"
                ? "border-b-2 border-black "
                : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>
        {activeTab === "login" ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </div>
    </div>
  );
}
