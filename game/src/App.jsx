import logo from './logo.svg';
import './App.css';

function App() {

  let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

  const pickFighter = ()=>{
    let randomNum1 = Math.floor(Math.random()*fighters.length)
    let randomNum2 = Math.floor(Math.random()*fighters.length)

    document.getElementById("stage").innerHTML = fighters[randomNum1] + "VS" + fighters[randomNum2]
  }
  return (
    <div className="App">
      <div className="app-game">
     <h1>Emoji <br />
     Fighter</h1>
     <div id="stage"></div>
     <button id='fightButton' onClick={()=>pickFighter()}>Pick Fighters</button>
    </div>
    </div>
  );
}

export default App;
