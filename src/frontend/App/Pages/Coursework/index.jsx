import { useState } from "react";
import styled from "styled-components";

const SunAndMoonStyled = styled.div`
    text-align: center;

    h2 {
        font-size: 30px;
        color: #784a00;
    }

    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 2px teal;
        background-color: #014b4b;
    }
`;

const HomeworkListStyled = styled.div`
    text-align: left;
    margin: 40px auto;
    width: fit-content;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;

    h2 {
        color: #3b4455;
        margin: 16px 0 10px;
        text-align: center;
    }

    ul {
        list-style-type: disc;
        padding-left: 20px;
        margin: 0 0 12px;
    }

    li {
        margin: 6px 0;
    }
`;

const SunAndMoon = () => {
    const [srcState, setSrcState] = useState("/assets/sunAndMoon/moon.png");

    const changeToSun = () => setSrcState("/assets/sunAndMoon/sun.png");
    const changeToMoon = () => setSrcState("/assets/sunAndMoon/moon.png");

    return (
        <main>
            <h1>Course Work</h1>

            <SunAndMoonStyled>
                <h2>Sun and Moon</h2>
                <img
                    src={srcState}
                    alt="Sun and Moon"
                    onMouseEnter={changeToSun}
                    onMouseLeave={changeToMoon}
                />
            </SunAndMoonStyled>

            {/* HOMEWORK SECTIONS */}
            <HomeworkListStyled>
                <h3>Homework 1</h3>
                <ul>
                    <li>Explain the difference between Git and GitHub</li>
                    <li>
                        HTML - structure of a webpage (headings, paragraphs,
                        links, images). CSS - styling (colors, fonts, layouts,
                        spacing). JavaScript - interactivity (buttons that work,
                        simple animations, forms).
                    </li>
                </ul>

                <h3>Homework 2</h3>
                <ul>
                    <li>Explain the difference between Git and GitHub</li>
                    <li>
                        You use Git locally to track and commit changes, then
                        push those changes to GitHub so others (or future you)
                        can access them remotely.
                    </li>
                </ul>
            </HomeworkListStyled>
        </main>
    );
};

export default SunAndMoon;
