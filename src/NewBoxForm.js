import { useState } from "react"
import './NewBoxForm.css';

const NewBoxForm = ({addSquare}) => {
    const INITIAL = {
        width:"",
        height:"",
        color:""
    }
    const [formData, setFormData] = useState(INITIAL);
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addSquare({...formData});
        setFormData(INITIAL);


    }


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Enter Color</label>
            <input type="text" id="color" name="color" value={formData.color} onChange={handleChange}/>

            <label htmlFor="width" id="width" name="width" value={formData.width}>Width:</label>
            <input type="text" id="width" name="width" value={formData.width} onChange={handleChange}/>

            <label htmlFor="height">Height:</label>
            <input type="text" id="height" name="height" value={formData.height} onChange={handleChange}/>
            <button>Add</button>


        </form>
    )
}

export default NewBoxForm