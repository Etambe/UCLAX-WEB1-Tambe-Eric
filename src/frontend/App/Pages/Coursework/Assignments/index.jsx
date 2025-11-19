import styled from "styled-components";

const HomeworkListStyled = styled.div`
    text-align: left;
    margin: 40px auto;
    width: fit-content;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;

    h2,
    h3 {
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

const Assignments = () => {
    return (
        <div>
            <h2>Assignments</h2>

            {/* HOMEWORK SECTIONS */}
            <HomeworkListStyled>
                <h3>Homework 1</h3>
                <ul>
                    <li>Explain the difference between Git and GitHub</li>
                    <li>
                        HTML – structure of a webpage (headings, paragraphs,
                        links, images). CSS – styling (colors, fonts, layouts,
                        spacing). JavaScript – interactivity (buttons that work,
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

                <h3>Homework 3</h3>
                <ul>
                    <li>What is the difference between jQuery and React?</li>
                    <li>
                        jQuery is a JavaScript library that helps manipulate the
                        DOM easily and handle events. React is a JavaScript
                        library for building reusable, component-based user
                        interfaces that update efficiently using a virtual DOM.
                    </li>
                </ul>

                <h3>Homework 4</h3>
                <ul>
                    <li>
                        What is the difference between a Front-End and Back-End
                        Developer?
                    </li>
                    <li>
                        A Front-End Developer focuses on what users see and
                        interact with in the browser — like layout, visuals, and
                        functionality using HTML, CSS, and JavaScript. A
                        Back-End Developer works on the server, database, and
                        application logic that power the site behind the scenes.
                    </li>
                </ul>

                <h3>Homework 5</h3>
                <ul>
                    <li>
                        In React, what are the different ways we can link to
                        resources (e.g. Root Relative vs Document Relative)?
                    </li>
                    <li>
                        In React, there are two main ways to link to resources:
                        1. Document-Relative Paths (./ or ../) 2. Root-Relative
                        Paths (/). Document-relative paths are relative to the
                        current file's location. Root-relative paths are
                        relative to the root of the project. Root-relative paths
                        are often used for assets in the public folder, while
                        document-relative paths are used for components and
                        files within the src directory.
                    </li>
                </ul>

                <h3>Homework 6</h3>
                <ul>
                    <li>
                        <strong>JPG (JPEG)</strong> — Best for photos and
                        detailed images. Uses lossy compression which reduces
                        file size but loses some quality. Does not support
                        transparency.
                    </li>

                    <li>
                        <strong>PNG</strong> — Best for graphics, UI elements,
                        and images needing clean edges. Uses lossless
                        compression for high quality and supports full
                        transparency.
                    </li>

                    <li>
                        <strong>GIF</strong> — Limited to 256 colors and
                        supports simple animations. Good for small, low-quality
                        animated images. Supports basic transparency.
                    </li>

                    <li>
                        <strong>SVG</strong> — A vector image format (not
                        pixel-based). Infinitely scalable without losing
                        quality. Great for icons, logos, and UI graphics. Very
                        lightweight and can be animated or styled with CSS.
                    </li>
                </ul>
            </HomeworkListStyled>
        </div>
    );
};

export default Assignments;
