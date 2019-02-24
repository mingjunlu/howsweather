import React from 'react'
import StatusIcon from './shared/StatusIcon'
import IconWrapper from './shared/IconWrapper'
import { syncTheme } from '../functions/helper'

const Loading = () => (
    <div
        className="background-overlay"
        style={{ '--theme-color': syncTheme() }}
    >
        <StatusIcon>
            <IconWrapper spin icon="circle-notch" />
        </StatusIcon>
    </div>
)

export default Loading
