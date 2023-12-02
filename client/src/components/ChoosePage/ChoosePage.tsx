import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ChoosePage.scss';
import { useTranslation } from 'react-i18next';
import { OneAreaCard } from '../OneAreaCard';
import { HeaderGeneral } from '../HeaderGeneral';

export const ChoosePage = () => {
    const [sections, setSections] = useState<any[]>([]);
    const [loadingCatalog, setLoadingCatalog] = useState(true);
    

    const { t, i18n } = useTranslation();

    useEffect(() => {
        // fetch('http://localhost:8800/users/factory-sections/', { method: 'GET' })
        //     .then(res => res.json())
        //     .then(data => { setLoadingCatalog(false); setSections(data) })
        //     .catch(error => { console.log(error) })

            const fetchData = async () => {
                try {
                  const response = await fetch(`http://localhost:8800/users/factory-sections/`);
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  const jsonData = await response.json();
                  setLoadingCatalog(false); 
                  setSections(jsonData);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };

              fetchData();
    }, []);

    const showSections = sections.map((elem, index) =>
        <NavLink key={elem.titleEn} to={`/${elem.titleEn.split(' ').join('-')}`}>
            <OneAreaCard titleEn={elem.titleEn} titlePl={elem.titlePl} />
        </NavLink>
    )

    return (
        <div>
            <HeaderGeneral />
            <div className='choose-page'>
                {loadingCatalog ? <>
                    <h1>{t("loading")}</h1>
                </> : <>
                    <h1>{t("chooseArea")}</h1>
                    <main className='choose-page__main'>
                        {showSections}
                    </main>

                </>}
            </div>
        </div>
    );
}