import { Link } from 'react-router-dom'
import logoVenner from '../assets/img/venner-logo3.png'

export default function Menu() {

    return( 
        <header className="menu-wrap">
        <figure className="user">
            <div className="user-avatar">
            <Link to="/wines"> 
                <img src={logoVenner} alt="Logo Venner Vinoteca"/>
            </Link>            
            </div>
            <figcaption>
                Venner Vinoteca
            </figcaption>
            
        </figure>
        <nav>
            <section className="discover">
                <h3>Opciones</h3>
                <ul>
                <li>
                    <Link to="/">
                            <i className="bi bi-house" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                            <i className="bi bi-film" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Vinos
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-play-circle" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Categorías
                        </a>
                    </li>
                    <li>
                        <Link to="/genres">
                            <i className="bi bi-person" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Géneros
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-tags"></i>
                            - Promociones
                        </a>
                    </li>
                    <li>
                        <Link to="/statistics">
                            <i className="bi bi-graph-up"></i>
                            - Estadísticas
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
    )
    
}