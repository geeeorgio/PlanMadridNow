import type { RefObject } from 'react';
import React from 'react';
import { FlatList } from 'react-native';

import ChatAnswer from './ChatAnswer/ChatAnswer';
import ChatQuestion from './ChatQuestion/ChatQuestion';
import { styles } from './styles';

import type { ChatMessage } from 'src/types';

interface ChatListProps {
  messages: ChatMessage[];
  flatListRef: RefObject<any>;
}

const ChatList = ({ messages, flatListRef }: ChatListProps) => {
  return (
    <FlatList
      data={messages}
      ref={flatListRef}
      onContentSizeChange={() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =>
        item.type === 'question' ? (
          <ChatQuestion question={item.text} />
        ) : (
          <ChatAnswer answer={item.text} />
        )
      }
    />
  );
};

export default ChatList;
