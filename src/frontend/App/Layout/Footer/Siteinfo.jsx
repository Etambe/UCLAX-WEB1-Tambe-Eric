import styled from "styled-components";

//styles
const SiteinfoStyled = styled.div``;

// component
const Siteinfo = () => {
    const {
        VITE_APP_CONFIG_STUDENT_NAME,
        VITE_APP_CONFIG_TITLE,
        VITE_APP_CONFIG_TAGLINE,
        VITE_APP_CONFIG_LOCATION,
    } = import.meta.env;

    return (
        <SiteinfoStyled>
            {VITE_APP_CONFIG_STUDENT_NAME} ::
            {VITE_APP_CONFIG_TITLE} :: {VITE_APP_CONFIG_TAGLINE} ::
            {VITE_APP_CONFIG_LOCATION}
        </SiteinfoStyled>
    );
};

export default Siteinfo;
