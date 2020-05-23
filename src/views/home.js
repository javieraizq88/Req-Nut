import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Home = props => {

    return (
        <>
            <br />
            <h1 class="text-center">Requerimientos Nutricionales</h1>

            <h2 class="ml-5">Elige el grupo etareo</h2>

            <Link to={"/pediatria"} type="button" class="btn btn-primary ml-5">Pediatría</Link>
            <Link to={"/adulto"} type="button" class="btn btn-primary ml-5">Adulto</Link>
            <Link to={"/adultoMayor"} type="button" className="btn btn-primary ml-5">Adulto Mayor</Link>
        </>
    )
}

export default Home;