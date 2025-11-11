"use client";

import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

interface DashboardStats {
  users: number;
  revenue: number;
  orders: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStats = async () => {
    try {
      const res = await fetch("/api/dashboard");
      const data = await res.json();
      setStats(data.stats);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  if (loading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Users</h2>
          <p>{stats?.users}</p>
        </div>

        <div className={styles.card}>
          <h2>Revenue</h2>
          <p>${stats?.revenue}</p>
        </div>

        <div className={styles.card}>
          <h2>Orders</h2>
          <p>{stats?.orders}</p>
        </div>
        <div>
          <h2>place order</h2>
        </div>
      </div>
    </div>
  );
}
