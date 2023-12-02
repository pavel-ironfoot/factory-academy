import { useEffect, useState } from 'react';
import { HeaderGeneral } from '../HeaderGeneral';
import { Aside } from './Aside';
import { Header } from './Header';
import { Main } from './Main';
import { NavLink } from 'react-router-dom';

import './PaintingArea.scss';
import { useTranslation } from 'react-i18next';

export const PaintingArea = () => {

    const [showBackButton, setShowBackButton] = useState<boolean>(false);
    const { t, i18n } = useTranslation();

    useEffect(()=>{
        if (('All-Factory' === localStorage.getItem(('currentArea')))) {
            setShowBackButton(true);
          }
    },[]);

    return (
        <div className='painting-area'>
            <div className='painting-area-main'>
                    <HeaderGeneral />
                    <Header />
                    <header className="painting-area-main__header">
                    {showBackButton ? <NavLink to={`/All-Factory`}>
                        <button className="painting-area-main__button-back">{t("backButton")}</button>
                    </NavLink> : <></>}
                </header>
                    <div className='painting-area-main-in'>
                        {/* <Aside /> */}
                        <Main />
                    </div>
                
            </div>
        </div>
    );
}