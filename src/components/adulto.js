import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useHistory } from 'react-router-dom';


const Adulto = props => {
    const history = useHistory();

    return (
        <>
            <br />
            <h1 class="text-center">Adulto</h1>
            <button className="btn btn-primary" onClick={() => history.goBack()}>Volver</button>

            <Link to={"/adulto/erc"} type="button" class="btn btn-primary">ERC</Link>

        </>
    )
}

export default Adulto;