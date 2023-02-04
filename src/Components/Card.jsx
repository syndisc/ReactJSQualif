import "./Card.css"

export default function Card({children, ...attr}){
    
    return <div {...attr}>{children}</div>

}

export function CountryData({children, ...attr}){
    return <div>{children}</div>
}