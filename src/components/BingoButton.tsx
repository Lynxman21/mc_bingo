import React, { useState } from 'react';
import './styles/BingoButton.css';

type BingoButtonProps = {
    name?: string;
    img?: string;
    title?: string;
}

const BingoButton: React.FC<BingoButtonProps> = ( { name, img, title }: BingoButtonProps ) => {
    const [click, setClick] = useState(0);

    const handleClick = (state: number) => {
        setClick(state + 1);
    }

    return <button className={click%2===0 ? 'BingoButton' : 'BingoButton-active'} onClick={() => handleClick(click)} title={title}>
        <span className='vertical-left-line'></span>
        <span className='vertical-right-line'></span>
        <span className='horizontal-top-line'></span>
        <span className='horizontal-bottom-line'></span>
        {name}
        {img && <img src={img} alt={name}/>}
    </button>
}

export default BingoButton;