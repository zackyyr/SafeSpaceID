// app/dashboard/layout.js
import NavbarDashboard from "@/components/common/NavbarDashboard";

export const metadata = {
  title: "Dashboard – SafeSpaceID",
  description: "Halaman utama dashboard SafeSpaceID untuk pengguna terdaftar",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarDashboard />
      <main>{children}</main>
    </div>
  );
}
