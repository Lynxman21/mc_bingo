import React, { use } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import McButton from "./McButton";
import './styles/ChangeMap.css';
import McSearch from "./McSearch";

type Item = {
    name: string;
    image: string;
    difficulty: number;
}

const ChangeMap: React.FC = () => {
    const location = useLocation();
    const {map, size} = location.state as { map: Item[], size: number };
    const [ newItem, setNewItem ] = useState<Item | null>(null);
    const [ selected, setSelected ] = useState<Item | null>(null);
    const navigate = useNavigate();
    
    const toGame = () => {
        let code = "";

        for (let i=0;i<map.length-1;i++) {
            code += map[i].name + ":";
        }
        code += map[map.length-1].name;

        navigate("/map", { state: {map: map, size: size, code: code}})
    };

    const changeItem = () => {
        if (!newItem || !selected) {
            return;
        }

        let index = map.findIndex(item => item.name === selected.name);
        map[index] = newItem;
        setSelected(null);
    };

    useEffect(changeItem, [newItem]);

    if (!map || map.length === 0) return <div>Poczekaj chwile ...</div>;
    else return <div className="change-map-area">
        <div className="map" style={{
                        display: "grid", 
                        gridTemplateRows: `repeat(${size}, 1fr)`,
                        gridTemplateColumns: `repeat(${size}, 1fr)`,
                        width: `${Math.min(600, size * 100)}px`,
                        height: `${Math.min(600, size * 100)}px`,
                        gap: "3%"
                    }
                    }>
            {map.map((mapItem, index) => (
                    <div className="button-area" key={index}>
                        <McButton width={"100%"} height={"100%"} fun={() => setSelected(mapItem)} image={mapItem.image} title={mapItem.name}></McButton>
                    </div>
                )
            )}
        </div>

        <div className="accept-button">
            <McButton name="Zatwierdź" width={"200px"} height={"60px"} fun={toGame} />
        </div>
        
        {selected && (
            <div className="b-ground">
                <div className="choice-window">
                    <McSearch fun={setNewItem} map={map}></McSearch>
                    <div className="stop">
                        <McButton name="Anuluj" width={"200px"} height={"60px"} fun={() => setSelected(null)}/>
                    </div>
                </div>
            </div>
        )}
    </div>;
}

export default ChangeMap;