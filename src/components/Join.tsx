import './styles/Join.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import McButton from './McButton';
import CreateSetting from './CreateSetting';

const Join: React.FC = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState<string>('');
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        fetch('/items.json')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.error("Error:",err));
    }, []);

    const toGame = () => {
        let map_names = code.split(':').filter(name => name != '');
        let map = map_names.map(name => items.find(item => item.name === name));
        navigate('/map', {state: {map: map, size: Math.sqrt(map.length), code: code}});
    }

    return <div className='join-area'>
        <span style={{"fontSize": "30px"}}>Konfiguracja mapy</span>
        <textarea className='code-area' onChange={(e) => setCode(e.target.value)}></textarea>
        <McButton name='Generuj' width={"150px"} height={"65px"} fun={ toGame }/>
    </div>
}

export default Join;