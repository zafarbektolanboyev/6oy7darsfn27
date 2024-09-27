import './Navbar.css'
function Navbar(){
    return(
      <div className="navbar">
        <header className="header">
        <div className="logo">
            <h2 className="logo1">
                C
            </h2>
        </div>
        <nav className="nav">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Card</a>
                </li>
            </ul>
        </nav>
        <div className="icons">
            <p>moon</p>
            <p>backet</p>
        </div>
      </header>
      </div>
    )
}
export default Navbar