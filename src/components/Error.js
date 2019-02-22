import React from 'react'
import StatusIcon from './shared/StatusIcon'
import IconWrapper from './shared/IconWrapper'

const Error = () => (
    <StatusIcon>
        <IconWrapper icon="exclamation-triangle" />
        <p style={{ fontSize: '0.5em', lineHeight: 2 }}>無法下載資料</p>
    </StatusIcon>
)

export default Error
