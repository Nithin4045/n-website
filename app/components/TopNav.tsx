"use client";

import styles from "./topnav.module.css";

export default function TopNav() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Admin Dashboard</h1>

      <div className={styles.right}>
        <input className={styles.search} placeholder="Search..." />

        <button className={styles.btn}>Profile</button>
        <button className={styles.btn}>Logout</button>
      </div>
    </header>
  );
}
