import "./styles.css";

const Home = ({ generateCards }) => {
  return (
    <div className="home-page">
      <h3 className="home-page__title">Seja bem vindo ao Torneio Tribruxo!</h3>
      <button className="home-page__button" onClick={generateCards}>
        Sortear competidores
      </button>
    </div>
  );
};

export default Home;
