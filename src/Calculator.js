import {useState} from "react";

export default function Calculator(){
    const [num,setNum]=useState("")
    const getBtnValue=(e)=>{
        setNum(num + e.target.value);
    }
    const calculate=()=>{
        setNum(eval(num));
    }
    const clear=()=>{
        setNum("");
    }
    return(
        <div className="calculator-container">
            <input className="calculator-input" type="text" value={num} />
            <div className="calculator-btn-container">
                <button className="calculator-btn" value="1" onClick={getBtnValue}>1</button>
                <button className="calculator-btn" value="2" onClick={getBtnValue}>2</button>
                <button className="calculator-btn" value="3" onClick={getBtnValue}>3</button>
                <button className="calculator-btn" value="4" onClick={getBtnValue}>4</button>
                <button className="calculator-btn" value="5" onClick={getBtnValue}>5</button>
                <button className="calculator-btn" value="6" onClick={getBtnValue}>6</button>
                <button className="calculator-btn" value="7" onClick={getBtnValue}>7</button>
                <button className="calculator-btn" value="8" onClick={getBtnValue}>8</button>
                <button className="calculator-btn" value="9" onClick={getBtnValue}>9</button>
                <button className="calculator-btn" value="0" onClick={getBtnValue}>0</button>
                <button className="calculator-btn operator" value="+" onClick={getBtnValue}>+</button>
                <button className="calculator-btn operator" value="-" onClick={getBtnValue}>-</button>
                <button className="calculator-btn operator" value="*" onClick={getBtnValue}>*</button>
                <button className="calculator-btn operator" value="/" onClick={getBtnValue}>/</button>
                <button className="calculator-btn" value="=" onClick={calculate}>=</button>
                <button className="calculator-btn" value="Ac" onClick={clear}>Ac</button>
            </div>
        </div>
    )
}
