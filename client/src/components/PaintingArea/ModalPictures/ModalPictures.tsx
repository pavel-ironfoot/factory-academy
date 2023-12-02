import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { changeShowLoginPopup } from '../../../store/showPopupSlice';
import { ModalPictureProps } from '../../../common/types-and-interfaces';
import { useEffect, useState } from 'react';

import './ModalPictures.scss';

export const ModalPictures: React.FC<ModalPictureProps> = ({ pictures, currentPicture }) => {
    const activeModal = useSelector((state: RootState) => state.popup.showSwitcher);
    const dispatch = useDispatch();
    
    const [currentPictureIndex, setCurrentPictureIndex] = useState(-2);

        useEffect(()=>{
            setCurrentPictureIndex(pictures.findIndex((pic) => pic === currentPicture));
            console.log(currentPictureIndex);
        },[currentPicture]);
    const navigatePictures = (direction: string) => {
        if (direction === 'prev') {
            setCurrentPictureIndex((prevIndex) =>
                prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
            );
        } else if (direction === 'next') {
            setCurrentPictureIndex((prevIndex) =>
                prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    return (
        <div onClick={() => dispatch(changeShowLoginPopup(!activeModal))} className={activeModal ? 'picture-popup-container active' : 'picture-popup-container'}>
            <div onClick={(e) => e.stopPropagation()} className='picture-popup'>
                <div className='picture-popup__content'>
                    <img
                        className='picture-popup__img'
                        src={`http://localhost:8800/users/detail-photo/${pictures[currentPictureIndex]}.jpg`}
                        alt={currentPicture + ' picture'}
                    />
                    <button className='picture-popup__arrow-left' onClick={() => navigatePictures('prev')}>{'<'}</button>
                    <button className='picture-popup__arrow-right' onClick={() => navigatePictures('next')}>{'>'}</button>
                </div>
            </div>
        </div>
    );
};
