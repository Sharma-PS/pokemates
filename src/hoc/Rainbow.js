import React from 'react'

const Rainbow = (WrapperComponent) => {

    const colours = ['red','orange', ' green', 'yellow', 'blue', 'pink']
    const randomColor = colours[Math.floor(Math.random() * 5)]
    const className = randomColor + '-text';
    return(props) =>{
        return(
            <div className={className}>
                <WrapperComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;