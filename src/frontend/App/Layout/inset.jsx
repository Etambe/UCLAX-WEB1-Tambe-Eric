import styled from "styled-components";
import PropTypes from "prop-types";

// styles
const insetStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

// component
const inset = ({ children }) => {
    return <insetStyled>{children}</insetStyled>;
};

export default inset;

// prop-types
inset.propTypes = {
    prop: PropTypes.any,
};
