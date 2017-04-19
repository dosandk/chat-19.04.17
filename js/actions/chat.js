import { SEND_MESSAGE, RECEIVE_MESSAGE, JOIN_CHAT, LEFT_CHAT } from '../constants/chat';

export {
  sendMessage,
  receiveMessage,
  joinChat,
  leftChat
};

function sendMessage() {
  return {
    type: SEND_MESSAGE,
    payload: {

    }
  };
}

function receiveMessage() {
  return {
    type: RECEIVE_MESSAGE,
    payload: {

    }
  };
}

function joinChat() {
  return {
    type: JOIN_CHAT,
    payload: {

    }
  };
}
function leftChat() {
  return {
    type: LEFT_CHAT,
    payload: {

    }
  };
}
