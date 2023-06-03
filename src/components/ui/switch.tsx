import { useState,useEffect } from "react";
export default function Switch() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? true : false)
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('theme', 'dark');
            document.querySelector("#root")!.classList.add('dark')
            setTheme(true);
            //set global css variable --scrollbar-bg-color: #1c1c1c;--scrollbar-thumb-color: #fffaf1;
            document.documentElement.style.setProperty('--scrollbar-bg-color', '#1c1c1c');
            document.documentElement.style.setProperty('--scrollbar-thumb-color', '#fffaf1');
        } else {
            localStorage.setItem('theme', 'light');
            document.querySelector("#root")!.classList.remove('dark')
            setTheme(false);
            //set global css variable --scrollbar-bg-color: #fffaf1;--scrollbar-thumb-color: #1c1c1c;
            document.documentElement.style.setProperty('--scrollbar-bg-color', '#fffaf1');
            document.documentElement.style.setProperty('--scrollbar-thumb-color', '#1c1c1c');
        }

      }, []);
    return (
        <div className="switch">
            <label className="switch">
                <input type="checkbox"
                checked={theme}
                onChange={
                    () => {
                        document.querySelector("#root")!.classList.toggle('dark')
                        setTheme(!theme)
                        localStorage.setItem('theme', theme ? 'light' : 'dark')
                        if (theme) {
                            //set global css variable --scrollbar-bg-color: #fffaf1;--scrollbar-thumb-color: #1c1c1c;
                            document.documentElement.style.setProperty('--scrollbar-bg-color', '#1b1b1b');
                            document.documentElement.style.setProperty('--scrollbar-thumb-color', '#6164ff');
                        }
                        else {
                            //set global css variable --scrollbar-bg-color: #1c1c1c;--scrollbar-thumb-color: #fffaf1;
                            document.documentElement.style.setProperty('--scrollbar-bg-color', '#1c1c1c');
                            document.documentElement.style.setProperty('--scrollbar-thumb-color', '#fffaf1');
                        }
                    }
                } />
                <span className="slider round"></span>
            </label>
        </div>
    )
}