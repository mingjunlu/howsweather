import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconWrapper = ({
    icon=null, className=null, spin=false, fixedWidth=true
}) => (icon && (
    <div className={className && ` ${className}`}>
        <FontAwesomeIcon spin={spin} fixedWidth={fixedWidth} icon={icon} />
    </div>
))

export default IconWrapper
