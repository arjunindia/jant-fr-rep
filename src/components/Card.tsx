import { useEffect } from "react";

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
  useEffect(() => {
    //check if we are scrolling down or up
    let lastScrollTop = 0;
    const card = document.querySelector(".card__img") as HTMLImageElement;
    window.addEventListener(
      "scroll",
      function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          // downscroll code
          card.classList.add("card__img__scrolldown");
          card.classList.remove("card__img__scrollup");
        } else {
          // upscroll code
          card.classList.remove("card__img__scrolldown");
          card.classList.add("card__img__scrollup");
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        // remove both classes if we dont scroll'
        
      },
      false
    );
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
      <img src={image} alt={alt} className="card__img" />
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
