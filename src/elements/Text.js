/*eslint-disable */

import React from "react";
import styled from "styled-components"

const Text = (props) => {
    const {color, size, bold, children, margin} = props;

    const styles = { bold : bold, color : color, size : size, margin}

    return(
        <P {...styles}>
            {children} 
        </P>
    )
}

Text.defaultProps = {
    children : null,
    bold : false,
    color : '#222831',
    size : '14px',


}

const P = styled.div`

color : ${(props)=> props.color};
font-size : ${(props)=> props.size};
font-weight : ${(props)=> (props.bold ? "600" : "400")};
margin : ${(props)=> (props.margin ? `marign : ${props.margin};` : "")}
`;


export default Text;
