import "./globals.css";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";

export const metadata = {
  title: "Dashboard",
  description: "Admin Panel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <div style={{ display: "flex" }}>
          <SideNav />
          <main style={{ flex: 1, padding: "20px", marginLeft: "220px", marginTop: "60px" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
