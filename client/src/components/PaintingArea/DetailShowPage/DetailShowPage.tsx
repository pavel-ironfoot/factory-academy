import { NavLink, useParams } from "react-router-dom";
import { HeaderGeneral } from "../../HeaderGeneral";
import { useEffect, useState } from "react";
import { PaintingAreaDetailType } from "../../../common/types-and-interfaces";
import { DetailPicture } from "../DetailPicture";
import { useTranslation } from "react-i18next";
import blowHand from './../../../images/blow-hand1.png';
import { useDispatch, useSelector } from "react-redux";
import { changeShowCorkPopup, changeShowEditPopup } from "../../../store/showPopupSlice";
import { ModalCorcs } from "../ModalCorks";
import { AdditionalInformation } from "../AdditionalInformation";
import arrowShow from './../../../images/Caret_Down.png';
import arrowHide from './../../../images/Caret_Up.png';

import './DetailShowPage.scss';
import { EditInformation } from "../EditInformation";
import { RootState } from "../../../store";


export const DetailShowPage = () => {
  const activeModal = useSelector((state: RootState) => state.popup.showEditInformation);
  const dispatch = useDispatch();
  const { detail } = useParams<{ detail: string }>();
  const [showAdditionalInformation, setshowAdditionalInformation] = useState<boolean>(false);
  const [showEditButton, setShowEditButton] = useState<boolean>(false);
  const [detailInformation, setDetailInformation] = useState<PaintingAreaDetailType>(
    {
      id: 0,
      number: '',
      mainPicture: [],
      blow: true,
      hugCleaning: true,
      cork: true,
      type: '',
      hangingInformation1: '',
      hangingInformation2: '',
      corkImage: ''
    }
  );

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8800/users/one-detail-information/${detail}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log(jsonData)
        setDetailInformation(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    if (('All-Factory' === localStorage.getItem(('currentArea')))) {
      setShowEditButton(true)
    }

  }, [detail, activeModal]);


  return (
    <div>
      <div className="detail-show-page">
        <div className="detail-show-page__container">
          <HeaderGeneral />
          <header className="detail-show-page__container__header">
            <div>
              <NavLink to={`/Painting-Area`}>
                <button className="detail-show-page__container__button">{t("backButton")}</button>
              </NavLink>
            </div>
            <div className="detail-show-page__container__header-edit">
              {showEditButton ? <button onClick={() => dispatch(changeShowEditPopup(true))} className="detail-show-page__container__button">{t("editShowInformation")}</button> : <></>}
            </div>
          </header>
          <h1><span>{t("detailNumber")}</span> {detail}</h1>
          <h3><span>{t("type")}</span>: {detailInformation.type}</h3>
          <DetailPicture pictures={detailInformation.mainPicture} />
          <div className="detail-show-page__container-text-block">
            {detailInformation.blow ? <div className="detail-show-page__container-text-block__blow">
              <p  className="detail-show-page__container-text-block__text-blow">{t("blowTrue")}</p>
              <div  className="detail-show-page__container-text-block__image-blow">
                <img src={blowHand} alt="blow hand" />
              </div>
            </div> : <p> {t("blowFalse")}</p>}
            <p>{detailInformation.hugCleaning ? t("hugCleaningTrue") : t("hugCleaningFalse")}</p>
            <p>{detailInformation.cork ? <> {t("corkTrue")} <span className="detail-show-page__container-text-block__span-cork" onClick={() => dispatch(changeShowCorkPopup(true))}>{t("showCorks")}</span></> : t("corkFalse")}</p>
            {detailInformation.hangingInformation1 === '' ? <p>{t("hangingInformation1")}</p> :
              detailInformation.hangingInformation1.split(' ')[1] === '0' ? <p>{t("hangingInformation3")} <span className="detail-show-page__container-text-block__span">{detailInformation.hangingInformation1.split(' ')[0]}</span> {t("hangingInformation4")}. {t("hangingInformation5")} {detailInformation.hangingInformation1.split(' ')[2]} {t("hangingInformation6")}</p> :
                <p>{t("hangingInformation3")}<span className="detail-show-page__container-text-block__span"> {detailInformation.hangingInformation1.split(' ')[0]}</span> {t("hangingInformation7")} <span className="detail-show-page__container-text-block__span">{detailInformation.hangingInformation1.split(' ')[1]}</span> {t("hangingInformation6")}. {t("hangingInformation5")}<span className="detail-show-page__container-text-block__span"> {detailInformation.hangingInformation1.split(' ')[2]}</span> {t("hangingInformation6")}</p>
            }
            {detailInformation.hangingInformation2 === '' ? <p>{t("hangingInformation2")}</p> :
              <p>{t("hangingInformation8")} <span className="detail-show-page__container-text-block__span">{detailInformation.hangingInformation2.split(' ')[0]}</span> {t("hangingInformation9")} <span className="detail-show-page__container-text-block__span">{detailInformation.hangingInformation2.split(' ')[1]}</span> {t("hangingInformation6")}</p>}
          </div>

          <footer className="detail-show-footer">
            <div className="detail-show-footer__arrow-switcher" onClick={() => setshowAdditionalInformation(!showAdditionalInformation)}>
              <div className="detail-show-footer__arrow-switcher__text">
                <h3>
                  {t("additionalInformation")}
                </h3>
              </div>
              <div className="detail-show-footer__arrow-switcher__img">
                <img src={showAdditionalInformation ? arrowShow:arrowHide} alt="arrow" />
              </div>
            </div>
            {showAdditionalInformation ? (
              <AdditionalInformation />
            ) : (
              <></>
            )}
          </footer>
        </div>
      </div>
      <ModalCorcs picture={detailInformation.corkImage} />
      <EditInformation detailNumber = {detail}/>
    </div>
  );
}