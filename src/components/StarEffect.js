import React from 'react'
import getRandInt from '../utils/getRandInt'

const stars = [...Array(80)].map(() => ({
    key: Math.random().toString(),
    x: getRandInt(0, 150),
    y: getRandInt(0, 20),
    color: `rgba(255, 255, 255, ${getRandInt(1, 10) / 10})`,
    delay: `${getRandInt(3, 5)}s`,
    duration: `${getRandInt(10, 30)}s`
}))

const StarEffect = () => (
    <div className="star-layer">
        {stars.map(star => (
            <div
                className="star-layer__star"
                key={star.key}
                style={{
                    backgroundColor: star.color,
                    transform: `translate(${star.x}rem, ${star.y}rem)`,
                    animationDelay: star.delay,
                    animationDuration: star.duration
                }}
            />
        ))}
    </div>
)

export default StarEffect
