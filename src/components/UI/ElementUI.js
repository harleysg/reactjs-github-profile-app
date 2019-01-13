import React from 'react';

const ElementUI = (props) => {
    const { Wrapper, children, color, shadowSize, typeClass } = props;
    const named = Wrapper
    const className = typeClass === "c" ? `c-${named}` : typeClass === "o" ? `o-${named}` : null;
    const Shadow = shadowSize 
        ? shadowSize === 1 
            ? `u-shadow_${shadowSize}` 
            : ''
        : null ;
    const _color = color 
        ? color === "primary" 
            ? "u-color_1" 
            : color === "secundary" 
                ? "u-color_2" 
                : ''
        : ''
    return (
    
        <Wrapper className={`${className} ${Shadow} ${_color}`}>
            { children }
        </Wrapper>
    
        )
    
}

export default ElementUI;