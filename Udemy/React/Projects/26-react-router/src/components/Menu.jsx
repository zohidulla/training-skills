import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>Home</NavLink>
      {/* <NavLink className={({ isActive }) => isActive ? 'activeLink' : 'link'} to="." end>Home</NavLink> */}
      {/* <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        to="."
        end
      >
        Home
      </NavLink> */}
      <NavLink to="courses">Courses</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  );
};

export default Menu;
