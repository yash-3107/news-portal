import "./categories_.css"
function Categories({clickedAttribute}){
return(
    <div className="categories">
        
        
        <h4 onClick={(e) => clickedAttribute(e.target.textContent.toLowerCase())}>Business</h4>
      
        <h4 onClick={(e) => clickedAttribute(e.target.textContent.toLowerCase())}>Entertainment</h4>
        
        
        <h4 onClick={(e) => clickedAttribute(e.target.textContent.toLowerCase())}>Health</h4>
        <h4 onClick={(e) => clickedAttribute(e.target.textContent.toLowerCase())}>General</h4>
        <h4 onClick={(e) => clickedAttribute(e.target.textContent.toLowerCase())}>Science</h4>
        <h4 onClick={(e) => clickedAttribute(e.target.textContent.toLowerCase())}>Sports</h4>
      
        <h4 onClick={(e) => clickedAttribute(e.target.textContent.toLowerCase())}>Technology</h4>
        
    </div>
)
}
export default Categories