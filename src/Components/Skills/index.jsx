import { memo } from "react";
import "./style.css";
import html from "../../svg/html.svg";
import css from "../../svg/css.svg";
import js from "../../svg/js.svg";
import react from "../../svg/react.svg";
import redux from "../../svg/redux.svg"
import { AnimationOnScroll } from "react-animation-on-scroll"


const SkillsComponent = ({ colors }) => {
    const { bg_color, colour, border_color, text_color } = colors
    const skills = [
        {
            image: html,
            alt: "html",
            title: "HTML",
            description:
                "I have a strong foundation in Hypertext Markup Language, which is the standard markup language for creating web pages. I can structure content effectively using semantic HTML elements and understand the principles of accessibility.",
        },
        {
            image: css,
            alt: "css",
            title: "CSS",
            description:
                "I'm proficient in (Cascading Style Sheets) and can create visually appealing and responsive designs. I'm experienced in layout techniques, styling elements, and using CSS frameworks to enhance the user interface of web applications.",
        },
        {
            image: js,
            alt: "js",
            title: "JAVASCRIPT",
            description:
                "I'm skilled in JavaScript, the programming language of the web. I can build interactive and dynamic web applications, manipulate the DOM, handle asynchronous operations, and work with various JavaScript libraries and frameworks.",
        },
        {
            image: react,
            alt: "react",
            title: "REACT",
            description:
                "I have Good Knowledge in React, a popular JavaScript library for building user interfaces. I can create reusable components, manage state and props, implement routing, and handle application state efficiently using React's concepts.",
        },
        {
            image: redux,
            alt: "redux",
            title: "REDUX",
            description:
                "I'm experienced in Redux, a state management library for React applications. I can design and manage a centralized application state, handle complex data flows, and ensure predictable state changes across the application.",
        },
    ]
    return <>
        <div id="skills" style={{ backgroundColor: bg_color }}>
            <h3 className="skills-heading" style={{ color: colour }}>Technical-Skills</h3>
            <div className="skill-container" id="skills">
                {
                    skills.map((skill, index) => {
                        const { image, alt, title, description } = skill;
                        return <AnimationOnScroll
                            key={index}
                            animateIn={`fadeIn${index + 1}`}
                            delay={index * 100}
                        >
                            <div className="parent" >
                                <div className="card" style={{ borderColor: border_color, background: bg_color }}>
                                    <div className="content-box">
                                        <span className="card-title" style={{ color: text_color }}>{title}</span>
                                        <p className="card-content" style={{ color: text_color }} >
                                            {description}
                                        </p>
                                    </div>
                                    <div className="date-box">
                                        <img src={image} alt={alt} />
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    })
                }
            </div>

        </div>
    </>
}

export default memo(SkillsComponent);



