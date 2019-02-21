import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconWrapper = ({ icon=null, className=null }) => (icon && (
    <div className={className && ` ${className}`}>
        <FontAwesomeIcon fixedWidth icon={icon} />
    </div>
))

export default IconWrapper
