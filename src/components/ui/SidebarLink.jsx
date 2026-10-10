import { NavLink } from "react-router";

function SidebarLink({ to, name }) {
  return (
    <NavLink
      to={to}
      className="[&.active]:text-blue-600 [&.active]:bg-blue-600/10 hover:bg-blue-600/10 hover:text-blue-600 px-3 py-1.5 rounded-md"
    >
      {" "}
      {name}
    </NavLink>
  );
}

export { SidebarLink };
