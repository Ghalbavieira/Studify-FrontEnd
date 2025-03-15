import "./style.css";

export function Header(){
    return (
        <header>
            <h1>STUDIFY</h1>
            <div className="header-box">
                <nav>
                    <a href="">Home</a>
                    <a href="">Product</a>
                </nav>
                <button>Log in</button>
            </div>
        </header>
    )
}