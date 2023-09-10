import { memo, useState } from "react";
import "./style.css";
import NavComponent from "../Navbar";
import AboutComponent from "../About";
import FooterComponent from "../Footer";
import SkillComponent from "../Skills";
import EducationComponent from "../Education";
import ContactComponent from "../Contact";
import ProjectsComponent from "../Projects";
const HomeComponent = () => {
    const [darkMode, setDarkMode] = useState({});
    const [changebg, setChangebg] = useState(false)
    const darkModeHandler = () => {
        setChangebg(!changebg)
        setDarkMode({
            bg_color: changebg ? "white" : "rgb(6, 2, 32)",
            colour: changebg ? "black" : "white",
            border_color: changebg ? "dimgray" : "white",
            card_color: changebg ? "rgb(50, 47, 47)" : "rgb(6, 2, 32)",
            text_color: changebg ? "black" : "white",
            card2_color: changebg ? "#a893f6" : "rgb(6, 2, 32)"
        })
    }
    return <>

        <div className="home-main-container">
            <label className="switch" style={{ background: darkMode.bg_color, borderColor: changebg ? "white" : "#a893f6" }}>
                <input type="checkbox" onChange={darkModeHandler} value={darkMode} style={{ backgroundColor: darkMode.colour }} id="darkmode" />
                <span className="slider"></span>
            </label>
            <NavComponent colors={darkMode} />
            <AboutComponent colors={darkMode} photo={changebg} />
            <SkillComponent colors={darkMode} />
            <EducationComponent colors={darkMode} />
            <ProjectsComponent colors={darkMode} />
            <ContactComponent colors={darkMode} />
            <FooterComponent colors={darkMode} />
        </div>
    </>
}

export default memo(HomeComponent);