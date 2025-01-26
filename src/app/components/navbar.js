// import Link from "next/link";
import NavLink from "./navLink";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-950 text-white">
      <NavLink />
    </nav>
  );
}