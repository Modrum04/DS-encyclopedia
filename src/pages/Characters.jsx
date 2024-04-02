import { charactersClasses } from "../datas/datas.js";
import Card from "../components/Card.jsx";
import { useOutletContext } from "react-router-dom";

function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useOutletContext();

  return (
    <div className="cards-container">
      {charactersClasses.map((character) => {
        return (
          <Card
            character={character}
            setSelectedCharacter={setSelectedCharacter}
            selectedCharacter={selectedCharacter}
          />
        );
      })}
    </div>
  );
}

export default Characters;
