import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import usePOST from "../../hooks/usePOST.js";
import Shell from "../../components/shell/Shell.jsx";
import Input from "../../components/inputBlock/InputBlock.jsx";
import {Title} from "../../components/title/Title.styled.js";
import {Button} from "../../components/button/Button.styled.js";
import {Errors} from "../../components/errors/Errors.styled.js";
import {CancelButton, Block} from "./ForgotPasswordPage.styled.js";


export default function ForgotPasswordPage () {
    const [emailState, setEmailState] = useState({ value: "", valid: false, error: "" });

    const [response, putData] = usePOST();

    useEffect(()=>{
        const validateEmail = () => {
            if (!emailState.value) {
                setEmailState(prevState => ({ ...prevState, error: "The field must be filled in", valid: false}))
                return;
            }

            if (emailState.value.length <= 4) {
                setEmailState(prevState => ({ ...prevState, error: "The email must contain at least 5 characters", valid: false}))
                return;
            }

            if (!emailState.value.includes('@')) {
                setEmailState(prevState => ({ ...prevState, error: "The email must contain the '@' symbol", valid: false}))
                return;
            }

            setEmailState(prevState => ({ ...prevState, error: "", valid: true }))
        };

        validateEmail();
    }, [emailState.value]);

    const onSubmit = () => {
        if(emailState.valid){
            putData('password-reset', {
                email : emailState.value,
            });
        }
    }

    return <Shell>
        <Title style={{marginBottom: '40px'}}>Forgot Password?</Title>
        <Block>
            <Input type='email' placeholder="Enter your email" chenge={(value) => setEmailState(prevState => ({ ...prevState, value: value }))}/>
            {!emailState.valid && <Errors>{emailState.error}</Errors>}
        </Block>
        {/*This button should lead to the main page of the site, */}
        {/*where a pop-up window will show that the email has been sent! */}
        {/*But, due to a malfunction of the API, and for demonstration purposes, */}
        {/*this button leads to the form for a new password!*/}

        {response.answer.status === 401 ? <Errors>This person is not registered!</Errors> : null}
        {response.error ? <Errors>{response.error}</Errors> : null}

        <Link to='/create-password'>
            <Button style={{marginTop: '20px'}} disabled={!emailState.valid} onClick={onSubmit}>Send</Button>
        </Link>
        <Link to='/'>
            <CancelButton>Cancel</CancelButton>
        </Link>
    </Shell>
}