import React, { Component } from 'react';
import ReactSelect from 'react-select';
import '../css/ponudaComponent.css'
import TrenerCardComponent from './Trener/TrenerCardComponent';
import axios from 'axios';

const options = [
    { value: 'Atletika', label: 'Atletika' },
    { value: 'Body building', label: 'Body building' },
    { value: 'Fitnes', label: 'Fitnes' },
];


function vratiTrenere() {
    return axios.get("https://iteh-domaci-default-rtdb.europe-west1.firebasedatabase.app/treneri.json").then((res) => {
        res.data.shift();
        return res.data;
    });
}

class Treneri extends Component {

    constructor(props) {
        super(props);
        this.state = {
            treneri: [],
            specijalnosti: [],
            selectedOption: null
        };
    }

    componentDidMount() {
        var specijalnosti = [];

        vratiTrenere().then(res => {
            // res.map(d => console.log(d));

            let specijalnostiPrikaz = [];

            res.forEach((r) => {
                specijalnosti.push(r.specijalnost);
            });

            specijalnosti = specijalnosti.filter(function (value, index, array) {
                return specijalnosti.indexOf(value) === index;
            });

            specijalnosti.forEach((s) => {
                specijalnostiPrikaz.push({ "value": s, "label": s });
            });

            this.setState({
                treneri: res,
                specijalnosti: specijalnostiPrikaz
            });

        });

    }



    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.specijalnosti)
        );
    };

    render() {

        return (

            <div className="container">

                {this.state.specijalnosti.length == 0 ? <p>Ucitavam</p> :
                    <ReactSelect
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={this.state.specijalnosti}
                    />
                }

                <div className="row items">

                    {
                        this.state.treneri.length == 0 ? <p>Ucitavam</p> :
                            this.state.treneri.map(
                                trener => {

                                    if (this.state.selectedOption != undefined) {
                                        if (trener.specijalnost == this.state.selectedOption.value) {
                                            return <TrenerCardComponent trener={trener} />
                                        }
                                    } else {
                                        return <TrenerCardComponent trener={trener} />
                                    }

                                }
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Treneri;