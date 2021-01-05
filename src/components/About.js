import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () =>{
    return(
        <div className="container">
            <h4 className="center"> About </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta eveniet omnis perspiciatis obcaecati ipsam fugiat in libero quos ut, reprehenderit nesciunt doloribus veritatis nisi dolore rem, illo itaque. Voluptate!</p>
        </div>
    )
}

export default Rainbow(About);