import { css } from "@emotion/react";

export const navbarMenuStyle = css`
    display:flex;
    gap:64px;
` ;

export const navbarMenuLinkStyle = (color) => css`
    text-decoration:none;
    color: ${color};
    font-size:15px;
    font-weight:600;
    transition: 0.2s;
    &.active{
    color:#FFFFFF;
    }
    :hover {
    color:#FFFFFF;
    }
`;