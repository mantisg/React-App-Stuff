import {useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

function Home({setIsLoading, setGameId}) {
  	const navigate = useNavigate()
 	const [games, setGames] = useState([])
  
	useEffect(() => {
   		fetch("http://127.0.0.1:5000/games")
    		.then(response => response.json())
    		.then(data => {
      			setGames(data.res)
      			setIsLoading(false)
    		})
  	}, [])

  	function getGame(id) {
  		fetch(`http://127.0.0.1:5000/game/${id}`,
  			{method: 'GET'}
  		)
  		.then(response => response.json())
  		.then(({res}) => {
  			setGameId(res.id)
  			setIsLoading(false)
  			return navigate(`/games/${res.id}`)
  		})
  	}

	function deleteGame(id) {
	  	fetch(`http://127.0.0.1:5000/game/${id}`,
	    	{method: 'DELETE'}
	    )
    	.then(res => res.json())
    	.then(({res}) => setGames(res))
	}

	function handleCreateNewGame() {
	    return fetch("http://127.0.0.1:5000/game",
		    {method: 'POST',
		    headers: {'Content-Type': 'application/json'},
		    body: JSON.stringify({history: []})}
	    )
	    .then(response => response.json())
	    .then(({res}) => {
	    	setGames([...games, res])
	    	return navigate(`/games/${res.id}`)
	    })
	}
	
	return (
        <div>
          <button onClick={handleCreateNewGame}>New Game</button>
          <h2>Games</h2> 
	      <ul>
	        {games.map(g => (<li key={g.id}>
	          <p>{g.id}</p>
	          <button onClick={() => getGame(g.id)}>View</button>
	          <button onClick={() => deleteGame(g.id)}>Delete Game</button>
	        </li>))}
	      </ul>
        </div>
	)
}

export default Home