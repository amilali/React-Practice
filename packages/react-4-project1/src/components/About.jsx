// About.jsx - User ke details dikhane ke liye component
// Yeh component URL params se user ka first aur last name leke display karta hai.
import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const { userFname, userLname } = useParams();
    return (
        <div>
            <h1>About {userFname} {userLname}</h1>
        </div>
    )
}

export default About