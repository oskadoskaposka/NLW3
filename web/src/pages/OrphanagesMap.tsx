import React from "react"
import {Link} from "react-router-dom"
import {FiPlus} from "react-icons/fi"
import { Map, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import "../styles/pages/OrphanagesMap.css"
import mapMarkerImg from "../images/map-marker.svg"

function OrphanagesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                
                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>    
                </footer>
            </aside>

                <Map
                    center ={[-23.6096508,-46.5643787]} 
                    zoom={15} 
                    style={{width: "100%", height: "100%"}}
                >
                    {/* Tile Layer Open Source da open street map, gratuito porém um pouco feio 
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                     */}
                    
                    {/* Tile Layer do mapBox, lembrando que é necessário um token no arquivo .env, portanto precisa ficar em formato para poder
                    ler variáveis, por isso as chaves e o dólar DENTRO DA CRASE*/}
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2X?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    /> 

                </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}

export default OrphanagesMap