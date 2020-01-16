import React from 'react'

const Notification = ({ notification }) => {
    const message = notification.message
    const type = notification.type

    if (message === null) {
        return null
    }

    if (type === 'notification')
        return (
            <div className="notification" >
                {message}
            </div>
        )
        if (type === 'error')
        return (
            <div className="error" >
                {message}
            </div>
        )
}

export default Notification