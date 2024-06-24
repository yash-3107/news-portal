import "./Details_.css"
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
function Details(){
    const {state} = useLocation();
    console.log(state);
return(
    <div className="detailsx">
                <div className="style_boxx">
                    <h5>{state.title}</h5>
                    <img src={state.image} alt={state.title} />
                    <p>{state.description}</p>
                    <a href={state.more_info} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
        </div>
)
}
export default Details