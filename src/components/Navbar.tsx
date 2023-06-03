import Switch from "./ui/switch";

export default function Navbar() {
    return (
        <nav className="navbar">
            <span>Jantana Hennard</span>
            <div className="navbar__links">
                <a href="#">Archive</a>
                <a href="#">About</a>
                <Switch />
            </div>
        </nav>
    )
}