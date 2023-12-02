import { useTranslation } from 'react-i18next';
import showOne from './../../../images/show.png';
import showTwo from './../../../images/show2.png';
import showThree from './../../../images/show3.png';

import './AdditionalInformation.scss';


export const AdditionalInformation = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="additional-information">
            <div className="additional-information__container">
                <div className="additional-information__container-text">
                    <h4>{t("additionalInformation1h1")}</h4>
                    <p>{t("additionalInformation1")}</p>
                </div>
                <div className="additional-information__container-image">
                    <img src={showThree} alt="additional img2" />
                </div>
            </div>
            <div className="additional-information__container">
                <div className="additional-information__container-text">
                    <h4>{t("additionalInformation2h1")}</h4>
                    <p>{t("additionalInformation2")}</p>
                </div>
                <div className="additional-information__container-image">
                    <img src={showTwo} alt="additional img1" />
                </div>
            </div>
            <div className="additional-information__container">
                <div className="additional-information__container-text">
                    <h4>{t("additionalInformation3h1")}</h4>
                    <p>{t("additionalInformation3")}</p>
                </div>
                <div className="additional-information__container-image">
                    <img src={showOne} alt="additional img2" />
                </div>
            </div>
        </div>
    );
}