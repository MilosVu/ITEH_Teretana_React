import React from 'react'


function Pocetna() {
    return (
        <div>
            <div class="main-picture">
                <div className='main-text'>
                    <h1>Dobrodosli</h1>

                    <button class="btn"><a href="#">Pocni sada!</a></button>
                </div>
            </div>

            <div class="supporting">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-4">
                            <h2>Najbolji treneri</h2>
                            <p>Profesionalni obuceni treneri spremni da pomognu.</p>
                        </div>
                        <div class="col-md-4">
                            <h2>Profesionalna oprema</h2>
                            <p>Oprema najviseg kvaliteta.</p>
                        </div>

                        <div class="col-md-4">
                            <h2>Zasiguran napredak</h2>
                            <p>Ostvarite zeljene rezultate u rekordnom roku.</p>
                        </div>
                    </div>

                    <div class="clearfix"></div>
                </div>
            </div>


            <div class="rest">
                <div class="container">
                    <h1>Trening. Odmor. Oporavak. Trening. </h1>
                </div>
            </div>
            <div class="supporting">
                <div class="container">
                    <h1>Pogledajte nase ponude</h1>
                    <button type="button" class="btn"><a>Saznaj vise</a></button>
                </div>
            </div>

            <div class="footer">
                <div class="container">
                    <h1>Pogledajte nasu opremu</h1>
                    <button type="button" class="btn"><a>Saznaj vise</a></button>
                </div>
            </div>

        </div>

    )
}

export default Pocetna;