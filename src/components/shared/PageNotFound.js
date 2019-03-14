import React from 'react'
import StatusIcon from './StatusIcon'
import IconWrapper from './IconWrapper'
import syncTheme from '../../utils/syncTheme'

const PageNotFound = () => (
    <div
        className="background-overlay"
        style={{ '--theme-color': syncTheme() }}
    >
        <StatusIcon>
            <IconWrapper icon="crow" iconShadow />
            <p className="background-overlay__error-messsage">是喜歡探險的朋友呢</p>
        </StatusIcon>
    </div>
)

export default PageNotFound
