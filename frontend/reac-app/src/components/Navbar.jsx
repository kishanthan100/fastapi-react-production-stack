import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/logoutService";

export default function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="bg-zinc-200 shadow px-6 py-4 flex justify-between items-center">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-merald-900 text-2xl focus:outline-none"
        >
          ☰
        </button>

        

      </div>

      {/* RIGHT SECTION */}
      <button
        onClick={handleLogout}
        className="bg-emerald-900 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition"
      >
        Logout
      </button>

    </header>
  );
}