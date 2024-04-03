import { useOutletContext } from "react-router-dom";

function Builder() {
  const [selectedCharacter, setSelectedCharacter] = useOutletContext();

  const { startingClass, description, startingstuff, avatar } = selectedCharacter;
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
  } = selectedCharacter.stats;

  function addAttributes(stat) {
    setSelectedCharacter({
      ...selectedCharacter,
      stats: { ...selectedCharacter.stats, [stat]: selectedCharacter.stats[stat] + 1 },
    });
  }
  return (
    <>
      <h3>Consume souls</h3>
      <div className="personnal-class-container">
        <div className="personnal-card-container">
          <h2>Class : {startingClass}</h2>
          <p>{description}</p>
          <p>Starting stuff : {startingstuff}</p>
          <ul>
            <h3>Starting's attributes</h3>
            <li>
              <div>
                <h4>Level : {level} </h4>
              </div>
            </li>
            <li>
              <button onClick={() => addAttributes("vigor")}>+</button>
              <div>Vigor : {vigor} </div>
            </li>
            <li>
              <button onClick={() => addAttributes("attunement")}>+</button>
              <div>Attunement : {attunement} </div>
            </li>
            <li>
              <button onClick={() => addAttributes("endurance")}>+</button>
              <div>Endurance : {endurance} </div>
            </li>
            <li>
              <button onClick={() => addAttributes("vitality")}>+</button>
              <div>Vitality : {vitality} </div>
            </li>
            <li>
              <button onClick={() => addAttributes("strenght")}>+</button>
              <div>Strenght : {strenght} </div>
            </li>
            <li>
              <button onClick={() => addAttributes("dexterity")}>+</button>
              <div>Dexterity : {dexterity} </div>
            </li>
            <li>
              <button onClick={() => addAttributes("intelligence")}>+</button>
              <div>Intelligence : {intelligence} </div>
            </li>
            <li>
              <button onClick={() => addAttributes("faith")}>+</button>
              <div>Faith : {faith} </div>
            </li>
            <li>
              <button onClick={() => addAttributes("luck")}>+</button>
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
