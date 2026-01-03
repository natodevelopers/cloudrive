"use client";

import { motion } from "framer-motion";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import googleIcon from "@/public/google.svg";
import { redirect } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const { data: session } = useSession();

  if (session) redirect("/upload");

  return (
    <main className={styles.main}>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0, 0, 0, 0.8] }}
        className={styles.welcome}
      >
        Hi! This is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0, 0, 0, 0.8], delay: 0.5 }}
        className={styles.h1}
      >
        CLOUDRIVE
      </motion.h1>

      <div className={styles.contentWrapper}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          className={`border ${styles.content}`}
        >
          <p>
            Try it now by sign in with Google below, and you&apos;ll see the power
            of this ;)
          </p>

          <button
            onClick={() => signIn("google", { callbackUrl: "/upload" })}
            className={`button ${styles.buttonWithIcon}`}
          >
            <Image src={googleIcon} width={22} height={22} alt="Google" />
            Login with Google now!
          </button>
        </motion.div>
      </div>
    </main>
  );
}
