import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import contentFooter from "/content/transversals/footer.yaml";

const ChatBotOracle = () => {
  const text = "Summon the digital druid";
  const letters = text.split("").map((letter, index) =>
    letter === " " ? (
      <span key={index} className="space">
        &nbsp;
      </span>
    ) : (
      <span key={index} className="letter">
        {letter}
      </span>
    )
  );

  return (
    <div className="chatBotOracle">
      <a
        href={contentFooter.chatBot.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="chatBotImage">
          <StaticImage
            className="imgWrapper--base"
            src="../assets/images/illus/chatbot.webp"
            alt="logo"
            loading="eager"
            width={75}
            height={75}
          />
          <span className="chatBotText">{letters}</span>
        </div>
      </a>
    </div>
  );
};

export default ChatBotOracle;
