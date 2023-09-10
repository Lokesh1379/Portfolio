import { Link } from "react-router-dom";
import "./style.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProjectsComponent = ({ colors }) => {
    const { bg_color, text_color, border_color } = colors
    const projects = [
        {
            name: "Weather-app",
            description: "The app gives the current weather details based on the user Search",
            git_link: "https://github.com/Lokesh1379/Weather-app",
            app_link: "https://weather-app-3ea92.web.app"
        },
        {
            name: "Task-Manager",
            description: "The app is used to organise the daily tasks and can mark tasks as completed ",
            git_link: "https://github.com/Lokesh1379/miraki-technologies",
            app_link: "https://task-manager-19b75.web.app"
        },
        {
            name: "Landing-page",
            description: "Basic landing page for a restaurant withh some animations",
            git_link: "https://github.com/Lokesh1379/Landing_Page",
            app_link: "https://be-foodie-restaurent1379.netlify.app"
        },
        {
            name: "portfolio",
            description: "Currently your are viewing the project thanks for watching",
            git_link: "https://github.com/Lokesh1379/Portfolio",
            app_link: "https://portfolio-fc9a4.web.app"
        }
    ]
    return <>
        <div className="project-container" style={{ background: bg_color }} id="projects">
            <h3 style={{ color: text_color }}>Projects</h3>
            {
                projects.map((project, index) => {
                    const { name, git_link, app_link, description } = project
                    return <AnimationOnScroll
                        key={index}
                        animateIn={`fadeIn${index + 1}`}
                        delay={index * 100}
                    >
                        <div className="p-card" style={{ border: `2px solid ${border_color}`, background: bg_color }}>
                            <p className="p-heading" style={{ color: text_color }}>{name}</p>
                            <p className="cookieDescription" style={{ color: text_color }}>{description}</p>
                            <div className="buttonContainer">
                                <Link to={git_link} className="git-button">Get Code</Link>
                                <Link to={app_link} className="web-button">visit</Link>
                            </div>
                        </div>
                    </AnimationOnScroll>
                })
            }
        </div>
    </>
}

export default ProjectsComponent;