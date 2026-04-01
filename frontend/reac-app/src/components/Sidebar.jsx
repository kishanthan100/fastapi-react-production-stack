import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItemClass = (path) =>
    `block px-4 py-2 rounded-md transition ${
      location.pathname === path
        ? "bg-emerald-900 text-white"
        : "text-black hover:bg-emerald-700 hover:text-white"
    }`;

  return (
    <aside className="w-64 bg-zinc-200 text-emerald-800 flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Ekai
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