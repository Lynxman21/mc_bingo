import React from "react";
import './styles/McText.css';

type McTextProps = {
    setNum?: React.Dispatch<React.SetStateAction<number>>;
    setStr?: React.Dispatch<React.SetStateAction<string>>;
    name?: string;
    fun?: () => void;
};

const McText: React.FC<McTextProps> = ({setNum, setStr, name, fun}: McTextProps) => {
    return <textarea className='code-place' id={name} maxLength={15} onChange={(e) => {
        if (setNum) {
            const parsed = Number(e.target.value);
            if (!isNaN(parsed)) setNum(parsed);
        }
        if (setStr) {
            setStr(e.target.value);
        }
        if (fun) {
            fun();
        }
    }}></textarea>
}

export default McText;