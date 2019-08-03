import React from 'react'
import getRandInt from '../utils/getRandInt'

const raindrops = [...Array(40)].map(() => {
    const transparency = getRandInt(20, 35) / 100
    const color = `rgba(255, 255, 255, ${transparency})`
    const delay = `${getRandInt(0, 1400)}ms`
    const duration = `${getRandInt(1000, 1400)}ms`
    const key = `${delay}-${duration}-${transparency}`
    return { key, color, delay, duration }
})

const RainEffect = () => (
    <div className="rain-layer">
        {raindrops.map(raindrop => (
            <div
                key={raindrop.key}
                className="rain-layer__raindrop"
                style={{
                    backgroundColor: raindrop.color,
                    animationDelay: raindrop.delay,
                    animationDuration: raindrop.duration,
                }}
            />
        ))}
    </div>
)

export default RainEffect
