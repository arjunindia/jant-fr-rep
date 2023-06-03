interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    info: string,
    title: string,
    text: string,
    image: string,
    alt: string,
    className?: string,
    variant?: "flat" | "reverse" | "normal"
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
}:CardProps) {
    return (
        <div className={`card ${
            (()=>{
                switch (variant) {
                    case "flat":
                        return "card__flat"
                    case "reverse":
                        return "card__reverse"
                    default:
                        return ""
                }
            })()
        } ${className}`}
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