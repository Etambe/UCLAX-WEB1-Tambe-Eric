// components
import UniversalForm from "@App/Core/components/Form/UniversalForm";

// component
const PseudoLogin = () => {
    const formData = [
        {
            id: "userEmail",
            type: "text",
            labelText: "Email",
            value: "",
            rules: ["required", "email"],
        },
        {
            id: "password",
            type: "password",
            labelText: "Password",
            value: "",
            rules: ["required"],
        },
    ];

    return (
        <UniversalForm
            formInputs={formData}
            apiEndpoint="/pseudo-login"
            trackingId="pseudo-login"
            submitText="Login"
        />
    );
};

export default PseudoLogin;
