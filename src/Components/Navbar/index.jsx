import { memo, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import resume from "../../documents/_Resume.pdf"
import "./style.css";
const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects  " },
];
const NavComponent = ({ colors }) => {
    const { bg_color, colour, border_color, text_color } = colors
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [menu, setMenu] = useState(true);
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {

        window.addEventListener('resize', handleResize);
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const offset = windowHeight * 0.5;
            for (const { id } of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (
                        scrollPosition + windowHeight >=
                        sectionTop + sectionHeight - offset &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [activeSection]);
    const scrollToSection = (id) => {

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", `#${id}`);
            setActiveSection(id);
        }
    };

    const menuHandler = () => {
        setMenu(!menu);
    };
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = resume;
        link.click();
        link.remove();
    };
    return (
        <div className="nav-main-container" style={{ background: bg_color }}>
            <div className="logo-container">
                <h2 className="logo" style={{ borderColor: border_color }}>Lokesh</h2>
                <h2 className="logo">Lokesh</h2>

            </div>
            <div className="links-container">
                {windowSize.width > 600 ? (
                    <div className="links button-container">
                        {
                            sections.map((link, index) => {
                                return <Fragment key={index}>
                                    <Link to={link.id}
                                        style={{ color: text_color }}
                                        onClick={() => {
                                            scrollToSection(link.id);
                                        }}>{link.label}</Link>
                                </Fragment>
                            })
                        }
                        <button className="button" type="button" onClick={handleDownload}>
                            <span className="button__text">RESUME</span>
                            <span className="button__icon"><svg viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                        </button>
                    </div>
                ) : (
                    <div className="links menu-container" onClick={menuHandler}>
                        {windowSize.width <= 600 && menu ? (
                            < i className="fa-solid fa-bars" style={{ color: colour }} />
                        ) : (
                            <i className="fa-solid fa-xmark" style={{ color: colour }} />
                        )}
                        {!menu ? (
                            <div className="menu-buttons" style={{ background: bg_color }}>
                                {
                                    sections.map((link, index) => {
                                        return <Fragment key={index}>
                                            <Link to={link.id}
                                                style={{ color: colour }}
                                                onClick={() => {
                                                    scrollToSection(link.id);
                                                }}>{link.label}</Link>
                                        </Fragment>
                                    })
                                }
                                <button className="button" type="button" onClick={handleDownload}>
                                    <span className="button__text">RESUME</span>
                                    <span className="button__icon"><svg viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                                </button>
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(NavComponent);
