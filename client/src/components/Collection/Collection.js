import { MemeCard } from "../Memes/MemeCard";
import { MemeContext } from "../../context/Memecontext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export const Collection=()=>{
    const{user}=useContext(AuthContext)
    let {memes}=useContext(MemeContext)
    memes=memes.filter(x=>x._ownerId===user._id)
   

    return(
        <>
        <section className="u-clearfix u-grey-10 u-section-1" id="sec-8fdd">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="u-expanded-width u-list u-list-1">
              <div className="u-repeater u-repeater-1">
                {memes.length > 0
                  ? memes.map(x => <MemeCard key={x._id} data={x} />)

                  : <div
                    style={{
                      width:'1505px'
                    }}
                    >
                      <p style={
                        {
                          textAlign: "center",
                          fontSize: 'large',
                          fontWeight: "bold"
                        }
                      }>You don't have memes in your collection</p> 
                   </div> 
                }
                
              </div>
            </div>
          </div>
        </section>
      </>
    );
}