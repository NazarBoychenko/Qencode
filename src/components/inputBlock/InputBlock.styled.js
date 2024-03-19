import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Input  = styled.input`
    width: 100%;
    background: none;
    border-radius: 6px;
    border: 1px solid #D3D8DC;
    outline: none;
    font-size: 14px;
    padding: 12px 14px;
`;

export const Icon  = styled.i`
    cursor: pointer;
    position: absolute;
    z-index: 2;
    right: 16px;
`;
