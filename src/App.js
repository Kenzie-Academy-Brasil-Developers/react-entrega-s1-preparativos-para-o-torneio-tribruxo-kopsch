import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import { useState, useEffect } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [visibleCharacters, setVisibleCharacters] = useState([]);
  const [isHomePage, setIsHomePage] = useState(true);
  const houses = [];

  useEffect(
    () =>
      fetch("https://hp-api.herokuapp.com/api/characters/students")
        .then((response) => response.json())
        .then((response) => setCharacterList(response))
        .catch((err) => console.log(err)),
    []
  );

  const generateCards = () => {
    setIsHomePage(false);
    const randomNumArr = [];
    while (randomNumArr.length < 3) {
      const randomNum = Math.floor(Math.random() * characterList.length);
      console.log(randomNum);
      if (
        !randomNumArr.includes(randomNum) &&
        !houses.includes(characterList[randomNum].house)
      ) {
        randomNumArr.push(randomNum);
        houses.push(characterList[randomNum].house);
      }
    }
    const [first, second, third] = randomNumArr;
    setVisibleCharacters([
      characterList[first],
      characterList[second],
      characterList[third],
    ]);
    console.log(visibleCharacters);
  };

  return (
    <div className="App">
      {isHomePage ? (
        <Home
          visibleCharacters={visibleCharacters}
          generateCards={generateCards}
        />
      ) : (
        <Main
          visibleCharacters={visibleCharacters}
          generateCards={generateCards}
        />
      )}
    </div>
  );
}

export default App;
