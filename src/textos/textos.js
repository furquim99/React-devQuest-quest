import React from 'react'
import './textos.css'

const Texto = ({children, colors }) =>{
    return(
        <div className='txt' style={{ backgroundColor: colors }}>
            {children}
        </div>
    )
}
Texto.defaultProps = {
    colors: 'green'
}
export default Texto