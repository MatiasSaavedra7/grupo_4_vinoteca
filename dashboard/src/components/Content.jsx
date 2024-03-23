import { Route, Routes } from "react-router-dom";

import Genres from "./Genres";
import Error404 from "./Error404";
import GenreDetail from "./GenreDetail";
import Wines from "./Wines";
import Statistics from "./Statistics/Statistics";
import PreSales from "./PreSales/PreSales";

export default function ContentWrap() {
  return (
    <>
      <main className="content-wrap">
        <Routes>
          <Route path="/" exact element={<PreSales />} />
          <Route path="/genres" exact element={<Genres />} />
          <Route path="/genres/:id" element={<GenreDetail />} />
          <Route path="/wines" element={<Wines />} />
          <Route
            path="/statistics"
            element={
              <Statistics
                props={[
                  {
                    titulo: "Cantidad de vinos",
                    cifra: 15,
                    icono: "bi bi-film",
                    colorIcono: "cornflowerblue",
                  },
                  {
                    titulo: "Categorias",
                    cifra: 12,
                    icono: "bi bi-tags-fill",
                    colorIcono: "orange",
                  },
                  {
                    titulo: "Total ventas",
                    cifra: 489.567,
                    icono: "bi bi-currency-dollar",
                    colorIcono: "green",
                  },
                ]}
              />
            }
          />
          <Route component={Error404} />
        </Routes>

      </main>
    </>
  );
}
