import { Inject, Injectable } from '@graphql-modules/di';
import { MessageEntity } from './message.entity-type';
import { MESSAGES } from './messages.symbol';

@Injectable()
export class MessagesProvider {

  constructor(
    @Inject(MESSAGES) private messages: MessageEntity[],
  ) {}

  getMessages(chatId: number): MessageEntity[] {
    return this.messages.filter(message => message.chatId === chatId);
  }

  getMessage(id: number): MessageEntity {
    return this.messages.find(message => message.id === id);
  }

  createMessage(content: string, chatId: number): MessageEntity {
    const id = this.messages[this.messages.length-1].id + 1;

    const newMessage: MessageEntity = {id, chatId, content};

    this.messages.push(newMessage);

    return newMessage;
  }

  deleteMessage(id: number): number {
    
    const message = this.messages.find(message => message.id === id);
    this.messages.splice(this.messages.indexOf(message), 1);

    return id;
  }
}