import { useDispatch, useSelector } from 'react-redux';
import { ModalCorcsProps } from '../../../common/types-and-interfaces';
import { changeShowCorkPopup } from '../../../store/showPopupSlice';
import { RootState } from '../../../store';

import './ModalCorks.scss';


export const ModalCorcs: React.FC<ModalCorcsProps> = ({ picture }) => {
    const activeModal = useSelector((state: RootState) => state.popup.showCorksSwitcher);
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(changeShowCorkPopup(!activeModal))} className={activeModal ? 'corks-popup-container active' : 'corks-popup-container'}>
            <div onClick={(e) => e.stopPropagation()} className='corks-popup'>
                <div className='corks-popup__content'>
                    <img className='corks-popup__content__img' src={`http://localhost:8800/users/one-area/${picture}.jpg`} alt="picture photo" />
                </div>
            </div>
        </div>
    );
};