//component
import Meta from "@App/Core/components/Meta";
import Inset from "@App/Layout/Inset";
import Form from "./Form";

// component
const Connect = () => {
    return (
        <main>
            <Inset>
                <Meta pageTitle="Connect" />
                <h1>Connect</h1>
                <Form />
            </Inset>
        </main>
    );
};

export default Connect;
