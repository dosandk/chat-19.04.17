import { SEND_MESSAGE, RECEIVE_MESSAGE, JOIN_CHAT, LEFT_CHAT } from '../constants/chat';

export {
  sendMessage,
  receiveMessage,
  joinChat,
  leftChat
};

function sendMessage(msg) {
  return {
    type: SEND_MESSAGE,
    payload: {
      msg
    }
  };
}

function receiveMessage(msg) {
  return {
    type: RECEIVE_MESSAGE,
    payload: {
      msg
    }
  };
}

function joinChat(user) {
  return {
    type: JOIN_CHAT,
    payload: {
      user
    }
  };
}

function leftChat(user) {
  return {
    type: LEFT_CHAT,
    payload: {
      user
    }
  };
}
