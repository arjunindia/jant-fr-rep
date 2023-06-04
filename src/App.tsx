import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import portfolio from "./content/portfolio";
import { Fragment } from "react";
function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="container" id="disc">
        {portfolio.map((item) => {
          return (<Fragment key={item.title}><Card {...item} /></Fragment>);
        })}
      </section>
    </>
  );
}

function App() {
  return (
    <>
    <Page />
    <Hero showScroller={false} />
    </>
    );
}
export default App;
