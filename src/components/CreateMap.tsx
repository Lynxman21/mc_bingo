import CreateSetting from "./CreateSetting";
import McButton from "./McButton";
import './styles/CreateMap.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

type Item = {
    "name": string,
    "image": string,
    "difficulty": number
}

const CreateMap: React.FC = () => {
    const navigate = useNavigate();
    const [num, setNum] = useState(0);
    const [mid, setMid] = useState(0);
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL+'/items.json')
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error:', error));
    }, []);

    const randomByMood = (out: Item[], mood: number, len: number) => {
        let arr = items.filter(item => item.difficulty === mood);
        let num: number;

        if (len > arr.length) {
            alert("Za mało elementów o danym poziomie trudności " + mood);
            return false;
        }

        for (let i=0; i<len;i++) {
            num = Math.floor(Math.random() * arr.length);
            out.push(arr[num]);
            arr.splice(num,1);
        }

        return true;
    };

    const generateMap = (map: Item[]) => {
        if (mid < 0 || mid > num*num - num) {
            alert("Niepoprawna ilość bloków medium");
            return false;
        }

        if (num * num - mid - num > 0) {
            if (!randomByMood(map, 1, num * num - mid - num)) return false;
        }
        if (!randomByMood(map, 2, mid)) return false;
        if (!randomByMood(map, 3, num)) return false;

        //Sort
        let hard = map.filter(element => element.difficulty === 3);

        for (let i=0; i<num*num; i++) {
            let j = Math.floor(Math.random() * num*num);
            [map[i], map[j]] = [map[j], map[i]];
        }
        
        for (let i=0; i<num; i++) {
            let index = map.findIndex(element => element === hard[i]);
            [map[index], map[i * num + i]] = [map[i * num + i], map[index]];
        }

        return true;
    };


    const toChangeMap = () => {
        if (num === 0) {
            alert("Podaj bok mapy");
            return;
        }

        let map: Item[] = [];
        const success = generateMap(map);
        if (!success) return;
        console.log(map);
        navigate("/change", { state: { map: map, size: num } } );
    };

    return <div className="create-map">
        <CreateSetting text='Bok mapy' setNum={setNum}/>
        <CreateSetting text='Ilość bloków medium' name="mid" setNum={setMid}/>
        <McButton name='Stwórz mape' width={"250px"} height={"75px"} fun={toChangeMap} />
    </div>;
};

export default CreateMap;