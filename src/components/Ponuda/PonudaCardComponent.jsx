import React, { Component } from 'react';
import '../../css/ponudaComponent.css'

class PonudaCardComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ponuda: props.ponuda
        }
    }

    render() {
        return (

            <div class="card">
                <div class="card_img">
                    <img src={this.state.ponuda.slika} style={{ height: 240 + 'px' }} />
                </div>
                <div class="card_body">
                    <h2 class="card_title">{this.state.ponuda.naziv}</h2>
                    {
                        this.state.ponuda.pogodnosti.map(
                            pogodnost =>
                                <>
                                    - {pogodnost}<br/>
                                </>
                        )
                    }
                    <h6 class="designation">{this.state.ponuda.cena} €</h6>
                </div>
            </div>


        );
    }
}

export default PonudaCardComponent;