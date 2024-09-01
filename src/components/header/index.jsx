import "./styles.css"
export default function Header(){
    return(
        <header>
            <div className="titulo">
                <h1>Pedro Henrique</h1>
            </div>
            <div className="links">
                <a href=""><p>Projects</p></a>
                <a href=""><p>About me</p></a>
            </div>
            <div className="contactButton">
                <button>Contact</button>
            </div>
        </header>
    )
}