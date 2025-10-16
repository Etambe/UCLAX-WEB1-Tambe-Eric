import { Routes, Route } from "react-router-dom";

// page of components
import Home from "@App/pages/Home";
import Staff from "@App/pages/Staff";
import Contact from "@App/pages/Contact";
import CourseWork from "@App/pages/CourseWork";

// component
const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} index />
            <Route element={<Staff />} path="staff" />
            <Route element={<Contact />} path="contact" />
            <Route element={<CourseWork />} path="course-work" />
        </Routes>
    );
};

export default AppRoutes;
