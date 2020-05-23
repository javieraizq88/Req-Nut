import React, { useContext } from 'react';


const AdultoERCcontextura = props => {
    // let numeroTallaCarpo = prompt("talla en (cm)");
    // let numeroCcarpo = prompt("Circunferencia carpo en (cm)");
    
    // function Ccarpo(numeroTallaCarpo,numeroCcarpo) {
    //     return numeroTallaCarpo % numeroCcarpo
    // }
    

    return (
            
<>

            <br />
            <br />
            <h4 className="ml-5">Contextura</h4>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <form>
                            <div className="form-row">
                                <div class="form-group col-md-4">
                                    <p><label for="talla-carpo">Talla</label></p>
                                </div>
                                <div class="form-group col-md-8">
                                    <input type="text" class="form-control" id="numeroTallaCarpo" placeholder="Talla (cm)" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div class="form-group col-md-4">
                                    <p><label for="Ccarpo">Circunferencia de carpo</label></p>
                                </div>
                                <div class="form-group col-md-8">
                                    <input type="text" class="form-control" id="Ccarpo" placeholder="Eircunferencia del carpo (cm)" />
                                </div>
                            </div>

                        </form>
                        <button className="ml-5">Resultado</button>
                    </div>
                    <img src="/img/adulto/ERC/C-carpo.jpg" />
                </div>
            </div> 
</>

    )
}

export default AdultoERCcontextura;