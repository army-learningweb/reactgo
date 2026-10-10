import { NavLink, useLocation } from "react-router"

export default function Header() {

  const location = useLocation();
  
  return (
    <header className="flex justify-between items-center px-10 bg-white shadow-sm rounded-md">
      <div className="text-2xl font-black tracking-tight">PAGES ROUTES</div>
      <nav>
        <ul className="flex gap-6 text-sm">
          <NavLink to="/pages" className={`py-5 ${location.pathname == '/pages' ? 'text-blue-600' : ''}`}>
            Home
          </NavLink>
          <NavLink to="about" className={`py-5 ${location.pathname == '/pages/about' ? 'text-blue-600' : ''}`}>
            About
          </NavLink>
          <NavLink to="contact" className={`py-5 ${location.pathname == '/pages/contact' ? 'text-blue-600' : ''}`}>
            Contact
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
