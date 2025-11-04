import React from "react";
import McText from "./McText";
import './styles/CreateSettings.css';


type CreateSettingProps = {
    text: string;
    setNum?: React.Dispatch<React.SetStateAction<number>>;
    setStr?: React.Dispatch<React.SetStateAction<string>>;
    name?: string;
    fun?: () => void;
};

const CreateSetting: React.FC<CreateSettingProps> = ({ text, setNum, setStr, name, fun }: CreateSettingProps) => {
    return <div>
        <div className="Setting">
            {text}
            <McText name={name} setNum={setNum} setStr={setStr} fun={fun}/>
        </div>
    </div>
}

export default CreateSetting;