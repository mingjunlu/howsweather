import React from 'react'
import StatusIcon from './StatusIcon'
import IconWrapper from './IconWrapper'
import syncTheme from '../../utils/syncTheme'

const Error = ({ message='' }) => (
    <div
        className="background-overlay"
        style={{ '--theme-color': syncTheme(), overflowY: 'hidden' }}
    >
        <StatusIcon>
            <IconWrapper icon="exclamation-triangle" iconShadow />
            <p style={{ fontSize: '0.5em', lineHeight: 2, fontFamily: 'Arial' }}>
                {message || '無法下載資料'}
            </p>
        </StatusIcon>
    </div>
)

export default Error
