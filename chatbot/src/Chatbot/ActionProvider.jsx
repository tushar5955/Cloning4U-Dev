import React from 'react';




const ActionProvider = ({ createChatBotMessage, setState, children }) => {


    const initialAction = (userMessage) => {
        //console.log(userMessage);
        // const url = "http://127.0.0.1:5000/reply"
        const url = "http://localhost:5000/reply"
        // const url = "http://0.0.0.0:5000/reply"
        let user = {"message":userMessage}
        fetch(url, {
          method: 'POST',
          headers:{'Content-Type': "application/json"},
          body: JSON.stringify(user)
        }).then(response => response.json()).then(json =>
          {console.log(json);
            const message = createChatBotMessage(json);
            updateState(message, "")}).catch(e =>
            {console.log(e)})
  
    }
    
    const updateState = (message, checker="") => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {initialAction},
        });
      })}
    </div>
  );
};

export default ActionProvider;