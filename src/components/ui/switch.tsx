export default function Switch() {
    return (
        <div className="switch">
            <label className="switch">
                <input type="checkbox" onChange={
                    () => {
                        document.querySelector("#root")!.classList.toggle('dark')
                    }
                } />
                <span className="slider round"></span>
            </label>
        </div>
    )
}