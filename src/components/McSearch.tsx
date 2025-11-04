import React from "react";
import { useState, useEffect } from "react";
import "./styles/McSearch.css";

type Item = {
    name: string;
    image: string;
    difficulty: number;
}

type SearchProps = {
    fun: React.Dispatch<React.SetStateAction<Item | null>>;
    map: Item[];
}

const McSearch: React.FC<SearchProps> = ( {fun, map}: SearchProps) => {
    const [ items, setItems ] = useState<Item[]>([]);
    const [ search, setSearch ] = useState("");

    useEffect(() => {
        fetch('/items.json')
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error:', error));
    }, []);

    const filtered = items.filter(opt => (opt.name.toLowerCase().includes(search.toLowerCase()) && map.findIndex(i => i.name === opt.name) === -1));

    const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedName = e.target.value;
        const selectedItem = filtered.find(item => item.name === selectedName) || null;
        fun(selectedItem);
    }

    return <div className="new-item">
        <input type="text" placeholder="Szukaj..." onChange={e => setSearch(e.target.value)}/>
        <select className="options" onChange={handleClick} size={5}>
            {filtered.map(item => (
                <option key={item.name} value={item.name}>{item.name + " [" + item.difficulty + "]"}</option>
            ))}
        </select>
    </div>
}

export default McSearch;