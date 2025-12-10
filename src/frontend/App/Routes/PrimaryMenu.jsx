import { NavLink } from "react-router-dom";

// component
const PrimaryMenu = () => {
    return (
        <nav>
            <NavLink to="">Home</NavLink>
            <NavLink to="/staff">Staff</NavLink>
            <NavLink to="/connect">Connect</NavLink>
            <NavLink to="/course-work">Coursework</NavLink>
        </nav>
    );
};

export default PrimaryMenu;
