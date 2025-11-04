import { Outlet } from "react-router-dom";

// component
import Meta from "@App/Core/components/Meta";
import CourseWorkMenu from "@App/Routes/CourseWorkMenu";
import inset from "@App/Layout/inset";

// component
const CourseWork = () => {
    return (
        <main>
            <inset>
                <Meta pageTitle="CourseWork" />
                <CourseWorkMenu />
                <Outlet />
            </inset>
        </main>
    );
};

export default CourseWork;
