import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconWrapper = ({
    style=null,
    icon=null,
    className=null,
    spin=false,
    fixedWidth=true,
    iconShadow=false
}) => (icon && (
    <div
        className={className && `${className}`}
        style={{ display: 'inline-block', ...style }}
    >
        <FontAwesomeIcon
            spin={spin}
            fixedWidth={fixedWidth}
            icon={icon}
            style={{
                filter: iconShadow ?
                    'drop-shadow(4px 4px 3px rgba(60, 60, 60, 0.1))' :
                    undefined
            }}
        />
    </div>
))

export default IconWrapper
