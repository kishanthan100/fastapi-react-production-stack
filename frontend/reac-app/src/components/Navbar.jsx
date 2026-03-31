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
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-gray-700 text-2xl focus:outline-none"
        >
          ☰
        </button>

        <h1 className="text-xl font-semibold text-gray-800">
          Sales Dashboard
        </h1>

      </div>

      {/* RIGHT SECTION */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>

    </header>
  );
}