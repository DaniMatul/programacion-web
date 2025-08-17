import '../styles/PokemonCard.css'
export default function PokemonCard(){
    const pokemon = {
        name:'Pikachu',
        num: 127,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3iIiDJQW4HYJk2osK19O3RQ4Hs4MDSF8PQ&s',
        atack: 100,
        description: 'Pikachu es muy lindo'
    }

    return (
        <>
            <div className="main-container-pokemon-card">
                <div className="info-pokemon-card">
                    <div className="characteristics">
                        <p>{pokemon.name}</p>
                        <p>{pokemon.num}</p>
                    </div>
                    <div className="image-pokemon">
                            <img src={pokemon.image} alt="img-pokemon"/>
                        </div>
                    <div className="atack">
                        <p>{pokemon.atack}</p>
                    </div>
                    <div className="info-extra">
                        <p>{pokemon.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}