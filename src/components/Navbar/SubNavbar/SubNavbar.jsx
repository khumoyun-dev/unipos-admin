import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SubNavbar({ title, link, buttonIcon, buttonText, backIcon }) {
    const navigate = useNavigate();
    
    return (
        <div className="mystore__bar">
            {backIcon &&
                <div className='bar-backArrow' onClick={() => navigate(-1)}>
                    {
                        backIcon
                    }
                </div>
            }
            <p className="bar-title">
                {title}
            </p>
            <div className="bar-edit">
                <button className="bar-edit__button">
                    <Link className='button-link' to={link}>
                        <span>{buttonIcon}</span>
                        <span>{buttonText}</span>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default SubNavbar;