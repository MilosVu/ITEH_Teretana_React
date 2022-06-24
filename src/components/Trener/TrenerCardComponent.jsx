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
                            <img width="500" height="600" src="https://onefit.rs/wp-content/uploads/2021/07/milos-milosev-personalni-trener.jpg" class="attachment-full size-full wp-post-image" alt="Miloš Milošev personalni trener" srcset="https://onefit.rs/wp-content/uploads/2021/07/milos-milosev-personalni-trener.jpg 500w, https://onefit.rs/wp-content/uploads/2021/07/milos-milosev-personalni-trener-250x300.jpg 250w" sizes="(max-width: 500px) 100vw, 500px" />												</div>
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