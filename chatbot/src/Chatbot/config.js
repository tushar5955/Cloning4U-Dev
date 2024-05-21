// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Avtar from './Avtar';
const botName = 'Tushar';
// ${botName}
const config = {
  initialMessages: [ createChatBotMessage(`Hi, Nice to see you here!`)],
  botName: botName,
  customComponents: {
    botAvatar: (props) => <Avtar {...props} />,
},
  customStyles: {
    botMessageBox: {
      backgroundColor: '#4da0d6',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;