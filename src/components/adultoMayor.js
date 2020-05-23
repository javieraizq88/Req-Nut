import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useHistory } from 'react-router-dom';


const AdultoMayor = props => {
    const history = useHistory();

    return (
        <>
            <br />

            <h1 class="text-center">Adulto Mayor</h1>
            <button className="btn btn-primary" onClick={() => history.goBack()}>Go back</button>

            {/* <Link to={"/reqGenerales"} type="button" class="btn btn-primary">Req generales</Link>
            <Link to={"/ERC"} type="button" class="btn btn-primary">ERC</Link>
            <Link to={"/DM"} type="button" className="btn btn-primary">Diabetes Mellitus</Link>
            <Link to={"/HTA"} type="button" className="btn btn-primary">Hipertensión Arterial</Link> */}

        </>
    )
}

export default AdultoMayor;