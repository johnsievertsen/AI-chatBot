import React from 'react';

function ChatBox(props) {
    async function completeFetch(message) {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + "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",
            },
            body: JSON.stringify({
                "prompt": message,
                "max_tokens": 300,
            })
        };
        fetch("https://api.openai.com/v1/engines/davinci/completions", requestOptions)
            .then(response => response.json())
            .then(data => props.setResponse(data.choices[0].text))
            .catch(error => console.log('error', error));
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.setMessage(e.target.value);
        completeFetch(e.target.value);
    }
 
    return (
        <textarea onKeyDown= { e => {
            if(e.key === 'Enter' && !e.shiftKey) {
                handleSubmit(e);
            }
        }}
        className="chat-box" rows="10" cols="50" placeholder="Type here to chat with the AI"></textarea>
    );
}

export default ChatBox;