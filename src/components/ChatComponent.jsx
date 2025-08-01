import React, { useState } from 'react';
import './Chat.css'; // 별도 CSS 파일 (선택 사항)

function ChatComponent() {
  // 상태 정의
  const [messages, setMessages] = useState([]); // 메시지 목록
  const [inputMessage, setInputMessage] = useState(''); // 입력 메시지

  // 메시지 전송 함수
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        text: inputMessage,
        sender: 'me', // 'me' 또는 'other'로 사용자 구분
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]); // 메시지 추가
      setInputMessage(''); // 입력창 초기화
    }
  };

  // Enter 키로 전송
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 줄바꿈 방지
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      {/* 메시지 목록 */}
      <div className="message-list">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}
          >
            <div className="message-content">
              {msg.text}
              <span className="message-time">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 입력 영역 */}
      <div className="input-area">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          className="message-input"
          rows="3"
        />
        <button onClick={handleSendMessage} className="send-button">
          전송
        </button>
      </div>
    </div>
  );
}

export default ChatComponent;