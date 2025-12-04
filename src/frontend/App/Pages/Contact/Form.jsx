import UniversalForm from "@App/Core/components/Form/UniversalForm";

// component
const Form = () => {
    const formData = [
        {
            id: "userName",
            type: "text",
            labelText: "Name",
            value: "",
            rules: ["required"],
        },
        {
            id: "userEmail",
            type: "text",
            labelText: "Email",
            value: "",
            rules: ["required", "email"],
        },
        {
            id: "userMessage",
            type: "textarea",
            labelText: "Name",
            value: "",
            rules: ["required"],
        },
    ];

    return (
        <UniversalForm
            formInputs={formData}
            apiEndpoint="/sendmail"
            trackingId="contact"
            submitText="Send"
        />
    );
};

export default Form;
