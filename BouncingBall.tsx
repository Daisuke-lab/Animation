import React, {useEffect, useState} from 'react'
import { useSpring, animated } from 'react-spring'
import '../assets/Home.css'


interface Props {
    x: number,
    y: number
  }
  
interface ClientProps {
    clientX: number,
    clientY: number
}
const BouncingBall = () => {
    const lastLocation = 350
    const [config, setConfig] = useState({ duration: 300})
    const [primitive, setPrimitive] = useState(-100)
    const [goal, setGoal] = useState(lastLocation)
    //config = the config that you can define outside of useSpring 
    const [count, setCount] = useState(0)
    const bounce = () => {
        setCount(count + 1)
        var ratio = 1.3
        if (count%2 === 1) {
            if (goal <= 0) {
                setPrimitive(goal+200)
            } else if (goal < lastLocation && goal > lastLocation- 100) {
                setPrimitive(goal + 10)
            } else if (goal < lastLocation) {
                setPrimitive(goal*ratio)
            }
            setGoal(lastLocation)
            setConfig({...config, duration:300})
        } else {
            if (primitive <= 0) {
                setGoal(primitive+200)
            } else if (primitive < lastLocation && primitive > lastLocation - 100 ) {
                setGoal(primitive + 10)
            } else if (primitive < lastLocation) {
                setGoal(primitive*ratio)
            }

            setPrimitive(lastLocation)
            setConfig({...config, duration:400})
        }
    }
    const styles = useSpring({ from: {y: primitive}, to: {y:goal}, config:config,onRest: {
        y: bounce} })
    return (
        <div className='parent'>
          <animated.div className="bounce_ball" style={styles} />
        </div>
    )
}
export default BouncingBall