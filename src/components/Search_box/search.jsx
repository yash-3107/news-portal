import { useState } from 'react';
import "./search_.css"
import { Link } from 'react-router-dom';
function Search(){
    const [text,setText] = useState('');
return(
    <div className='search_box'>
          <input type="text" placeholder="search something..." onChange={(e) =>setText(e.target.value)}/>
          <Link id={`searching`} to={`/filter/:${text}`}>
              {`Go`}
          </Link>
          
    </div>
)
}
export default Search