import React, { useState } from 'react';
import njFacts from './answer.json'; // Adjust the path if needed

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'user', text: input }];
      
      // Simple matching of questions to answers
      const fact = njFacts.facts.find(fact => 
        fact.questions.some(question => input.toLowerCase().includes(question.toLowerCase()))
      );

      const responseText = fact ? fact.answer : "Sorry, I don't have information about that.";
      
      setMessages([...newMessages, { sender: 'bot', text: responseText }]);
      setInput('');  // Clear the input field
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatbox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about New Jersey..."
        />
        <button style={styles.button} onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #444',
      borderRadius: '10px',
      maxWidth: '300px',
      margin: '20px auto',
      backgroundColor: '#2b2b2b', // Dark background for the container
    },
    chatbox: {
      width: '100%',
      height: '300px',
      border: '1px solid #444',
      borderRadius: '5px',
      padding: '10px',
      overflowY: 'auto',
      marginBottom: '10px',
      backgroundColor: '#1c1c1c', // Darker background for the chatbox
      color: '#fff', // White text color
    },
    inputContainer: {
      display: 'flex',
      width: '100%',
    },
    input: {
      flex: 1,
      padding: '10px',
      border: '1px solid #444',
      borderRadius: '5px 0 0 5px',
      outline: 'none',
      backgroundColor: '#333', // Dark input background
      color: '#fff', // White text color
    },
    button: {
      padding: '10px',
      border: 'none',
      backgroundColor: '#4CAF50',
      color: 'white',
      borderRadius: '0 5px 5px 0',
      cursor: 'pointer',
    },
    userMessage: {
      textAlign: 'right',
      marginBottom: '10px',
      padding: '10px',
      backgroundColor: '#007BFF', // User message bubble color (blue)
      borderRadius: '10px',
      color: '#fff', // White text color
    },
    botMessage: {
      textAlign: 'left',
      marginBottom: '10px',
      padding: '10px',
      backgroundColor: '#28A745', // Bot message bubble color (green)
      borderRadius: '10px',
      color: '#fff', // White text color
    },
  };
  
  // Usage example:
  // <div style={styles.userMessage}>{userQuestion}</div>
  // <div style={styles.botMessage}>{botResponse}</div>
  
  
  

export default Chatbox;
