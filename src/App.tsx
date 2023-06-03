import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Card
        info="PUBLIC SPACES"
        title="The Color Bath"
        text="Multimedia content infusing color at Shinjuku station"
        image="https://images.prismic.io/jant/f61d8c7c-0666-4604-afd7-65b68204ffe9_SJK_CS_FRAME.jpg?auto=compress,format"
        alt="Shinjuku Thumbnail"
      />
      <Card
        info="STYLEFRAMES"
        title="Flowers studies"
        text='A digital tribute to botanical art'
        image="https://images.prismic.io/jant/fbaac30a-8f58-46ca-a4ce-79324c01f403_FLW_CS_FRAME_00000.jpg?auto=compress,format"
        alt="Flowers Thumbnail"
        variant='reverse'
      />
      <Card 
        info='INSTALLATION'
        title="Perplexiplex"
        text="An interactive immersion through a surreal forest"
        image="https://images.prismic.io/jant/3ad2a0e0-28f3-40e7-be9f-1e2f5ed6ea9f_PLX_CS_FRAME.jpg"
        alt="Perplexiplex Thumbnail"
        variant='flat'
      />
    </>
  )
}

export default App
