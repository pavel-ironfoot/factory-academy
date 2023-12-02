import { OneAreaCardProps } from '../../common/types-and-interfaces';

import './OneAreaCard.scss';


export const OneAreaCard:React.FC<OneAreaCardProps> = ({titleEn, titlePl}) =>{
    
    return (
        <div className='one-area-card'>
            <h3>{titleEn}</h3>
            <h3>{titlePl}</h3>
            <img className='one-world__image' src={`http://localhost:8800/users/one-area/${titleEn}.png`} alt="area logo" /> 
        </div>
    );
}