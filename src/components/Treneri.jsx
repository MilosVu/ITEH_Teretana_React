import React, { Component } from 'react';
import TrenerCardComponent from './Ponuda/PonudaCardComponent';
import '../css/ponudaComponent.css'

class Treneri extends Component {

    constructor(props) {
        super(props);
        this.state = { "treneri": props.treneri };
    }

    componentDidMount() {
        console.log(this.state.treneri);
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