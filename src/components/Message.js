import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './Message.css';

function Message(props) {

    const isUser = props.username === props.message.username ;

    return (    
        <div className={`message_card ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"} variant="outlined">
                {/* The code in className means, if the isUser variable is true, then the 'message_user' class is added */}
                <CardContent>
                    <Typography color='white' variant='h5' component='h2'>
                        {props.message.username} : {props.message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>          
    )
}

export default Message
