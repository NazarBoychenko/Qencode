import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import usePOST from "../../hooks/usePOST.js";
import Shell from "../../components/shell/Shell.jsx";
import InputBlock from "../../components/inputBlock/InputBlock.jsx";
import Google from "../../assets/imgs/Google.png";
import Github from "../../assets/imgs/Github.png";
import {Title} from "../../components/title/Title.styled.js";
import {openEye} from "../../assets/SVG/SVGeye.jsx";
import {closeEye} from "../../assets/SVG/SVGeye.jsx";
import {Button} from "../../components/button/Button.styled.js";
import {Errors} from "../../components/errors/Errors.styled.js";
import {AuthBlock, AuthButton, Img, Line, TextSignUp, TextForgot, InputContainer, Block, ButtonBlock, TextInline} from "./LoginPage.styled.js";

export default function LoginPage () {
    const [togglePassword, setTogglePassword] = useState(false);
    const [emailState, setEmailState] = useState({ value: "", valid: false, error: "" });
    const [passwordState, setPasswordState] = useState({ value: "", valid: false, error: "" });

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
    }, [emailState.value])

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
        // This is where tokens should be taken and stored in localStorage!
        // But I don't quite understand why you split authorization and token storage into different APIs?
        // localStorage.setItem('AccessToken', response.answer.data.accessToken || null);
        // localStorage.setItem('RefreshToken', response.answer.data.refreshToken || null);
    });

    const onSubmit = () => {
      if(emailState.valid && passwordState.valid){
          putData('/login', {
              email : emailState.value,
              password: passwordState.value
          });
      }
    }

    return <Shell>
        <Title>Log in to your account</Title>

        <AuthBlock>
            <AuthButton>
                <Img src={Google} alt="Google"/>
                Google
            </AuthButton>
            <AuthButton>
                <Img src={Github} alt="Github"/>
                Github
            </AuthButton>
        </AuthBlock>

        <Line>
            <TextInline>OR</TextInline>
        </Line>

        <InputContainer>
            <Block $show = {true}>
                <InputBlock type='email' placeholder="Work email" chenge={(value) => setEmailState(prevState => ({ ...prevState, value: value }))} />
                {!emailState.valid && <Errors>{emailState.error}</Errors>}
            </Block>

            <Block $show = {emailState.valid}>
                <InputBlock type={togglePassword ? 'text' : 'password'} placeholder="Password"
                    icon={togglePassword? openEye : closeEye}
                    click = {()=> setTogglePassword(!togglePassword)}
                    chenge={(value) => setPasswordState(prevState => ({ ...prevState, value: value }))}
                />
                {!passwordState.valid && <Errors>{passwordState.error}</Errors>}
                <Link to="/forgot-password"><TextForgot>Forgot your password?</TextForgot></Link>
            </Block>
        </InputContainer>

        {response.answer.status === 401 ? <Errors>This person is not registered!</Errors> : null}
        {response.error ? <Errors>{response.error}</Errors> : null}

        <ButtonBlock>
            <Link to="/"><Button onClick={onSubmit} disabled={emailState.valid && passwordState.valid}>Log in to Qencode</Button></Link>

            <TextSignUp>Is your company new to Qencode?<Link to='/'>Sign up</Link></TextSignUp>
        </ButtonBlock>
    </Shell>
}