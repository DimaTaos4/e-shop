import { css } from "@emotion/react"



export const textFieldWrapperStyle = css`
  margin-bottom: 39px;
display:flex;
align-items:center;
gap:10px;
flex-wrap:wrap;
`
export const textFieldLabelStyle = css`
font-size:18px;
font-weight:500;
width:100px;
`

export const textFieldStyle = (bgColor) => css`
  background-color: ${bgColor};
  padding: 25px 21px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 18px;
margin-bottom:5px;

  ::placeholder: {
    color: #000000b2;
  }
`;
export const textFieldErrorStyle = css`
    color:red;
    font-size:18px;
    width:100%;
`
