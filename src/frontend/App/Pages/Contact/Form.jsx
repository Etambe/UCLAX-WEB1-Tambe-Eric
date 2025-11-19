import UniversalForm from "@App/Core/components/Form/UniversalForm";

// component
const Form = () => {
    const formData = [
        {
            id: "userName",
            type: "text",
            labelText: "Name",
            value: "",
        },
        {
            id: "userEmail",
            type: "text",
            labelTexT: "Email",
            value: "",
        },
        {
            id: "useName",
            type: "text",
            labelText: "Name",
            value: "",
        },
    ];

    return (
        <UniversalForm
            formData={formData}
            apiEndpoint="/sendmail"
            trackingId="contact"
        />
    );
};

export default Form;
