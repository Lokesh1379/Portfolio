import React, { useState } from "react";
import "./style.css";
import pic from "../../Images/lokipic.png";
import pic2 from "../../Images/pic.png"
import { Link } from "react-router-dom";

const AboutComponent = ({ colors, photo }) => {
    const { bg_color, card_color, text_color } = colors
    const socialmedia = [
        {
            platform: "github",
            link: "https://github.com/LOKESH1379",
            icon: "fa-github",
            color: "black",
            bgColor: "white"
        },
        {
            platform: "twitter",
            link: "https://twitter.com/LOKESH137913",
            icon: "fa-twitter",
            color: "white",
            bgColor: "rgb(18, 144, 194)"
        },
        {
            platform: "instagram",
            link: "https://www.instagram.com/l_0_k_e",
            icon: "fa-instagram",
            color: "white",
            bgColor: "rgb(244, 35, 133)"
        },
        {
            platform: "linkedin",
            link: "https://www.linkedin.com/in/LOKESH-c-262b82253",
            icon: "fa-linkedin-in",
            color: "white",
            bgColor: "rgb(34, 82, 212)"
        },
    ];

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredIcon(index);
    };

    const handleMouseOut = () => {
        setHoveredIcon(null);
    };

    return (
        <div className="about-main-container" id="about" style={{ backgroundColor: bg_color }}>
            <div className="image-container">
                <div className="name-container">
                    <h2 className="name lastname">SINGAPPAGARI</h2>
                    <h2 className="name lastname">SINGAPPAGARI</h2>
                </div>
                <img src={photo ? pic : pic2} alt="LOKESH" className="image" />
                <div className="name-container f-container">
                    <h2 className="name firstname">LOKESH</h2>
                    <h2 className="name firstname">LOKESH</h2>
                </div>
            </div>
            <div className="about-card">
                <h3 className="about-me" style={{ color: text_color }}>
                    Hello there! I'm <span className="me">LOKESH</span> , a passionate and creative
                    <span className="me"> front-end developer </span>
                    eager to bring web designs to life through code. I am committed to
                    crafting seamless and user-friendly web experiences while staying
                    up-to-date with the latest industry trends and technologies.
                </h3>
            </div>
            <div className="content-container" style={{ backgroundColor: card_color }}>
                {socialmedia.map((media, index) => {
                    const { link, icon, color, bgColor } = media;
                    const isHovered = index === hoveredIcon;

                    return (
                        <Link
                            key={index}
                            className="blur-element"
                            style={{ background: isHovered ? bgColor : card_color }}
                            to={link}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseOut={handleMouseOut}
                        >
                            <i
                                className={`fa-brands ${icon}`}
                                style={{ color: isHovered ? color : "white" }}
                            ></i>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutComponent;
