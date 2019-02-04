import { objectType, intArg } from 'nexus';
import { ModuleContext } from '@graphql-modules/core';
import { ChatsProvider } from './chats.provider';

export const Query = objectType({
    name: 'Query',
    definition: t => {
        t.list.field('chats', {
            type: 'Chat',
            resolve: (root, args, { injector }: ModuleContext) => injector.get(ChatsProvider).getChats(),
        });
        t.field('chat', {
            type: 'Chat',
            args: {
                id: intArg(),
            },
            resolve: (root, { id }, { injector }: ModuleContext) => injector.get(ChatsProvider).getChat(id),
        });
    }
})