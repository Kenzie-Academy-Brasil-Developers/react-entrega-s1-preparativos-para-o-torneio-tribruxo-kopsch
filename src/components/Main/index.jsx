import Student from "../Student";

const Main = ({ visibleCharacters, generateCards }) => {
  return (
    <div className="main-page">
      <Student visibleCharacters={visibleCharacters} />
      <button className="button-restart" onClick={generateCards}>
        Try Again
      </button>
    </div>
  );
};

export default Main;
