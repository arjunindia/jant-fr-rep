import { useState, useEffect, useRef } from "react";
import { MoveRight,MoveDown } from "lucide-react";
//@ts-ignore
import WebGLFluidCustom from "webgl-fluid-custom";
type FluidOptions = {
  IMMEDIATE?: boolean; // Whether to trigger multiple random splats when initialized
  TRIGGER?: string; // Can be change to 'click'
  SIM_RESOLUTION?: number;
  DYE_RESOLUTION?: number;
  CAPTURE_RESOLUTION?: number;
  DENSITY_DISSIPATION?: number;
  VELOCITY_DISSIPATION?: number;
  PRESSURE?: number;
  PRESSURE_ITERATIONS?: number;
  CURL?: number;
  SPLAT_RADIUS?: number;
  SPLAT_FORCE?: number;
  SHADING?: boolean;
  COLORFUL?: boolean;
  COLOR_UPDATE_SPEED?: number;
  PAUSED?: boolean;
  UNIQUE_COLOR?: boolean; // If you want a unique color
  COLOR?: { r?: number; g?: number; b?: number }; //Set the unique color
  BACK_COLOR?: { r?: number; g?: number; b?: number };
  TRANSPARENT?: boolean;
  BLOOM?: boolean;
  BLOOM_ITERATIONS?: number;
  BLOOM_RESOLUTION?: number;
  BLOOM_INTENSITY?: number;
  BLOOM_THRESHOLD?: number;
  BLOOM_SOFT_KNEE?: number;
  SUNRAYS?: boolean;
  SUNRAYS_RESOLUTION?: number;
  SUNRAYS_WEIGHT?: number;
  GUI?: boolean;
};
const options: FluidOptions = {
  IMMEDIATE: true, // Whether to trigger multiple random splats when initialized
  TRIGGER: "hover", // Can be change to 'click'
  BLOOM: false,
  TRANSPARENT: true,
  SUNRAYS: false,
  COLORFUL: false,
  CURL: 4,
  SHADING: true,
  SIM_RESOLUTION: 128,
  DENSITY_DISSIPATION: 1,
  VELOCITY_DISSIPATION: 0.01,
  UNIQUE_COLOR: true,
  COLOR: { r: 0, g: 33, b: 255 },
  GUI: false,
};
export default function Hero() {
  const [clicked, setClicked] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let val:any = null;
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      val = WebGLFluidCustom(canvas, options);
      document.addEventListener('click', function(e) {
        if (canvas.onclick)
        canvas.onclick(e);
       });
       window.onmousemove = function(e) {
        if (canvas.onmousemove)
        canvas.onmousemove(e);
       }
    }
    // get scroll position in px on scroll
    const getScrollPosition = () => {
      const scrollpos = window.scrollY;
      if (scrollpos > 500){
        (document.querySelector(".hero__scrolltodisc")! as HTMLDivElement).style.setProperty("opacity", "0");
      }
      else{
        (document.querySelector(".hero__scrolltodisc")! as HTMLDivElement).style.setProperty("opacity", "1");
      } 
    }
    document.addEventListener("scroll", getScrollPosition);

    return () => {
      document.removeEventListener("scroll", getScrollPosition);
      if (val) {
        val.destroy();
      }
    }
  }, []);
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__text">
          Hello, world! I'm Jantana Hennard, a designer specializing in 3D
          designs and interactive experiences. I enjoy creating meaningful
          narratives through motion graphics and experimenting with new
          technology to convey stories
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
      <canvas ref={canvasRef} className="hero__canvas"></canvas>
      <div className="hero__scrolltodisc">
        <a href="#disc" className="text__wave">
          Scroll to discover
        </a>
          <MoveDown size={18} className="arrowdown" />
      </div>
    </div>
  );
}
