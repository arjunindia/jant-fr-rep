import { useEffect,useRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  info: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  className?: string;
  variant?: "flat" | "reverse" | "normal";
}
export default function Card({
  info,
  title,
  text,
  image,
  alt,
  className,
  variant,
  ...props
}: CardProps) {
    const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    //detect scrollup or scrolldown
    let lastScrollTop = 0;
    const scrollHandler = function () {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // downscroll code
            if (imgRef.current) {
            imgRef.current.classList.add("card__img__scrolldown");
            imgRef.current.classList.remove("card__img__scrollup");
            }
        } else {
            // upscroll code
            if (imgRef.current) {
            imgRef.current.classList.add("card__img__scrollup");
            imgRef.current.classList.remove("card__img__scrolldown");
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        };
    window.addEventListener("scroll", scrollHandler);
    //detect stop scroll
    let timer: number;
    const scrollStopHandler = function () {
        if (timer) clearTimeout(timer);
        timer = window.setTimeout(function () {
        if (imgRef.current) {
            imgRef.current.classList.remove("card__img__scrolldown");
            imgRef.current.classList.remove("card__img__scrollup");
        }
        }, 150);
    }
    window.addEventListener("scroll", scrollStopHandler);
    return () => {
        window.removeEventListener("scroll", scrollHandler);
        window.removeEventListener("scroll", scrollStopHandler);
    }
  }, []);
  return (
    <div
      className={`card ${(() => {
        switch (variant) {
          case "flat":
            return "card__flat";
          case "reverse":
            return "card__reverse";
          default:
            return "";
        }
      })()} ${className}`}
      {...props}
    >
      <img src={image} alt={alt} ref={imgRef} className="card__img" />
      <div className="card__container">
        <div className="card__head">
          <span className="card__info">{info}</span>
          <h3 className="card__title">{title}</h3>
        </div>

        <p className="card__text">{text}</p>
      </div>
    </div>
  );
}
