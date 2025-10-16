import styled from "styled-components";

//component
import SharedLogo from "@App/Core/components/Logo";

//styles
const LogoStyled = styled.div`
    width: 25%;
    margin: auto;
    padding: 20px 0;
`;

// component
const Logo = () => {
    return (
        <LogoStyled>
            <SharedLogo />
        </LogoStyled>
    );
};

export default Logo;
