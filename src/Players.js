// import React, { Component } from 'react'
// export default class player extends Component {
//     render() {
//         return (
//             <div className='container'>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/cr.jpg' alt='' />
//                         <h3>Cristiano Ronaldo</h3>
//                         <p className='title'>Manchester United</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/kante.jpg' alt='' />
//                         <h3>Kante</h3>
//                         <p className='title'>Chelsea</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/messi.jpg' alt='' />
//                         <h3>Messi</h3>
//                         <p className='title'>PSG</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/neymar.jpg' alt='' />
//                         <h3>Neymar</h3>
//                         <p className='title'>PSG</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/kane.jpg' alt='' />
//                         <h3>Kane</h3>
//                         <p className='title'>Tottemham</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/haaland.jpg' alt='' />
//                         <h3>Haaland</h3>
//                         <p className='title'>Manchester City</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

import React from 'react'
import { Players } from '../src/shared/ListOfPlayers'
import { useState } from 'react'
 function Player() {
  const [player, setPlayer] = useState([])
    return (
    <div className='container'>
        {Players.map((player)=>(
           <div className='column'>
           <div className='card'>
           <img src={player.img}/>
             <h3>{player.name}</h3>
             <p className='title'></p>
             <p><button onClick={()=>{setPlayer(player)}}><a href='#popup1' id='openPopUp'>Detail </a></button></p>
           </div>
         </div>
        ))}
        <div id='popup' className='overPlayer'>
          <div className='popup'>
            <img src={player.img}/>
            <h2>{player.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              {player.info}
            </div>
          </div>
        </div>
    </div>
  )

}

export default Player;