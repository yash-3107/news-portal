import { useEffect, useState } from "react";
import "./filter_.css"
import { useParams } from "react-router-dom";
import axios from "axios"
function Filter(){
    const [articlesCNN,setCNN] = useState([])
    const [articlesFOX,setFOX] = useState([])
    
    const {text} = useParams();
    async function downloadData(){
    try{
            let response_fox = await axios.get("https://saurav.tech/NewsAPI/everything/fox-news.json");
        let response_cnn = await axios.get("https://saurav.tech/NewsAPI/everything/cnn.json");

        const results_fox = response_fox.data.articles;
        const results_cnn = response_cnn.data.articles;

        let display_fox = results_fox.map((item) => (
            {
                title:item.title,
                image:item.urlToImage,
                description:item.description
            }
        ))
        let display_cnn = results_cnn.map((item) => (
            {
                title:item.title,
                image:item.urlToImage,
                description:item.description
            }
        ))
        const lowerCaseText = text.trim().toLowerCase();
        console.log("Lowercase Search Text:", lowerCaseText);
        
        const filtered_cnn = display_cnn.filter((item) => {
            const title = item.title.toLowerCase();
            console.log(`Checking if "${title}" includes "${lowerCaseText}":`, title.includes(lowerCaseText));
            return title.includes(lowerCaseText);
        });

        const filtered_fox = display_fox.filter((item) => {
            const title = item.title.toLowerCase();
            console.log(`Checking if "${title}" includes "${lowerCaseText}":`, title.includes(lowerCaseText));
            return title.includes(lowerCaseText);
        });

        console.log("Filtered CNN Articles:", filtered_cnn);
        console.log("Filtered Fox Articles:", filtered_fox);
    }
        catch(err)
        {
            console.error(err)
        }
          

    }
    useEffect(() => {
        if(text)
            downloadData()
    },[text])

return `hi`
}
export default Filter