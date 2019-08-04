import React from 'react'
import cloudWebP from '../images/cloud.webp'
import cloudJp2 from '../images/cloud.jp2'
import cloudPng from '../images/cloud.png'

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
                    className="cloud-layer__cloud cloud-layer__cloud--first"
                    onError={this.fallbackToPng}
                >
                    <source srcSet={cloudWebP} type="image/webp" />
                    <source srcSet={cloudJp2} type="image/jp2" />
                    <img src={fallback ? cloudPng : ''} className="cloud-layer__image" alt="" />
                </picture>
                <picture
                    className="cloud-layer__cloud cloud-layer__cloud--second"
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
