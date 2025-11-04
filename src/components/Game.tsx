import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BingoButton from "./BingoButton";
import McButton from "./McButton";
import './styles/Game.css';

type Item = {
    name: string,
    image: string,
    difficulty: string;
}

const Game: React.FC = () => {
    const [teams, setTeams] = useState<string[][]>([]);
    const location = useLocation();
    const {map, size, code} = location.state as {map: Item[], size: number, code: string};

    const copy = () => {
        navigator.clipboard.writeText(code);
    }

    return <div className="game-area">
        <div className="map" style={{display: "grid", 
            gridTemplateRows: `repeat(${size}, 1fr)`,
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            width: `${Math.min(600, size * 100)}px`,
            height: `${Math.min(600, size * 100)}px`,
            gap: "3%"}}>
            {map.map((item, index) => (
                <div className="button" key={index}>
                    <BingoButton img={item.image} title={item.name}></BingoButton>
                </div>
            ))}
        </div>
        <div className="copy">
            <McButton width="200px" height="60px" fun={copy} name="Kod"></McButton>
        </div>
    </div>
}

export default Game;