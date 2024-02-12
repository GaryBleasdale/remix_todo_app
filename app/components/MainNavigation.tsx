import { NavLink } from "@remix-run/react";

export default function MainNavigation() {
  return (
    <nav className="flex justify-center gap-4 bg-cyan-400 p-6">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "hidden" : isActive ? "text-blue-900" : "text-black"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/notes"
        className={({ isActive, isPending }) =>
          isPending ? "hidden" : isActive ? "text-blue-900" : "text-black"
        }
      >
        Notes
      </NavLink>
    </nav>
  );
}
