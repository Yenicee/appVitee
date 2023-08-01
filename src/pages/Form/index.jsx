import { useState } from "react"; // Importa el hook useState que se utiliza para manejar el estado de los inputs
import { Link } from "react-router-dom";

function Form() {
  // Declaración de los estados para los valores de los inputs
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor, si es necesario
    console.log("Valores enviados:", nombre, email, password);
  };

  return (
    <div>
      <h1>mas pruebas perri</h1>
      <div className="content-container">
        <div className="login-from">
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <label>
                Nombre:
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </label>
            </div>
            <div className="user-box">
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="user-box">
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="user-box">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;





