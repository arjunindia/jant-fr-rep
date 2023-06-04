import Switch from "./ui/switch";

export default function Navbar() {
    return (
        <nav className="navbar">
            <span>Jantana Hennard</span>
            <div className="navbar__links">
                <a href="#" className="text__wave--hover">Archive</a>
                <a href="#" className="text__wave--hover">About</a>
                <Switch />
            </div>
        </nav>
    )
}