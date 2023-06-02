import { MoveRight } from "lucide-react"
export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__container">
            <h1 className="hero__text">Hello, world! I'm Jantana Hennard, a designer specializing in 3D designs and interactive experiences. I enjoy creating meaningful narratives through motion graphics and experimenting with new technology to convey stories    </h1>
            <div className="hero__link">
                <MoveRight size={24} />  
                <a href="#" className="hero__link__button">Get in touch</a>
            </div>
            </div>
        </div>
    )
}