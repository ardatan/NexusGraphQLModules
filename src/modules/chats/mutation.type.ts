import { objectType, intArg, stringArg } from 'nexus';
import { ModuleContext } from '@graphql-modules/core';
import { ChatsProvider } from './chats.provider';

export const Mutation = objectType({
    name: 'Mutation',
    definition: t => {
        t.field('createChat', {
            type: 'Chat',
            args: {
                title: stringArg(),
                description: stringArg()
            },
            resolve: (root, { title, description }, { injector }: ModuleContext) => injector.get(ChatsProvider).createChat({ id: Math.random(), title, description })
        });
        t.int('deleteChat', {
            args: {
                id: intArg(),
            },
            resolve: (root, { id }, { injector }: ModuleContext) => injector.get(ChatsProvider).deleteChat(id) as any // Cannot resolve int
        });
    }
});