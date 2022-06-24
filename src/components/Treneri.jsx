import React, { Component } from 'react';
import '../css/ponudaComponent.css'
import TrenerCardComponent from './Trener/TrenerCardComponent';

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
            <div class="container">
                <div class="row items">
                    {
                        this.state.treneri.map(
                            trener =>
                                <TrenerCardComponent trener={trener} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Treneri;