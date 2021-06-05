import { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState('');

  const regex = /\W/;
  const handleClick = (e) => {
    if(result.slice(-1).match(regex) && e.target.name.match(regex)){
      setResult(result.replace(result.slice(-1), e.target.name));
    } else if (result === '' && e.target.name.match(regex)){
      setResult('');
    } else {
      setResult(result + e.target.name);
    }
  }

  const clear = () => {
    setResult('');
  }

  const back = () => {
    setResult(result.slice(0,-1))
  }

  const formatter = (result) => {
    let str = result.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  } 

  const answer = () => {
    try {
    if(result === ''){
      setResult('');
    } else if (result.slice(-1).match(regex)){
      setResult(result);
    } else {
        setResult(parseFloat(eval(result).toFixed(3)).toString());
    }
  } catch(err){
    setResult(result)
  }
  }

  return (
    <div className="container">
      <form>
        <input type='text' value={formatter(result)} readOnly/>
      </form>

      <div className='keypads'>
        <button className='diff' onClick={back}>&#8656;</button>
        <button className='diff' name='/' onClick={handleClick}>&divide;</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button className='diff' name='*' onClick={handleClick}>x</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button className='diff' name='-' onClick={handleClick}>-</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button className='diff' name='+' onClick={handleClick}>+</button>
        <button name='0' onClick={handleClick}>0</button>
        <button id='equal' onClick={answer}>=</button>
        <button name='.' onClick={handleClick}>.</button>
        <button id='clear' onClick={clear}>Clear</button>
      </div>
      
    </div>
  );
}

export default App;
