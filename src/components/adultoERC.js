import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useHistory } from 'react-router-dom';
import AdultoERCcontextura from './adultoERCcontectura';


const AdultoERC = props => {
    const history = useHistory();

    return (
        <>
            <br />
            <h1 className="text-center">Adulto ERC</h1>
            <button className="btn btn-primary ml-2" onClick={() => history.goBack()}>Volver a Adulto</button>

            <AdultoERCcontextura />



        </>
    )
}

export default AdultoERC;