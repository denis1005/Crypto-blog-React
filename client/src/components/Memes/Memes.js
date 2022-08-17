import { MemeCard } from "./MemeCard";
import {useEffect, useState} from 'react'

import * as memeServices from "../../Service/memeServices"


export const Memes=()=>{

    const [memes,setMemes]=useState([]);

    useEffect(()=>{
        memeServices
      .getAll()
      .then(result=>{
        setMemes(result);
      });
    },[])
    
   return(

    
    <>
    <section className="u-clearfix u-grey-10 u-section-1" id="sec-8fdd">
  <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
    <div className="u-expanded-width u-list u-list-1">
      <div className="u-repeater u-repeater-1">
        
           {memes.map(x=><MemeCard key={x._id} data={x}/>)}
        
    
      </div>
    </div>
  </div>
</section>

</>
   );
}