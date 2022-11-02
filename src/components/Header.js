import logo from "../logo.png"

function Header() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <h1>My travel Journal</h1>
        </nav>
    )
}

export default Header