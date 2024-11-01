import React, { useState } from 'react';
import './register.css'

function register() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor o realizar otras acciones
    console.log('Datos del formulario:', { usuario, contrasena, correo, nombre });
  };

  return (
    <div>
      <img src="ruta_a_tu_imagen.png" alt="Avatar" />
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </label>
        <label>
          Correo:
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </label>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <button type="submit">Crear Cuenta</button>
      </form>
      <p>¿Ya tiene cuenta?</p>
    </div>
  );
}

export default register;