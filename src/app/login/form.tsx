"use client";
import styles from "./page.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email.trim() == "" || password.trim() == "") {
      toast.error("The ID or Password is incorrect");
    } else {
      router.push("/");
    }
  };

  return (
    <main className={styles.loginform}>
      <div>
        <FaRegUserCircle />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter user name"
        />
      </div>
      <div>
        <IoLockClosedOutline />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div>
        <button onClick={handleLogin}>Log in</button>
      </div>
      <div className={styles.links}>
        <a href="#">Find Password</a>
      </div>
      <div className={styles.links}>
        <a href="#">Registration</a>
      </div>
    </main>
  );
};

export default Form;
