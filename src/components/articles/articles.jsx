import axios from "axios";
import { useEffect, useState } from "react";
import "./articles_.css"
import Categories from "../categories/categories";
import { Link } from "react-router-dom"
import PaginationComponent from "../pagination/pagination";

function Article(){
    const [listOfArticles,setList] = useState([])
    const [prev,setPrev] = useState('')
    const [next,setNext] = useState('')
    const [category,setCategory] = useState('');
    const [url,setURL] = useState('https://saurav.tech/NewsAPI/everything/cnn.json');

    

    async function downloadArticles(){
       
        var response = await axios.get(url);
        const arrayOfArticles = response.data.articles;
        const arrayWithTitleAndImage = arrayOfArticles.map((item) => ({
            title : item.title ,
            image : item.urlToImage,
            description:item.content,
            id:item.publishedAt,
            more_info : item.url

        }))
        setList(arrayWithTitleAndImage);
    }

    useEffect(() =>{
        if(category)
        {   
            setURL(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`)
        }},[category])

    useEffect(() => {
        downloadArticles();
    },[url]);
return(
    <>
        <Categories clickedAttribute={setCategory}/>
        
        <div>
            <PaginationComponent itemsPerPage={`${10}`} data={listOfArticles} />
        </div>
            
    </>
        
)
}
export default Article;