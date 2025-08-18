import { useEffect, useState} from 'react'
import '../styles/PokemonCard.css'
import api from '../utils/api'

export default function PokemonCard({id = 25}){
    const [pokemon, setPokemon] = useState(null);


    const getPokemon = async () =>{
        try{
            const response = await api.get(`${id}`)
            const data = response.data
            setPokemon({
                name: data.name,
                ps: data.stats[0].base_stat,
                image: data.sprites.front_default,
                num: data.id,
                weight: data.weight,
                height: data.height,
                abilitie: data.abilities[0].ability.name,
                abilitie2: data.abilities[1].ability.name,
                type: data.types[0].type.name,
                atack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
            })

        }catch(error){
            alert('No se pudo acceder a PokeApi', error)
        }
    };

    useEffect(()=>{
        getPokemon()
    }, [id]);

    if (!pokemon) return <></>;
    return (
        <>
            <div className="main-container-pokemon-card">
                <div className="info-pokemon-card">
                    <div className="header-pokemon">
                        <p>{pokemon.name}</p>
                        <p>{pokemon.ps}</p>
                    </div>
                    <div className="image-pokemon">
                            <img src={pokemon.image} alt="img-pokemon"/>
                            <div className="characteristics">
                                <p> No.{pokemon.num}   Weight:{pokemon.weight /10}kg   Height:{pokemon.height* 10}cm</p>
                            </div>
                    </div>

                    <div className="abilities-pokemon">
                        <p className='title-abilities-pokemon'>Abilities</p>
                        <div className="text-pokemon">
                            <p>{pokemon.abilitie}</p>
                            <p>{pokemon.abilitie2}</p>
                        </div>
                    </div>

                    <div className="extra-info-pokemon">
                        <p className='title-extra-info-pokemon'>Extra Information</p>
                        <div className="text-pokemon">
                            <p><strong>Type: </strong></p>
                            <p>{pokemon.type}</p>
                        </div>
                        <div className="text-pokemon">
                            <p><strong>Atack: </strong></p>
                            <p>{pokemon.atack}</p>
                        </div>
                        <div className="text-pokemon">
                            <p><strong>Defense: </strong></p>
                            <p>{pokemon.defense}</p>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}