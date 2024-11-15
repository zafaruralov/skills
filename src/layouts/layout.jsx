import React from "react";
import Sidebar from "./sidebar/sidebar";

const ChatLayout = () => {
  return (
    <div className="chat-layout">
      <Sidebar className="chat-sidebar" />
      <div className="chat-body">
        <section className="hire">
          <div className="hire__wrapper">
            <div className="hire__subtitle"></div>
            <div className="hire__title"></div>
            <div className="hire__desc"></div>
            <div className="hire__actions"></div>
          </div>
          <img src="" alt="Banner image for hire icon" className="hire__icon" />
        </section>
      </div>
    </div>
  );
};

export default ChatLayout;
