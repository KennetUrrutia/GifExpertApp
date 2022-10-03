import useFetchGifs from "../Hooks/useFetchGifs"
import GifItem from "./GifItem"

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
              // title={image.title}
              // url={image.url}
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid