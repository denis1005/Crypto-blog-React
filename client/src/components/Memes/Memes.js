import { MemeCard } from "./MemeCard";

export const Memes=({memes})=>{
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