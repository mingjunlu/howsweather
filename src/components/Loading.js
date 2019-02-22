import React from 'react'
import StatusIcon from './shared/StatusIcon'
import IconWrapper from './shared/IconWrapper'

const Loading = () => (
    <StatusIcon>
        <IconWrapper spin icon="circle-notch" />
    </StatusIcon>
)

export default Loading
