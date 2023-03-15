import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './BoxList.css';
import { v4 as uuidv4 } from 'uuid';


const BoxList = () => {
    const INITIAL_state = [
        {color: "blue",width:200,height:200,id:uuidv4()}
    ];

    const [square, setSquare] = useState(INITIAL_state);

    const addSquare = (newSquare) => {
        setSquare(square => ([...square, {...newSquare,id:uuidv4()}]))
        
    }

    const removeSquare = (id) => {
        console.log("?!");
        setSquare(square.filter((object) => object.id === id));

    }

    return(
        <div className="BoxList">
            < NewBoxForm addSquare={addSquare}/>
            {square.map((square,id) => <Box key={id} id={uuidv4()} color={square.color} width={square.width} height={square.height} removeSquare={removeSquare}/>)}
        </div>
        
    )

}

export default BoxList