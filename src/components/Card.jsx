import { Link } from "react-router-dom";

function Card({ character, setSelectedCharacter, selectedCharacter }) {
  const { startingClass, description, startingstuff, avatar } = character;
  const {
    level,
    vigor,
    attunement,
    endurance,
    vitality,
    strenght,
    dexterity,
    intelligence,
    faith,
    luck,
  } = character.stats;

  const handleClickSelectCharacter = () => {
    setSelectedCharacter({ character });
  };

  return (
    <Link
      className="card"
      onClick={handleClickSelectCharacter}
      to={"/builder"}
      context={[selectedCharacter, setSelectedCharacter]}
    >
      <div className="class-container">
        <h2>Class : {startingClass}</h2>
        <p>{description}</p>
        <p>Starting stuff : {startingstuff}</p>
        <ul>
          <h3>Starting's attributes</h3>
          <li>level : {level}</li>
          <li>vigor : {vigor}</li>
          <li>attunement : {attunement}</li>
          <li>endurance : {endurance}</li>
          <li>vitality : {vitality}</li>
          <li>strenght : {strenght}</li>
          <li>dexterity : {dexterity}</li>
          <li>intelligence : {intelligence}</li>
          <li>faith : {faith}</li>
          <li>luck : {luck}</li>
        </ul>
      </div>
      <img src={avatar} />
    </Link>
  );
}

export default Card;
