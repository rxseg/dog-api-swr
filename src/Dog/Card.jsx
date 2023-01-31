export const Card = ({ url }) => {
  return (
    <div className="main-container">
      <img src={url} />
      <div className="texto">
        {" "}
        <h1>Un perro</h1>
        <br />
        <p>Totalmente peligroso pá</p>
        <br />
        <div className="btn-container">
          <button onClick={() => window.location.reload()}><span></span>Siguiente</button>
        </div>
      </div>
    </div>
  );
};
