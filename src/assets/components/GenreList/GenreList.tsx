import useGenres from '../../hooks/useGenres'

const GenreList = () => {
  const {data:genres} = useGenres()
  return (
    <ul>{genres.map(g => <li>{g.name}</li>  )} </ul>
  )
}

export default GenreList