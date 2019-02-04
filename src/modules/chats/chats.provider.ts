import { Injectable, Inject } from '@graphql-modules/di';
import { ChatEntity } from './chat.entity-type';
import { CHATS } from './chats.symbol';

@Injectable()
export class ChatsProvider {

  constructor(
    @Inject(CHATS) private chats: ChatEntity[],
  ) {}

  getChats(): ChatEntity[] {
    return this.chats;
  }

  getChat(id: number): ChatEntity {
    return this.chats.find(chat => chat.id === id);
  }

  createChat(chat: ChatEntity): ChatEntity {
    const id = this.chats[this.chats.length-1].id + 1;

    const newChat: ChatEntity = {
      id,
      ...chat,
    };

    this.chats.push(newChat);

    return newChat;
  }

  deleteChat(id: number): number {
    this.chats = this.chats.filter(chat => chat.id !== id);

    return id;
  }
}
