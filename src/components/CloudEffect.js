import React from 'react'
import getRandInt from '../utils/getRandInt'
import cloudWebP from '../images/cloud.webp'
import cloudJp2 from '../images/cloud.jp2'
import cloudPng from '../images/cloud.png'

const startX = -(getRandInt(0, 400))

class CloudEffect extends React.Component {
    state = {
        fallback: false
    }
    fallbackToPng = () => {
        this.setState({ fallback: true })
    }
    render() {
        const { fallback } = this.state
        return (
            <div className="cloud-layer">
                <picture
                    className="cloud-layer__cloud"
                    style={{ '--start-x': `${startX}px` }}
                    onError={this.fallbackToPng}
                >
                    <source srcSet={cloudWebP} type="image/webp" />
                    <source srcSet={cloudJp2} type="image/jp2" />
                    <img src={fallback ? cloudPng : ''} className="cloud-layer__image" alt="" />
                </picture>
            </div>
        )
    }
}

export default CloudEffect
