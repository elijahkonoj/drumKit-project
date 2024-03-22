import { useEffect, useState } from 'react';



  
/**const SecondSound = [
 
    {
    keyCode: 81,
    key: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
 
  {
    keyCode: 87,
    key: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord-2.mp3"
  },

  {
    keyCode: 69,
    key: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord-3.mp3"
  },

  {
    keyCode: 65,
    key: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_Light.mp3"
  }, 
  {
    keyCode: 83,
    key: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 67,
    key: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Punchy-kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    key: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick.mp3"
  },
  {
    keyCode: 68,
    key: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  }
]**/



  
function App() {
 const [selectedKey, setSelectedKey] = useState("");
 const [soundText, setSoundText] = useState("");

  useEffect(() => {
    const handleKeyPress = (e) => {
switch (e.key.toUpperCase()) {
  case 'Q':
    PlaySound('Q');
    setSoundText("Heater-1")
    break;
  case 'W':
    PlaySound('W');
    setSoundText("Heater-2")
    break;
    case 'E':
      PlaySound('E');
      setSoundText("Heater-3")
      break;
    case 'A':
      PlaySound('A');
      setSoundText("Heater-4")
      break;
    case 'S':
      PlaySound('S');
      setSoundText("kick")
      break;
    case 'D':
      PlaySound('D');
      setSoundText("Kick-n-hat")
      break;
    case 'Z':
      PlaySound('Z');
      setSoundText("Clap")
      break;
    case 'X':
      PlaySound('X');
      setSoundText("Open HH")
      break;
    case 'C':
      PlaySound('C');
      setSoundText("Close HH")
      break;
  default:
    break; 
}
console.log(e.key)
};
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
     
  }, []);

 

  const FirstSound = [
    {
      keyCode: 81,
      key: "Q",
      description: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
   
    {
      keyCode: 87,
      key: "W",
      description: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
  
    {
      keyCode: 69,
      key: "E",
      description: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
  
    {
      keyCode: 65,
      key: "A",
      description: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    }, 
    {
      keyCode: 83,
      key: "S",
      description: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 68,
      key: "D",
      description: "Kick-n-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    
    {
      keyCode: 90,
      key: "Z",
      description: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 88,
      key: "X",
      description: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 67,
      key: "C",
      description: "closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
   
  ];

 
  function PlaySound (selector) {
    const audio = document.getElementById(selector);
     audio.currentTime = 0;
     audio.play();
    setSelectedKey(selector);
  
  }

 

     return <div className="container">
              <div id="drum-machine">
                  <div id="display">{selectedKey}</div>
                      <div className="drum-pads">
                           {FirstSound.map((sound) => (
                           <div className="drum-pad" id={sound.url} onClick={() => {PlaySound(sound.key)}} key={sound.key}>
                             {sound.key}
                        <audio className="clip" src={sound.url} id={sound.key} ></audio>
                           </div>))}
                      </div>
                </div>
              
                <div id='soundOutput'>{soundText}</div>
              
                
            </div>
  
}

export default App;
