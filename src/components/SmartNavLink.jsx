import { NavLink } from "react-router-dom";


const SmartNavLink = ({ path, title, target = "_self" }) => {
  return (
    <li>
      <NavLink to={path} target={target}>
        {title}
      </NavLink>
    </li>
  );
}

export default SmartNavLink;