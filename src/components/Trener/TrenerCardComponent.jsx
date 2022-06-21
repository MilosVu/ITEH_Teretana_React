import React, { Component } from 'react';
import '../../css/trenerComponent.css'

class TrenerCardComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            trener: props.trener
        }
    }

    render() {
        return (

            <div class="card">
                <div class="card_img">
                    <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" alt="" />
                </div>
                <div class="card_body">
                    <h2 class="card_title">{this.state.trener.ime}</h2>
                    <h6 class="designation">{this.state.trener.specijalnost}</h6>
                </div>
            </div>
            

        );
    }
}

export default TrenerCardComponent;