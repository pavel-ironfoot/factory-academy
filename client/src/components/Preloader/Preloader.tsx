import { TypeAnimation } from 'react-type-animation';
import { PasswordEntry } from '../PasswordEtry';
import { LanguageChange } from '../LanguageChange';

import './Preloader.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const Preloader = () => {
    const { t, i18n } = useTranslation();
    const [animationKey, setAnimationKey] = useState<number>(0); 

    useEffect(() => {
        setAnimationKey(animationKey + 1);
    }, [i18n.language]);

    return (
        <div className='preloader'>
            <header className='preloader-header'>
                <h1>Scanfil</h1>
                <LanguageChange />
            </header>
            <div className='preloader-main'>
                <div className='preloader-container'>
                    <TypeAnimation
                        key={animationKey} 
                        style={{
                            color: 'white',
                            fontSize: '28px',
                            whiteSpace: 'pre-line',
                            fontWeight: '300',
                            height: '155px',
                            display: 'block',
                            fontFamily: 'sans-serif'
                        }}
                        sequence={[
                            `${t("preloader1")}
                            ${t("preloader2")}
                            ${t("preloader3")}
                            ${t("preloader4")}`,
                            1000,
                            '',
                        ]}
                        repeat={Infinity}
                        speed={50}
                    />
                    <PasswordEntry />
                </div>
            </div>
        </div>
    );
};
