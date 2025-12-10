import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

//styles
const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;

//component
import Meta from "@App/Core/components/Meta";
import Inset from "@App/Layout/Inset";
import Slideshow from "./Slideshow";
import Tabbed from "./Tabbed";

const Home = () => {
    return (
        <HomeStyled>
            <Meta />
            <Slideshow />

            <main>
                <Inset>
                    <h1>Home</h1>
                    <Tabbed />

                    {/* VIDEO SECTION */}
                    <div
                        style={{
                            maxWidth: "900px",
                            margin: "50px auto",
                            position: "relative",
                        }}
                    >
                        <h2 style={{ marginBottom: "20px" }}>
                            GLAR Video Spotlight
                        </h2>
                        <ReactPlayer
                            src="https://www.youtube.com/watch?v=fsSBod8x3wQ"
                            width="100%"
                            height="500px"
                            controls
                        />
                    </div>
                </Inset>
            </main>
        </HomeStyled>
    );
};

export default Home;
