import { MemeCard } from "./MemeCard";
import { MemeContext } from '../../context/Memecontext';
import { useContext,useState } from 'react';

export const Memes = () => {
  const {memeSearch,memes} =useContext(MemeContext)
  const [search,setSearch]=useState("");

  const onSearchChange=(e)=>{
    setSearch(e.target.value)
    memeSearch(search)
    console.log(search);
  }

  return (
    <>
         <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              <i className="fa fa-search" />
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search meme by title..."
                onChange={onSearchChange}
                value={search}

              />
              <span className="left-pan">
                <i className="fa fa-microphone" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="u-clearfix u-grey-10 u-section-1" id="sec-8fdd">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              {memes.map(x => <MemeCard key={x._id} data={x} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}