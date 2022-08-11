
export const CryptoCards=()=>{
   return (
    <div className="promos">  
    <div className="promo">
      <div className="deal">
        <span>Premium</span>
        <span>This is really a good deal!</span>
      </div>
      <span className="price">$79</span>
      <ul className="features">
        <li>Some great feature</li>
        <li>Another super feature</li>
        <li>And more...</li>   
      </ul>
      <button>Sign up</button>
    </div>
    <div className="promo scale">
      <div className="deal">
        <span>Plus</span>
        <span>This is really a good deal!</span>
      </div>
      <span className="price">$89</span>
      <ul className="features">
        <li>Some great feature</li>
        <li>Another super feature</li>
        <li>And more...</li>   
      </ul>
      <button>Sign up</button>
    </div>
    <div className="promo">
      <div className="deal">
        <span>Basic</span>
        <span>Basic membership</span>
      </div>
      <span className="price">$69</span>
      <ul className="features">
        <li>Choose the one on the left</li>
        <li>We need moneyy</li>
        <li>And more...</li>   
      </ul>
      <button>Sign up</button>
    </div>
    </div>
   );
}