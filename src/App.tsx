import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import portfolio from './content/portfolio'
function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <section className="container">
      {
        portfolio.map((item, index) => {
          return <Card key={index} {...item} />
        })
      }
      </section>  
    </>
  )
}

export default App
