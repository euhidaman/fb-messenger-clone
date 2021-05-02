import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => { //Destructuring the 'props' into --> 'message', 'username'

    // console.log("UserName : "+ username);
    // console.log("Message : " + message.username);

    const isUser = username === message.username ;

    return (    
        <div ref={ref} className={`message_card ${isUser && 'message_user'}`}> {/* This is a single if statement */}
            {/* If isUser is true, then 'message_user' class is added */}
            <Card className={isUser ? "message_userCard" : "message_guestCard"} variant="outlined"> {/* This is a ternary operator */}
                {/* The code above in className means, if the isUser variable is true, 
                then the 'message_userCard' else 'message_guestCard' class is added */}
                <CardContent>
                    <Typography color='white' variant='h5' component='h3'>
                        {!isUser && `${message.username || "Unknown User"} : `} {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>          
    )
})

export default Message
