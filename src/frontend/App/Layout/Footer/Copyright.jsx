import styled from "styled-components";

//styles
const CopyrightStyled = styled.div``;

// component
const Copyright = () => {
    const today = new Date().getFullYear();

    return (
        <CopyrightStyled>&copy; {today}. All Rights Reserved</CopyrightStyled>
    );
};

export default Copyright;
