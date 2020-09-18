import React from 'react'
import classnames from 'classnames'
function Button({ onClick, className, outline, children }) {
    return <button className={classnames('button', className, {
        'button--outline': outline
    })}
        onClick={onClick}>{children}</button>
}

export default Button;