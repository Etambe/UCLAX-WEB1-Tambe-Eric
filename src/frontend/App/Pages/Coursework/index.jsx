import { Outlet } from "react-router-dom";

// component
import Meta from "@App/Core/components/Meta";
import CourseWorkMenu from "@App/Routes/CourseWorkMenu";
import Inset from "@App/Layout/Inset";

// component
const CourseWork = () => {
    return (
        <main>
            <Inset>
                <Meta pageTitle="CourseWork" />
                <CourseWorkMenu />
                <Outlet />
            </Inset>
        </main>
    );
};

export default CourseWork;
