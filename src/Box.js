import './Box.css';

const Box = ({ color, width, height,id, removeSquare}) => {
    const divStyle = {
        backgroundColor: color,
        width,
        height
    }


    return(
        <div className="Box" style={divStyle} id={id}>
            <button className="Box-btn" onClick={() => removeSquare(id)}>X</button>
        </div>
    )
}

export default Box;