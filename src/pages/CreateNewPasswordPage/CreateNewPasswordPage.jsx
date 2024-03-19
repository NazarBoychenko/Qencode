import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import usePOST from "../../hooks/usePOST.js";
import Shell from "../../components/shell/Shell.jsx";
import Input from "../../components/inputBlock/InputBlock.jsx";
import {openEye} from "../../assets/SVG/SVGeye.jsx";
import {closeEye} from "../../assets/SVG/SVGeye.jsx";
import {Title} from "../../components/title/Title.styled.js";
import {Button} from "../../components/button/Button.styled.js";
import {Errors} from "../../components/errors/Errors.styled.js";
import {InputContainer, Block, Label} from "./CreateNewPasswordPage.styled.js";


export default function CreateNewPasswordPage () {
    const [togglePass, setTogglePass] = useState(false);
    const [toggleNewPass, setToggleNewPass] = useState(false);
    const [passwordState, setPasswordState] = useState({ value: "", valid: false, error: "" });
    const [newPasswordState, setNewPasswordState] = useState({ value: "", valid: false, error: "" });

    const [response, putData] = usePOST();

    useEffect(() => {
        const validatePassword = () => {
            if (passwordState.value.length <= 7) {
                setPasswordState(prevState => ({ ...prevState, error: "The password must contain at least 8 characters", valid: false }))
                return;
            }
            setPasswordState(prevState => ({ ...prevState, error: "", valid: true }))
        };

        validatePassword();
    }, [passwordState.value]);

    useEffect(() => {
        const validateNewPassword = () => {
            if (newPasswordState.value.length <= 7) {
                setNewPasswordState(prevState => ({ ...prevState, error: "The password must contain at least 8 characters", valid: false }))
                return;
            }
            setNewPasswordState(prevState => ({ ...prevState, error: "", valid: true }))
        };

        validateNewPassword();
    }, [newPasswordState.value]);

    const onSubmit = () => {
        if(passwordState.valid === true && newPasswordState.value === passwordState.value){
            putData('password-set', {
                password: passwordState.value
            });
        }
    }

    return <Shell>
        <Title style={{marginBottom: '40px'}}>Create new Password?</Title>

        <InputContainer>
            <Block>
                <Label>Password</Label>
                <Input type={togglePass ? 'text' : 'password'} placeholder="Password"
                       icon={togglePass? openEye : closeEye}
                       click = {()=> setTogglePass(!togglePass)}
                       chenge={(value) => setPasswordState(prevState => ({ ...prevState, value: value }))}/>
                {!passwordState.valid && <Errors>{newPasswordState.error}</Errors>}
            </Block>

            <Block>
                <Label>Confirm Password</Label>
                <Input type={toggleNewPass ? 'text' : 'password'} placeholder="Password"
                       icon={toggleNewPass? openEye : closeEye}
                       click = {()=> setToggleNewPass(!toggleNewPass)}
                       chenge={(value) => setNewPasswordState(prevState => ({ ...prevState, value: value }))}/>
                {!newPasswordState.valid && <Errors>{newPasswordState.error}</Errors>}
            </Block>
        </InputContainer>

        {response.error ? <Errors>{response.error}</Errors> : null}

        <Link to='/'>
            <Button onClick={onSubmit} disabled={!(passwordState.valid === true && newPasswordState.value === passwordState.value)}>Reset Password</Button>
        </Link>
    </Shell>
}