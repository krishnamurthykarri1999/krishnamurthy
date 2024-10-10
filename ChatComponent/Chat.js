import React, { useState, useEffect } from "react";

// const ChatComponent = () => {
//   const [message, setMessage] = useState("");
//   const [chatMessages, setChatMessages] = useState([]);
//   const [webSocket, setWebSocket] = useState(null);

const Chat = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/chat");

    socket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    socket.onmessage = (event) => {
      console.log("Message from server", "web server");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, []);

  return <div>Chat Component</div>;
};

export default Chat;
