import React from 'react'

const StatusIcon = (props) => (
    <div
        style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '4.0rem',
            color: 'rgb(250, 250, 250)'
        }}
        className="animated fadeIn fast"
    >
        {props.children}
    </div>
)

export default StatusIcon
