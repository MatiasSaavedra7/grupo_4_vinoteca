import MoviesList from "./MoviesList";
import { Component } from "react";
import Menu from "../Menu";
import Search from "./Search";
import { useEffect, useState } from "react";

import style from "./Wines.module.css";



function Wines(){
  const [wines, setWines] = useState([]);

  useEffect(
    () => {
      fetch("http://localhost:3030/wines")
      .then((respuesta) => respuesta.json())
      .then((wines) => setWines(wines));
    }, []
  )
  return(
    <>
          <main className="content-wrap">
            <section className="content">
              <h2 className="mt-3">All the movies in the database</h2>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </thead>
                {wines.map((wine) => (
                  <WinesList wines={wine} key={wine.id} />
                ))}
              </table>
            </section>
          </main>
      </>
  )
}


export default Wines;
