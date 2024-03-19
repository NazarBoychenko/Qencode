import Name from "../../assets/imgs/Name.png";
import {Container, Img} from "./Shell.styled.js";

export default function Shell (props) {
    return <Container>
        <div>
            <Img src={Name} alt="Logo"/>
        </div>
        {props.children}
    </Container>
}