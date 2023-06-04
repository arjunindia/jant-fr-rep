import { useEffect, useRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  info: string;
  title: string;
  text: string;
  image: string;
  alt: string;
    video: string;
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
  video,
  ...props
}: CardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const mouseEnterHandler = function () {
        vidRef.current?.play();
        vidRef.current?.style.setProperty("display", "block");
        titleRef.current?.classList.add("text__wave");
    };
    const mouseLeaveHandler = function () {
        vidRef.current?.pause();
        vidRef.current?.style.setProperty("display", "none");
        titleRef.current?.classList.remove("text__wave"); 
    };
    imgRef.current?.addEventListener("mouseenter", mouseEnterHandler);
    imgRef.current?.addEventListener("mouseleave", mouseLeaveHandler);
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
        };
    //detect scrollup or scrolldown
    let lastScrollTop = 0;
    const scrollHandler = function () {
      scrollStopHandler();
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
    return () => {
        imgRef.current?.removeEventListener("mouseenter", mouseEnterHandler);
        imgRef.current?.removeEventListener("mouseleave", mouseLeaveHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
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
      <video loop muted className="card__video" ref={vidRef} >
        <source src={video} type="video/mp4" />
        Download the
        <a href={video}>MP4</a>
        video.
      </video>
      <img src={image} alt={alt} ref={imgRef} className="card__img" />

      <div className="card__container">
        <div className="card__head">
          <span className="card__info">{info}</span>
          <h3 className="card__title" ref={titleRef}>{title}</h3>
        </div>

        <p className="card__text">{text}</p>
      </div>
    </div>
  );
}
