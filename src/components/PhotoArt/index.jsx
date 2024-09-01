import "./styles.css";
import fotoPedroSocial from "../../assets/fotoPedroSocial.jpg";

export default function PhotoArt() {
    return (
        <div className="forma-geometrica">
            <img id="fotoPedro" src={fotoPedroSocial} alt="Foto do Pedro" />
        </div>
    );
}
