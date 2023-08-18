import homeImage from "shared/images/rick-and-morty.png" 

function Home() {
  return (
    <div className="home-wrapper">
      <h1 className="visually-hidden">Home</h1>
      <img
        className="home-image"
        src={homeImage}
        alt="Rick and Morty"
      />
    </div>
  )
}

export default Home
