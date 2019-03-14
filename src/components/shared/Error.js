import React from 'react'
import StatusIcon from './StatusIcon'
import IconWrapper from './IconWrapper'
import syncTheme from '../../utils/syncTheme'

const Error = ({ message='' }) => (
    <div
        className="background-overlay"
        style={{ '--theme-color': syncTheme() }}
    >
        <StatusIcon>
            <IconWrapper icon="exclamation-triangle" iconShadow />
            <p className="background-overlay__error-messsage">
                {message || '無法下載資料'}
            </p>
        </StatusIcon>
    </div>
)

export default Error
