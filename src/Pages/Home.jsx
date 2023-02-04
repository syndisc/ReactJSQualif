import { useQuery } from "@apollo/client"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card, { CountryData } from "../Components/Card"
import { get_all_data } from "../Library/GetAllData"
import { ThemeContext } from "../Library/theme"
import "./Home.css"


export default function Home(){

    const [fav, setFav] = useState([])
    const [current, setCurrent] = useState(0)
    const theme = useContext(ThemeContext)
    const [txt, setTxt] = useState("")

    const makeFav = (id) =>{
        let arr = [...fav]

        let search = arr.indexOf(id)

        if(search !== -1) arr.splice(search, 1)

        else arr.push(id)

        setFav(arr)

    }

    useEffect(()=>{
        console.log(txt)
    }, [txt])

    const {loading, data, error} = useQuery(get_all_data,{
    })

    if(loading) return <h1>Loading</h1>
    if(error) return <h1>{error.message}</h1>

    if(!loading) console.log(data)

    if(current === 0){
        return(
            <div>
                <div>

                <button onClick={()=>{
                    setCurrent(0)
                }}>Home</button>
                <button onClick={()=>{
                    setCurrent(1)
                }}>Search</button>
                <button onClick={()=>{
                    setCurrent(2)
                }}>Favorite</button>

                </div>
                <div className="container">
               
                
               {data.countries.map((data)=>{
   
               let isFav = fav.indexOf(data.code) !== -1
   
               return <div className="data" style={
                   {
                       backgroundColor : theme.backgroundColor
   
                   }
               }>
                   <Card key={data.code} >
                       <CountryData>
                           <div className="flex space-between text" style={{
                               color : theme.accentColor
                           }}>
                               
                               <div style={{
   
                               }}>
                                   <Link to={`/${data.code}`} onClick={()=>{
                                       sessionStorage.setItem("name", data.name)
                                   }}>
                                       {data.code}
                                       <br></br>
                                       {data.name}
                                   </Link>
                               </div>
                               <button onClick={() => makeFav(data.code, data.name)}>{isFav ? "🧡" : "🤍"}</button>
                           </div>
                       </CountryData>
                   </Card>
                   </div>
           })}</div>
            </div>
        )
    }
    else if(current === 1){
        return(
            <div>
                <div>

                <button onClick={()=>{
                    setCurrent(0)
                }}>Home</button>
                <button onClick={()=>{
                    setCurrent(1)
                }}>Search</button>
                <button onClick={()=>{
                    setCurrent(2)
                }}>Favorite</button>

                </div>
                <div>
                    <input type={"text"} onChange={(event)=>{
                        setTxt(event.target.value)
                    }}></input>
                </div>
                <div className="container">
               
                
               {data.countries.map((data)=>{
                console.log("ting")
                console.log(data.code)
   
               let isFav = fav.indexOf(data.code) !== -1
                
                if(data.code.includes(txt) || data.name.includes(txt)){
                    return <div className="data" style={
                        {
                            backgroundColor : theme.backgroundColor
        
                        }
                    }>
                        <Card key={data.code} >
                            <CountryData>
                                <div className="flex space-between text" style={{
                                    color : theme.accentColor
                                }}>
                                    
                                    <div style={{
        
                                    }}>
                                        <Link to={`/${data.code}`} onClick={()=>{
                                            sessionStorage.setItem("name", data.name)
                                        }}>
                                            {data.code}
                                            <br></br>
                                            {data.name}
                                        </Link>
                                    </div>
                                    <button onClick={() => makeFav(data.code, data.name)}>{isFav ? "🧡" : "🤍"}</button>
                                </div>
                            </CountryData>
                        </Card>
                        </div>
                }

               
           })}</div>
            </div>
        )
    }
    else if(current === 2){
        return(
            <div>
                <div>

                <button onClick={()=>{
                    setCurrent(0)
                }}>Home</button>
                <button onClick={()=>{
                    setCurrent(1)
                }}>Search</button>
                <button onClick={()=>{
                    setCurrent(2)
                }}>Favorite</button>

                </div>
                <div className="container">
               
                
               {data.countries.map((data)=>{
               let isFav = fav.indexOf(data.code) !== -1
                
                if(isFav){
                    return <div className="data" style={
                        {
                            backgroundColor : theme.backgroundColor
        
                        }
                    }>
                        <Card key={data.code} >
                            <CountryData>
                                <div className="flex space-between text" style={{
                                    color : theme.accentColor
                                }}>
                                    
                                    <div style={{
        
                                    }}>
                                        <Link to={`/${data.code}`} onClick={()=>{
                                            sessionStorage.setItem("name", data.name)
                                        }}>
                                            {data.code}
                                            <br></br>
                                            {data.name}
                                        </Link>
                                    </div>
                                    <button onClick={() => makeFav(data.code, data.name)}>{isFav ? "🧡" : "🤍"}</button>
                                </div>
                            </CountryData>
                        </Card>
                        </div>
                }

               
           })}</div>
            </div>
        )
    }
}