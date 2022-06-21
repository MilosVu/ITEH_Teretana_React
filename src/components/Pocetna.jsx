import React, { Component } from 'react';
import TrenerCardComponent from './Ponuda/PonudaCardComponent';
import '../css/ponudaComponent.css'
import PonudaCardComponent from './Ponuda/PonudaCardComponent';

class Pocetna extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ponude: props.data.ponude,
            treneri: props.data.treneri,
            istaknuti: []
        };
    }

    componentDidMount() {
        console.log(this.state.ponude);
        console.log(this.state.treneri);
        // let istaknuti = [];
        // for (let i = 0; i < this.state.ponude.count || i < 3; i++) {
        //     istaknuti.push(this.state.ponude[i]);
        // }

        // this.setState({
        //     "istaknuti": istaknuti,
        // });
    }

    render() {
        return (
            <div>
                <div className="main-picture">
                    <div className='main-text'>
                        <h1>Dobrodosli</h1>

                        <button className="btn"><a href="#">Pocni sada!</a></button>
                    </div>
                </div>

                <div className="supporting">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <h2>Najbolji treneri</h2>
                                <p>Profesionalni obuceni treneri spremni da pomognu.</p>
                            </div>
                            <div className="col-md-4">
                                <h2>Profesionalna oprema</h2>
                                <p>Oprema najviseg kvaliteta.</p>
                            </div>

                            <div className="col-md-4">
                                <h2>Zasiguran napredak</h2>
                                <p>Ostvarite zeljene rezultate u rekordnom roku.</p>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                </div>


                <div className="rest">
                    <div className="container">
                        <h1>Trening. Odmor. Oporavak. Trening. </h1>
                    </div>
                </div>
                <div className="supporting">
                    <div className="container">

                        <h1>Pogledajte nase ponude</h1>
                        <div className="grid">
                            {
                                this.state.ponude.map(
                                    ponuda =>
                                        <PonudaCardComponent ponuda={ponuda} />
                                )
                            }
                        </div>
                        <button type="button" className="btn"><a>Saznaj vise</a></button>
                    </div>
                </div>

                <div className="footer">
                    <div className="container">
                        <h1>Pogledajte nasu opremu</h1>
                        <button type="button" className="btn"><a>Saznaj vise</a></button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Pocetna;