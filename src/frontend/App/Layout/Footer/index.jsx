import styled from "styled-components";

//components
import Logo from "./Logo";
import Siteinfo from "./Siteinfo";
import Copyright from "./Copyright";

//styles
const Footerstyled = styled.footer`
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.light};
`;

// component
const Footer = () => {
    return (
        <Footerstyled>
            <Logo />
            <Siteinfo />
            <Copyright />
        </Footerstyled>
    );
};

export default Footer;
