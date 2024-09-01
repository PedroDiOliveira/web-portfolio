import "./styles.css"
import PhotoArt from "../PhotoArt"

export default function IntroBanner(){
    return(
        <section>
            <div className="hello-responsive">
                <h1>Hello,</h1>
            </div>
            <PhotoArt/>
            <div className="texto-introducao">
                <h1 className="hello" >Hello,</h1><h1>i am <strong>Pedro</strong> <br /> web developer</h1>
            </div>
        </section>
    )
}