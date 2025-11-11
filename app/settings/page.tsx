"use client";

import React, { useEffect, useState } from "react";

interface Settings {
  theme: string;
  notifications: boolean;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);

  const loadSettings = async () => {
    const res = await fetch("/api/settings");
    const data = await res.json();
    setSettings(data.settings);
  };

  useEffect(() => {
    loadSettings();
  }, []);

  return (
    <div>
      <h1>Settings</h1>

      {settings && (
        <div>
          <p>Theme: {settings.theme}</p>
          <p>Notifications: {settings.notifications ? "On" : "Off"}</p>
        </div>
      )}
    </div>
  );
}
