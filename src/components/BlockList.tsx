import React from "react";
import { useState, useEffect } from "react";
import './styles/BlockList.css';

interface Block {
    name: string;
    difficulty: string;
    image: string;
}

const BlockList: React.FC = () => {
    const [blocks, setBlocks] = useState<Block[]>([]);

    const getBlocks = () => {
        fetch('/items.json')
        .then(res => res.json())
        .then(data => setBlocks(data))
        .catch(error => console.error('Error:', error));
    }

    useEffect(getBlocks, []);

    return <div className="block-list">
        <h2>Lista dostępnych bloków:</h2>
        {blocks.map((item, index) => (
            <div key={index} className="block-item">
                <h3>{item.name}</h3>
                <p>Diffuculty: {item.difficulty}</p>
                <img src={item.image} alt={item.name}/>
            </div>
        ))}
    </div>
}

export default BlockList;