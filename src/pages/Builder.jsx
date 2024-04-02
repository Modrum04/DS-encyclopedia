import { useOutletContext } from "react-router-dom";

function Builder() {
  const [selectedCharacter] = useOutletContext();

  const { startingClass, description, startingstuff, avatar } = selectedCharacter.character;
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
  } = selectedCharacter.character.stats;

  return (
    <>
      <h3>Consume souls</h3>

      <div
        className="personnal-class-container"
        // style={{
        //   backgroundImage: `url(${avatar})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   backgroundSize: "contain",
        // }}
      >
        <div className="personnal-card-container">
          <h2>Class : {startingClass}</h2>
          <p>{description}</p>
          <p>Starting stuff : {startingstuff}</p>
          <ul>
            <h3>Starting's attributes</h3>
            <li>
              <button>+</button>
              <div>Level : {level} </div>
            </li>
            <li>
              <button>+</button>
              <div>Vigor : {vigor} </div>
            </li>
            <li>
              <button>+</button>
              <div>Attunement : {attunement} </div>
            </li>
            <li>
              <button>+</button>
              <div>Endurance : {endurance} </div>
            </li>
            <li>
              <button>+</button>
              <div>Vitality : {vitality} </div>
            </li>
            <li>
              <button>+</button>
              <div>Strenght : {strenght} </div>
            </li>
            <li>
              <button>+</button>
              <div>Dexterity : {dexterity} </div>
            </li>
            <li>
              <button>+</button>
              <div>Intelligence : {intelligence} </div>
            </li>
            <li>
              <button>+</button>
              <div>Faith : {faith} </div>
            </li>
            <li>
              <button>+</button>
              <div>Luck : {luck} </div>
            </li>
          </ul>
        </div>

        <img src={avatar}></img>
      </div>
    </>
  );
}

export default Builder;
