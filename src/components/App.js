// create your App component here
import {useState, useEffect} from 'react'
const App = () => {

const [image, setImage] = useState([])
const [isLoading, setIsLoading] = useState(true)

const url = "https://dog.ceo/api/breeds/image/random"

   useEffect(() => {
    setTimeout(() =>{
     fetch(url)
     .then(response => response.json())
     .then(data => {
        console.log(data)
        setIsLoading(false)
        setImage(data)
     })
    })
   },[])

    return ( 
        <div>
         {isLoading? <p>Loading...</p>  : <img src={image.message} alt="A Random Dog" />} 
        </div>
     );
}
 
export default  App;