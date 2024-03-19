import {Container, Input, Icon} from "./InputBlock.styled.js";

export default function InputBlock ({type = "text", placeholder = "", icon, click, chenge}) {

    const dataUp = (event) => {
        chenge(event.target.value);
    }

    return <Container>
        <Input type={type} placeholder={placeholder} onChange={dataUp}/>
        <Icon onClick={click}>{icon}</Icon>
    </Container>
}