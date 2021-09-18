import "./styles.css";

const StudentCard = ({ character }) => {
  const { name, house, image, dateOfBirth } = character;
  return (
    <div className="card-box">
      <img className="card-box__image" alt={name} src={image} />
      <h3 className="card-box__name">{name}</h3>
      <p className="card-box__birthday">{dateOfBirth}</p>
      <p className="card-box__house">{house}</p>
    </div>
  );
};

export default StudentCard;
