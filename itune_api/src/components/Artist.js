import React from 'react';

function Artist({artist}) {
    return (
        <div>
      
         
          



            <table className="table">
    <thead>
      <tr>
        <th>Artist Name</th>
        <th>Track </th>
        <th>image</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>      <h1>{artist.artistName}</h1></td>
        <td> <source src={artist.previewUrl}/></td>
        <td>   <img src={artist.artworkUrl100} alt=""/></td>
      
      </tr>
      <tr>
        <td>   <img src={artist.artworkUrl100} alt=""/></td>
       
      </tr>
      <tr>
        <td>  <audio controls>
                <source src={artist.previewUrl}/>
            </audio></td>
       
      </tr>
    </tbody>
  </table>
        </div>
    )
}
export default Artist;