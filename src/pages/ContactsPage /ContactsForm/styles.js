import { css } from "@emotion/react";
export const formStyle = css`
    display:flex;
    gap:31px;
flex-direction:column;
position:relative;
    `
export const emailNameStyle = css`
        display:grid;
   grid-template-columns:1fr 1fr;
        gap:39px;

    `
export const inputStyle = css`
    background-color:#FAFAFA;
    border:none;
    padding:25px 0 25px 25px;
border-radius: 10px;
width:100%;
    `
export const lastInputStyle = css`
    background-color:#FAFAFA;
    border:none;
    padding:25px 0 25px 25px;
border-radius: 10px;
width:100%;`

export const btnSubmit = css`
width: 131px;
height: 53px;
font-weight: 600;
position:absolute;
right:0;
`

export const errorStyle = css`
margin-top:12px;
    color:red;
`