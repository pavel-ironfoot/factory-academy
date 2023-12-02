import { useDispatch, useSelector } from 'react-redux';
import { DetailPictureProps } from '../../../common/types-and-interfaces';
import { ModalPictures } from '../ModalPictures';
import { changeShowLoginPopup } from '../../../store/showPopupSlice';
import { RootState } from '../../../store';
import { useState } from 'react';

import './DetailPicture.scss';


export const DetailPicture: React.FC<DetailPictureProps> = ({ pictures }) => {
    const activeModal = useSelector((state: RootState) => state.popup.showSwitcher);
    const [pictureNumber,setPictureNumber] = useState<string>('');
    const dispatch = useDispatch();

    const showPicturePoup = (elem:string) =>{
        setPictureNumber(elem);
        dispatch(changeShowLoginPopup(!activeModal));
    }
    
    const showPictures = pictures.map(elem => <img  className="detail-picture__one-picture" onClick={()=>showPicturePoup(elem)} key={elem} src={`http://localhost:8800/users/detail-photo/${elem}.jpg`} alt="elem" />);

    return (
        <div className="detail-picture">
            {showPictures}
            <ModalPictures currentPicture={pictureNumber} pictures={pictures}/>
        </div>
    );
}