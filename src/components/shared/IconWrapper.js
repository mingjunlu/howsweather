import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconWrapper = ({
    style=null,
    icon=null,
    className=null,
    spin=false,
    fixedWidth=true
}) => (icon && (
    <div
        className={className && `${className}`}
        style={{ display: 'inline-block', ...style }}
    >
        <FontAwesomeIcon
            spin={spin}
            fixedWidth={fixedWidth}
            icon={icon}
        />
    </div>
))

export default IconWrapper
