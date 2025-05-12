import { Link } from "react-router-dom"
import "./style/Country.css"


type CountryProps = {
    country: {
        code: string,
        name: string,
        emoji: string
    }
}

export default function CountryCard ({country}: CountryProps) {
    return (
        <article className="country-card">
                <Link to={`/${country.code}`}>
                    <h2>{country.name}</h2>
                    <p className="emoji">{country.emoji}</p>
                </Link>
        </article>
        
    )
}