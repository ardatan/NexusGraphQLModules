import { GraphQLModule } from '@graphql-modules/core';
import { ChatsModule } from '../chats';
import { MessageEntity } from './message.entity-type';
import { MESSAGES } from './messages.symbol';
import { MessagesProvider } from './messages.provider';
import { makeSchema } from 'nexus/dist';
import { Message } from './message.type';
import { ExtendChat } from './chat.extend-type';
import { Query } from './query.type';
import { Mutation } from './mutation.type';
import { join } from 'path';

export const MessagesModule = new GraphQLModule({
  imports: [
    ChatsModule,
  ],
  providers: ({ config }: { config: { messages: MessageEntity[] } }) => [
    {
      provide: MESSAGES,
      useValue: config.messages,
    },
    MessagesProvider,
  ],
  extraSchemas: [
    makeSchema({
        types: [
            Message,
            ExtendChat,
            Query,
            Mutation,
        ],
        outputs: {
          schema: join(__dirname, "./generated/messages.schema.graphql"),
          typegen: join(__dirname, "./generated/messages.types.d.ts"),
        },
    })
  ]
});