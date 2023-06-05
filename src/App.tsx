import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import portfolio from "./content/portfolio";
import { Fragment } from "react";

function CardList() {
  return (
    <section className="container" id="disc">
      {portfolio.map((item) => {
        return (
          <Fragment key={item.title}>
            <Card {...item} />
          </Fragment>
        );
      })}
    </section>
  );
}
function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardList />
    </>
  );
}

function App() {
  return (
    <>
      <Page />
    </>
  );
}
export default App;
