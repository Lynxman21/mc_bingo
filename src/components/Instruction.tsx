import React from 'react';
import { useState, useEffect } from 'react';
import './styles/Instructions.css';

const Instruction: React.FC = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('../rules.txt')
        .then((res) => res.text())
        .then((data) => setText(data))
        .catch((err) => console.error("Error fetching rules:", err));
    }, []);
    return <div className='rules'>{ text }</div>
}

export default Instruction;