import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useHistory } from 'react-router-dom';


const Pediatria = props => {
    const history = useHistory();

    return (
        <>
            <br />
            <h1 class="text-center">Pediatría</h1>
            <button className="btn btn-primary" onClick={() => history.goBack()}>Go back</button>

            {/* <h2 class="ml-5">Elige el grupo etareo</h2>

<Link to={"/pediatria"} type="button" class="btn btn-primary">Pediatría</Link>
<Link to={"/adulto"} type="button" class="btn btn-primary">Adulto</Link>
<Link to={"/adultoMayor"} type="button" className="btn btn-primary">Adulto Mayor</Link> */}
        </>
    )
}

export default Pediatria;