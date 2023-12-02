import { useDispatch, useSelector } from 'react-redux';
import { changeShowEditPopup } from '../../../store/showPopupSlice';
import { RootState } from '../../../store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EditInformationProps } from '../../../common/types-and-interfaces';

import './EditInformation.scss';
import { editDetail } from '../../../common/async-functions';
import { useTranslation } from 'react-i18next';

type FormData = {
  betweenHugs: string;
  betweenDetails: string;
  detailsAmount: string;
  blowValue: boolean;
  cleanHugsValue: boolean;
  corkValue: boolean;
};

export const EditInformation: React.FC<EditInformationProps> = ({ detailNumber }) => {
  const activeModal = useSelector((state: RootState) => state.popup.showEditInformation);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // alert(JSON.stringify(data))
    if (detailNumber) {
      const res = await editDetail(
        detailNumber,
        data.betweenHugs,
        data.betweenDetails,
        data.detailsAmount,
        data.blowValue,
        data.cleanHugsValue,
        data.corkValue
      );
    }
    dispatch(changeShowEditPopup(false));
    reset();
  };

  const validNumberRange = (value: string) => {
    const numberValue = parseInt(value, 10);
    return numberValue >= 0 && numberValue <= 20;
  };

  return (
    <div onClick={() => dispatch(changeShowEditPopup(!activeModal))} className={activeModal ? 'edit-popup-container active' : 'edit-popup-container'}>
      <div onClick={(e) => e.stopPropagation()} className='edit-popup'>
        <div className='edit-popup__content'>
          <h1>{t("FormEditInformation")}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='blowValue'>
              {t("blow")}: {/* Label for the checkbox */}
              <input
                type='checkbox'
                {...register('blowValue')} // Register checkbox field
              />
            </label>
            <hr />
            <label htmlFor='cleanHugsValue'>
              {t("cleanHugs")}: {/* Label for the checkbox */}
              <input
                type='checkbox'
                {...register('cleanHugsValue')} // Register checkbox field
              />
            </label>
            <hr />
            <label htmlFor='corkValue'>
              {t("corking")}: {/* Label for the checkbox */}
              <input
                type='checkbox'
                {...register('corkValue')} // Register checkbox field
              />
            </label>
            <hr />
            <label htmlFor='betweenHugs'>
              {t("gapBetweenHugs")}:
              <input
                placeholder={t("typeHere")}
                type='text'
                {...register('betweenHugs', {
                  required: 'Need to fill',
                  pattern: {
                    value: /^(0|[1-9]|1[0-9]|20)$/,
                    message: 'Please enter a number between 0 and 20',
                  },
                  validate: validNumberRange,
                })}
              />
            </label>
            <div className='login-form__first-name__errors'>
              {errors?.betweenHugs?.message && <p>{errors?.betweenHugs?.message}</p>}
            </div>

            <label htmlFor='betweenDetails'>
              {t("gapBetweenDetails")}:
              <input
                placeholder={t("typeHere")}
                type='text'
                {...register('betweenDetails', {
                  required: 'Need to fill',
                  pattern: {
                    value: /^(0|[1-9]|1[0-9]|20)$/,
                    message: 'Please enter a number between 0 and 20',
                  },
                  validate: validNumberRange,
                })}
              />
            </label>
            <div className='login-form__first-name__errors'>
              {errors?.betweenDetails?.message && <p>{errors?.betweenDetails?.message}</p>}
            </div>

            <label htmlFor='detailsAmount'>
              {t("totalAmount")}:
              <input
                placeholder={t("typeHere")}
                type='text'
                {...register('detailsAmount', {
                  required: 'Need to fill',
                  pattern: {
                    value: /^(0|[1-9]|1[0-9]|20)$/,
                    message: 'Please enter a number between 0 and 20',
                  },
                  validate: validNumberRange,
                })}
              />
            </label>
            <div className='login-form__first-name__errors'>
              {errors?.betweenHugs?.message && <p>{errors?.betweenHugs?.message}</p>}
            </div>

            <button disabled={!isValid} type='submit'>
              {t("send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
