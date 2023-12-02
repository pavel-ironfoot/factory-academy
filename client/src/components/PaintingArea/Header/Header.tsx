import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

import './Header.scss';

export const Header = () =>{
    const [animationKey, setAnimationKey] = useState<number>(0); 

    return (
        <header className="header-painting-area">

            <TypeAnimation
                        key={animationKey} 
                        style={{
                            color: 'black',
                            fontSize: '30px',
                            whiteSpace: 'pre-line',
                            fontWeight: '300',
                            height: '105px',
                            display: 'block'
                        }}
                        sequence={[
                            `Painting Area
                            Lakernia`,
                            1000,
                            '',
                        ]}
                        repeat={Infinity}
                        speed={20}
                    />
        </header>
    );
}