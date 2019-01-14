import React from 'react';

const ElementUI = (props) => {
    const { Wrapper, nameClass, children, color, shadowSize, typeClass } = props;
    const typeClassName = typeClass === "c" ? `c-${nameClass}` : typeClass === "o" ? `o-${nameClass}` : null;
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
    
        <Wrapper className={`${typeClassName} ${props.className ? props.className : ''} ${Shadow} ${_color}`}>
            { children }
        </Wrapper>
    
        )
    
}

export default ElementUI;