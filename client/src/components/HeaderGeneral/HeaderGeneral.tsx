import React, { useEffect, useState } from 'react';
import { LanguageChange } from '../LanguageChange';
import './HeaderGeneral.scss';
import { NavLink } from 'react-router-dom';

export const HeaderGeneral = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            if (position > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header-for-all ${scrolling ? 'scrolled' : ''}`}>
            <div className='header-for-all__title-scanfil'>
                <NavLink to={`/`}>
                    <h1>Scanfil</h1>
                </NavLink>
            </div>
            <div>
                <LanguageChange />
            </div>
        </div>
    );
};
