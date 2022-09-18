import React from 'react'

function Playlist() {
    return (
    <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Playlist</title>
            <link rel="stylesheet" href="App.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </head>

        <div className='frame'>
        <iframe 
            width="800" height="400" 
            src="https://www.youtube.com/embed/videoseries?list=PLDJ_GnbrLoubx4mo5o2Z3xKrdcE5Ch9Ua" 
            title="YouTube video player" frameBorder="10" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        </div>
    </html>
    )
}

export default Playlist