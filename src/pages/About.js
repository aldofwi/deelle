import React from 'react'

function About() {
    return (
        <html>
        
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>About</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/5.1.0/css/bootstrap.min.css" />
        </head>
        
        <div className='about'>
            <h1>À propos</h1>
            <p className="alinea"></p>

            <figure className="text-center">
                    <blockquote className="blockquote">
                        <p className="mb-3"><i>Déelle pratique un stand-up très efficace. </i></p>
                        <p className="mb-3"><i>Les vannes tombent au bon endroit et font  </i></p>
                        <p className="mb-3"><i>leur petit effet. Voici une artiste que nous </i></p>
                        <p className="mb-3"><i>suivons depuis quelques temps </i></p>
                        <p className="mb-3"><i>et qui commence à grandir. </i></p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <p className="alinea">—<cite title="Source Title"><b>Kandidator</b></cite></p>
                    </figcaption>
                </figure>

                <p className="alinea"></p>
                <p className="alinea"></p>
                <p className="alinea"></p>

                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p className="mb-3"><i>Cette forte tête a commencé en 2015, </i></p>
                        <p className="mb-3"><i>d’abord par le théâtre d’impro puis </i></p>
                        <p className="mb-3"><i>en écrivant ses propres sketchs, </i></p>
                        <p className="mb-3"><i>pour amener une nouvelle touche </i></p>
                        <p className="mb-3"><i>féminine & humoristique. </i></p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <p className="alinea">—<cite title="Source Title"><b>Ouest France</b></cite></p>
                    </figcaption>

                </figure>

        </div>
    </html>
    )
}

export default About