import { useState} from "react";
import { MoveRight } from "lucide-react";
// @ts-expect-error
import Fluid from "fluid-canvas";


export default function Hero() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__text">
          Hello, world! I'm Jantana Hennard, a designer specializing in 3D
          designs and interactive experiences. I enjoy creating meaningful
          narratives through motion graphics and experimenting with new
          technology to convey stories{" "}
        </h1>
        <div className="hero__link">
          <MoveRight size={24} />
          <a
            href="#"
            className="hero__link__button"
            onClick={() => {
              //copy mail to clipboard
              navigator.clipboard.writeText("arjun8107@gmail.com");
              setClicked(true);
              setTimeout(() => {
                setClicked(false);
              }, 1000);
            }}
            onMouseLeave={() => {
              setClicked(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigator.clipboard.writeText("arjun8107@gmail.com");
                setClicked(true);
                setTimeout(() => {
                  setClicked(false);
                }, 1000);
              }
            }}
            data-content={clicked ? "mail copied!" : "Copy mail?"}
          ></a>
        </div>
      </div>
    </div>
  );
}
