import React from 'react'
import StatusIcon from './StatusIcon'
import IconWrapper from './IconWrapper'
import syncTheme from '../../utils/syncTheme'

const Loading = () => (
    <div className="background-overlay" style={{ '--theme-color': syncTheme() }}>
        <StatusIcon>
            <IconWrapper spin icon="circle-notch" />
        </StatusIcon>
    </div>
)

export default Loading
