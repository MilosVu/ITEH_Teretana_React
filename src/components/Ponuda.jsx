import React, { Component } from 'react';
import TrenerCardComponent from './Ponuda/PonudaCardComponent';
import '../css/ponudaComponent.css'

class Ponuda extends Component {

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
                                <PonudaCardComponent trener={trener} />
                        )
                    }

                </div>
            </div >
        );
    }
}

export default Ponuda;