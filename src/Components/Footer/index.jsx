import React from 'react';
import "./style.css"

const FooterComponent = ({ colors }) => {
    const { bg_color, border_color } = colors
    return <>
        <div className='footer-container' style={{ background: border_color, color: bg_color }} id='projects'>
            <p>
                Designed & Developed by<b> Singappagari Lokesh</b>
            </p>
            <div className="copyright" style={{ color: bg_color }}>&copy;
                <div className="year" style={{ color: bg_color }}>
                    {new Date().getFullYear()} , All rights reserved.

                </div>
            </div>
        </div>
    </>
}

export default FooterComponent;