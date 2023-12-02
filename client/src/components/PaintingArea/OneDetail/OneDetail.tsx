import { useTranslation } from 'react-i18next';
import { OneDetailProps } from '../../../common/types-and-interfaces';

import './OneDetail.scss';


export const OneDetail: React.FC<OneDetailProps> = ({ elem }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="one-detail">
            <div>
                <img src={`http://localhost:8800/users/detail-photo/${elem.mainPicture[0]}.jpg`} alt="detail photo" />
            </div>
            <div>
                <h1><span>{t("detailNumber")}</span> {elem.number}</h1>
                <h3><span>{t("type")}</span>: {elem.type}</h3>
            </div>
        </div>
    );
}