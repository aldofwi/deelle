import React from 'react'

function Contact() {
    return (
    <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Let's follow each other</title>
            <link rel="stylesheet" href="App.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </head>

        <div className='contact'>
            
            <div className="social-menu"> 
                <ul>
                    <a href="https://www.instagram.com/deelle_1" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/Deelle.humour" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.tiktok.com/@deelle_1" target="_blank" rel="noreferrer"><i className="fab fa-tiktok"></i></a>
                    <a href="https://www.twitter.com/Deelle_humour" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.youtube.com/channel/UCW6Nd_ElHwN9_GBkKPeyFFg" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a>
                </ul>            
            </div>

            <div className="block contactBlock">
                <div className="container fluid">
                    <div className="titleHolder">
                        
                    <h1>On se follow ?</h1>
                    <p>_______________________________</p>
                    <p className="alinea"></p>
                    <p><i>Je réponds dès que possible</i></p>          
            
                    </div>
                </div>
            </div>

        </div>
    </html>
    )
}

export default Contact