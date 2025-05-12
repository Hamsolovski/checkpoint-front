import { useMutation, useQuery } from '@apollo/client'
import './style/Form.css'
import { ADD_COUNTRY } from '../api/mutations'
import { FormEvent } from 'react'
import { GET_CONTINENTS, GET_COUNTRIES } from '../api/queries'
import { Continent } from "../api/types";


export default function AddCountryForm() {
    const continents = useQuery(GET_CONTINENTS)

    const [addCountry, {error, loading}] = useMutation(
        ADD_COUNTRY, 
        { refetchQueries: [{query: GET_COUNTRIES}] }
    )
    
    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);
        const formJSON = Object.fromEntries(formData.entries())
        const submission = {
            name: formJSON.name,
            emoji: formJSON.emoji,
            continent: {id: Number(formJSON.continent)},
            code: formJSON.code
        }
        console.log(submission)
        addCountry({variables: {
            data: submission
        }})
    }

    if (error) return <p>Une erreur s'est produite</p>
    if (loading) return <p>Chargement...</p>

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input name="name"/>
            </label>
            <label>
                Emoji
                <input name="emoji"/>
            </label>
            <label>
                Code
                <input name="code"/>
            </label>
            <label>
                Continent
                <select name="continent">
                    {!continents.loading && continents.data.continents.map((continent: Continent) =>
                        <option value={continent.id} key={continent.id}>
                            {continent.name}
                        </option>
                    )}
                </select>
            </label>
            <button type='submit'>Add</button>
        </form>
    )
}