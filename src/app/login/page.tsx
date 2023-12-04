import Link from "next/link";
import Form from "./form";
import styles from "./page.module.css";
import { Metadata } from "next";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Lottery App - Login",
  description: "Lottery App",
};

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div>
        <h1>Lottery</h1>
        <Form />
      </div>
      <div className={styles.linksPanel}>
        <div>
          <Link href="/">
            <IoIosHelpCircleOutline />
            <span>How To Pay</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <MdOutlineEmail />
            <span>Help</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <TbChecklist />
            <span>Policy</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
