import React, { Component } from 'react';
import TrenerCardComponent from './Trener/TrenerCardComponent';
import '../css/trenerComponent.css'

let treneri = [
    {
        "ime": "Milos",
        "prezime": "Vujic",
        "specijalnost": "Atletika",
        "iskustvo": "4"
    },
    {
        "ime": "Petar",
        "prezime": "Petrovic",
        "specijalnost": "Fitnes",
        "iskustvo": "1"
    },
    {
        "ime": "Nina",
        "prezime": "Markovic",
        "specijalnost": "Body building",
        "iskustvo": "2"
    },
    {
        "ime": "Milica",
        "prezime": "Micic",
        "specijalnost": "Atletika",
        "iskustvo": "2"
    }
];

class Treneri extends Component {

    constructor(props) {
        super(props);
        this.state = { "treneri": treneri };
    }

    componentDidMount() {
        console.log(treneri);
    }

    render() {
        return (
            <div className="content-container">
            <div class="grid">

                    {
                        this.state.treneri.map(
                            trener =>
                                <TrenerCardComponent trener={trener} />
                        )
                    }

                </div>
            </div >
        );
    }
}

export default Treneri;