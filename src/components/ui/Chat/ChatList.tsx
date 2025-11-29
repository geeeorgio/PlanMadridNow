import type { RefObject } from 'react';
import React from 'react';
import { FlatList, View } from 'react-native';

import ChatAnswer from './ChatAnswer/ChatAnswer';
import ChatQuestion from './ChatQuestion/ChatQuestion';
import { styles } from './styles';

import type { ChatMessage } from 'src/types';
import { hp } from 'src/utils';

interface ChatListProps {
  messages: ChatMessage[];
  flatListRef: RefObject<any>;
}

const ChatList = ({ messages, flatListRef }: ChatListProps) => {
  return (
    <FlatList
      data={messages}
      ref={flatListRef}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =>
        item.type === 'question' ? (
          <ChatQuestion question={item.text} />
        ) : (
          <ChatAnswer answer={item.text} />
        )
      }
      onContentSizeChange={() => {
        flatListRef.current?.scrollToEnd({ animated: true }, { duration: 300 });
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={() => <View style={{ height: hp(33) }} />}
    />
  );
};

export default ChatList;
