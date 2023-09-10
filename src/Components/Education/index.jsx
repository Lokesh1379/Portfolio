import { memo } from "react";
import "./style.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const EductaionComponent = ({ colors }) => {
    const { bg_color, text_color, card2_color } = colors
    const education = [
        {
            date: "2017 - 2021",
            title: "Graduation",
            subtitle: "B.Tech ",
            branch: "(Mechanical Engineering)",
            percentage: "72.69%",
            institute: "Siddharth Institute of Engineering and Technology, Puttur"
        },
        {
            date: "2015 - 2017",
            title: "Intermediate",
            subtitle: "MPC",
            percentage: "76.6%",
            institute: "Sai Sri Chaithanya Junior College, Palamaneru"
        },
        {
            date: "2015",
            title: "SSLC",
            subtitle: "Sciences",
            percentage: "75%",
            institute: "Little Angels English Medium High School, Palamaneru"
        }
    ]
    return <>
        <div id="education" style={{ background: bg_color }}>
            <h3 style={{ color: text_color }}>Educatinal Background</h3>
            <div className="education-container" >

                {education.map((e, index) => {
                    const { date, title, subtitle, institute, percentage } = e
                    return <AnimationOnScroll
                        key={index}
                        animateIn={`fadeIn${index + 1}`}
                        delay={index * 100}
                    >
                        <div className="e-card" style={{ background: card2_color }}>
                            <h2 className="g-title">{title}</h2>
                            <div className="e-card__content" >
                                <p className="e-card__title">{subtitle}</p>
                                <p className="date">{e.branch}</p>
                                <p className="percentage">percentage:{percentage}</p>
                                <p className="date">{date}</p>
                                <p className="e-card__description">{institute}</p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                })}

            </div>
        </div>
    </>
}

export default memo(EductaionComponent);