import { Routes, Route } from "react-router-dom";

// page components
import Home from "@App/Pages/Home";
import Staff from "@App/Pages/Staff";
import StaffMember from "@App/Pages/Staff/StaffMember";
import Connect from "@App/Pages/Connect";

// Course Work Routes
import CourseWork from "@App/Pages/Coursework";
import SunAndMoon from "@App/Pages/Coursework/SunAndMoon";
import Assignments from "@App/Pages/Coursework/Assignments";
import Responsive from "@App/Pages/Coursework/Responsive";
import FormInputState from "@App/Pages/Coursework/FormInputState";
import PseudoLogin from "@App/Pages/Coursework/PseudoLogin";

// component
const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} index />
            <Route path="/staff">
                <Route element={<Staff />} path="" />
                <Route element={<StaffMember />} path=":staffId" />
            </Route>
            <Route element={<Connect />} path="/connect" />
            <Route element={<CourseWork />} path="/course-work">
                <Route element={<Assignments />} path="" />
                <Route element={<SunAndMoon />} path="sun-and-moon" />
                <Route element={<Responsive />} path="responsive" />
                <Route element={<FormInputState />} path="form-input-state" />
                <Route element={<PseudoLogin />} path="pseudo-login" />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
