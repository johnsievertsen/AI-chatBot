import React, {useState} from 'react';
import ChatBox from './ChatBox';

function Chat() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    return (
        <div className="chat-container">
            <p className="msg">{message}</p>
            <p className="response">{response}</p>
            <ChatBox setResponse={setResponse} setMessage={setMessage}/>
        </div>
    );
}

export default Chat;