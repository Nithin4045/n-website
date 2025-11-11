"use client";

import Link from "next/link";
import styles from "./sidenav.module.css";

export default function SideNav() {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.logo}>MyApp</h2>

            <nav className={styles.nav}>
                <Link href="/" className={styles.link}>Dashboard</Link>
                <Link href="/users" className={styles.link}>Users</Link>
                <Link href="/settings" className={styles.link}>Settings</Link>

            </nav>
        </aside>
    );
}
