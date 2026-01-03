"use client";

import { motion } from "framer-motion";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import googleIcon from "@/public/google.svg";

export default function Home() {
  const { data: session } = useSession();

  if (session) redirect("/upload");

  return (
    <main className={styles.main}>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.welcome}
      >
        Hi! This is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={styles.h1}
      >
        CLOUDRIVE
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className={styles.card}
      >
        <p>Try it now by signing in with Google 👇</p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/upload" })}
          className={styles.button}
        >
          <Image src={googleIcon} width={22} height={22} alt="Google" />
          Login with Google
        </button>
      </motion.div>
    </main>
  );
}
