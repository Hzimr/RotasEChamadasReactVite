import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h3>Página não Encontrada</h3>
      <Link to={"/"}>
        <p>Voltar</p>
      </Link>
    </>
  );
};

export default NotFound;
