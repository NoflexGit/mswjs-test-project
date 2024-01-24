import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import {useQuery} from "@tanstack/react-query";

function App() {
  const {data: movies, isFetching} = useQuery({
    queryKey: ['movies'],
    queryFn: () => axios('https://localhost:5173/api/movies')
  })
  
  console.log(movies?.data)
  
  if(isFetching) {
    return <div>Loading...</div>
  }

  if(movies?.data) {
    return (
        <>
          {
            movies.data.map((movie: any) => {
              return <div>{movie.title}</div>
            })
          }
        </>
    )
  }
}

export default App
