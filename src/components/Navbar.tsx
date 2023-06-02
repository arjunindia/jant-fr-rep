import Switch from "./ui/switch";

export default function Navbar() {
    return (
        <nav className="navbar">
            <span>Arjun S</span>
            <div className="navbar__links">
                <a href="#">Archive</a>
                <a href="#">About</a>
                <Switch />
            </div>
        </nav>
    )
}