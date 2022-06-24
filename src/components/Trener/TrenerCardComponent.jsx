import React, { Component } from 'react';
import '../../css/trenerCardComponent.css'

class TrenerCardComponent extends Component {
    render() {
        return (
            <div>
                <div class="col-md-3 fixCoachListHeight">
                    <a class="coach p-4 position-relative" href="https://onefit.rs/treneri/beograd/milos-milosev/">

                        <div class="coachImgContainer">
                            <div class="coachImg">
                                <img width="500" height="600" src="https://onefit.rs/wp-content/uploads/2021/07/milos-milosev-personalni-trener.jpg" class="attachment-full size-full wp-post-image" alt="Miloš Milošev personalni trener" srcset="https://onefit.rs/wp-content/uploads/2021/07/milos-milosev-personalni-trener.jpg 500w, https://onefit.rs/wp-content/uploads/2021/07/milos-milosev-personalni-trener-250x300.jpg 250w" sizes="(max-width: 500px) 100vw, 500px" />												</div>
                        </div>
                        <div class="coachContentContainer">
                            <h4 class="coachName mb-3 text-center">Miloš Milošev</h4>
                            <div class="coachContent mb-3 text-center">
                                Ja sam Miloš Milošev, master profesor fizičkog vaspitanja sa 10 godina iskustva.

                                Nudim vam adekvatan program vežbanja, pomoću kojih ćete popraviti držanje, rešiti se bolova u leđima, a ujedno i smršati i zategnuti se!

                                U radu sa mnom, imaćete rezultate bez upala mišića i bolova.

                                Vidimo se na treningu!											</div>


                            <div class="text-center mb-3">
                                <object>
                                    <a class="btn likeButton font-weight-bold text-white" href="https://onefit.rs/treneri/beograd/milos-milosev/">VIDI PROFIL</a>
                                </object>
                            </div>
                            <div class="coachLikes text-onefit text-center">
                                <i class="fas fa-thumbs-up"></i> 11											</div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default TrenerCardComponent;