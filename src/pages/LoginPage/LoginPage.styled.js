import styled from "styled-components";

export const AuthBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`;


export const AuthButton = styled.button`
    font-family: BasisGrotesqueArabicPro-Medium, sans-serif;
    font-size: 14px;
    background: none;
    border: 1px solid #D3D8DC;
    border-radius: 6px;
    padding: 14px 58px;
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
    margin-right: 10px;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E3E6E9;
    margin-block: 38px;
`;

export const TextInline = styled.span`
    color: #BEC5CC;
    background-color: #ffffff;
    font-family: BasisGrotesqueArabicPro-Medium, sans-serif;
    font-size: 12px;
    line-height: 16px;
    position: relative;
    z-index: 2;
    top: -11.5px;
    padding-inline: 5px;
`;

export const InputContainer  = styled.div`
    display: grid;
    gap: 25px;
    margin-bottom: 30px;
`;

export const Block  = styled(InputContainer)`
    gap: 15px;
    margin-bottom: 0;
    text-align: right;
    display: ${props => props.$show ? "grid" : "none"};
`;

export const ButtonBlock = styled(InputContainer)`
    gap: 20px;
    margin-bottom: 0;
`;

export const TextForgot = styled.span`
    font-family: BasisGrotesqueArabicPro-Medium, sans-serif;
    font-size: 14px;
    color: #316FEA;
`;

export const TextSignUp = styled.span`
    font-size: 14px;
`;