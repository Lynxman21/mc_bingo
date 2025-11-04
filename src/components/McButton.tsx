import React from 'react'; 
import './styles/McButton.css';

type McButtonProps = {
    name?: string;
    width: string;
    height: string;
    fun: () => void;
    disabled?: boolean;
    key?: number;
    image?: string;
    title?: string;
}

const McButton: React.FC<McButtonProps> = ( { name,width,height,fun,disabled, key, image, title }: McButtonProps ) => {
    return <button key={key} onClick={fun} className='mc-button' style={{width, height}} disabled={disabled} title={title}>
        <span className='vertical-left-line'></span>
        <span className='vertical-right-line'></span>
        <span className='horizontal-top-line'></span>
        <span className='horizontal-bottom-line'></span>
        {name}
        {image && <img src={image} alt={name}/>}
    </button>
}

export default McButton;