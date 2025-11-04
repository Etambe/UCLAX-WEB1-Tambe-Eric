import styled from "styled-components";
import PropTypes from "prop-types";

// styles
const InsetStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

// component
const Inset = ({ children }) => {
    return <InsetStyled>{children}</InsetStyled>;
};

export default Inset;

// prop-types
Inset.propTypes = {
    children: PropTypes.any,
};
