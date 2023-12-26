package com.second.hand.trading.server.service;

import com.second.hand.trading.server.model.MessageModel;

import java.util.List;

public interface MessageService {


    boolean addMessage(MessageModel messageModel);


    boolean deleteMessage(Long id);


    MessageModel getMessage(Long id);


    List<MessageModel> getAllMyMessage(Long userId);


    List<MessageModel> getAllIdleMessage(Long idleId);

}
