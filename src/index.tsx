import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';
import 'react-chat-widget/lib/styles.css';

// Delete me
export const Chataverse = () => {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (newMessage: any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="My new awesome title"
        subtitle="And my cool subtitle"
      />
    </div>
  );
};
