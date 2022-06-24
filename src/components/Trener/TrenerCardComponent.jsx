import React, { Component } from 'react';
import '../../css/trenerCardComponent.css'

class TrenerCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { trener: props.trener };
    }
    render() {
        return (
            <div class="col-md-3 fixCoachListHeight">
                <a class="coach p-4 position-relative" href="#">

                    <div class="coachImgContainer">
                        <div class="coachImg">
                            <img width="500" height="600" src="http://localhost:3000/blank-profile-picture-973460_640.png" class="attachment-full size-full wp-post-image" srcset="http://localhost:3000/blank-profile-picture-973460_640.png" sizes="(max-width: 500px) 100vw, 500px" />												</div>
                    </div>
                    <div class="coachContentContainer">
                        <h4 class="coachName mb-3 text-center">{this.state.trener.ime}</h4>
                        <div class="coachContent mb-3 text-center">
                            <p>Ime i prezime:  {this.state.trener.ime} {this.state.trener.prezime}</p>
                            <p>Sport: {this.state.trener.specijalnost}</p>
                            <p>Godina iskustva: {this.state.trener.iskustvo}</p>
                        </div>


                        <div class="text-center mb-3">
                            <object>
                                <a class="btn likeButton font-weight-bold text-white" href="#">VIDI PROFIL</a>
                            </object>
                        </div>
                    </div>

                </a>
            </div>
        );
    }
}

export default TrenerCardComponent;