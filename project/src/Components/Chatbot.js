import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    // Add user's message to the chat
    // setMessages([...messages, { text: inputText, type: "user" }]);
    // setInputText("");
    
    // You can send the user's message to a chatbot API for a response here
    // For this example, we'll simulate a response after a short delay
    const botResponse = "This is a sample response from the chatbot.";
    setMessages([...messages, { text: inputText, type: "user" } , { text: botResponse, type: "bot" }]);
    setInputText("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-gray-100 w-96 h-96 flex flex-col">
      <div className="flex-grow p-4 overflow-hidden">
        <div
          className="mb-4 h-full"
          style={{
            overflowY: 'scroll',
            paddingRight: '16px', // Adjust for scrollbar width (if needed)
            scrollbarWidth: 'none', // Hide scrollbar for Firefox
            msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className="bg-slate-500"
            >
              <div
                className={`${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white self-end text-right float-right'
                    : 'bg-white text-gray-800 text-left float-left '
                } rounded-lg px-4 py-2 mb-2 w-60`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
          
      </div>
        
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
