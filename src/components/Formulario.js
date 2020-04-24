import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: ""
  });

  // usar el context
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  // Función para leer los contenidos

  const obtenerDatosBusqueda = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={e => {
        e.preventDefault();
        console.log("nonnnnnnnnn");
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingredientes</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Buscar por Ingredientes" name="nombre" onChange={obtenerDatosBusqueda} />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="categoria" onChange={obtenerDatosBusqueda}>
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map(categoria => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input type="submit" className="btn btn-block btn-primary" value="Buscar Bebidas" />
        </div>
      </div>
    </form>
  );
};

export default Formulario;