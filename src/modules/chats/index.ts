import { GraphQLModule } from '@graphql-modules/core';
import { ChatsProvider } from "./chats.provider";
import { ChatEntity } from './chat.entity-type';
import { CHATS } from './chats.symbol';
import { makeSchema } from 'nexus';
import { Chat } from './chat.type';
import { Query } from './query.type';
import { Mutation } from './mutation.type';
import { join } from 'path';

export const ChatsModule = new GraphQLModule({
  providers: ({ config }: { config: { chats: ChatEntity[] } }) => [
    {
      provide: CHATS,
      useValue: config.chats,
    },
    ChatsProvider,
  ],
  extraSchemas: [
      makeSchema({
          types: [
              Chat,
              Query,
              Mutation,
          ],
          outputs: {
            schema: join(__dirname, "./generated/chats.schema.graphql"),
            typegen: join(__dirname, "./generated/chats.types.d.ts"),
          },
      })
  ]
});