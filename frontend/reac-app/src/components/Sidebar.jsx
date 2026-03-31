import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItemClass = (path) =>
    `block px-4 py-2 rounded-md transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Dashboard
      </h2>

      <nav className="space-y-2">
        <Link to="/home" className={menuItemClass("/home")}>
          Home
        </Link>

        <Link to="/purchase" className={menuItemClass("/purchase")}>
          Purchase
        </Link>
      </nav>
    </aside>
  );
}