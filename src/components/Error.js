import React from 'react'
import StatusIcon from './shared/StatusIcon'
import IconWrapper from './shared/IconWrapper'
import { syncTheme } from '../functions/helper'

const Error = () => (
    <div
        className="background-overlay"
        style={{ '--theme-color': syncTheme() }}
    >
        <StatusIcon>
            <IconWrapper icon="exclamation-triangle" />
            <p style={{ fontSize: '0.5em', lineHeight: 2 }}>無法下載資料</p>
        </StatusIcon>
    </div>
)

export default Error
