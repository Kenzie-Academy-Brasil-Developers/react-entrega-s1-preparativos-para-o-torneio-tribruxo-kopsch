import StudentCard from "../StudentCard";
import "./styles.css";

const Student = ({ visibleCharacters }) => {
  return (
    <div className="card-box__list">
      {console.log(visibleCharacters)}
      {visibleCharacters.map((character) => (
        <StudentCard character={character} key={character.id} />
      ))}
    </div>
  );
};

export default Student;
