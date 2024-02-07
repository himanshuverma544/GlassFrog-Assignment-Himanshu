import { NavLink } from "react-router-dom";


const SmartNavLink = ({ path, title }) => {
  return (
    <li>
      <NavLink to={path}>
        {title}
      </NavLink>
    </li>
  );
}

export default SmartNavLink;