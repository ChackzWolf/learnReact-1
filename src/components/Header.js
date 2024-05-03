const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.logojoy.com/wp-content/uploads/20200506163720/34-768x402.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;