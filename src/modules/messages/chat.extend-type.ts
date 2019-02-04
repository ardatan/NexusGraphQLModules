import { extendType, intArg } from 'nexus';
import { ModuleContext } from '@graphql-modules/core';
import { MessagesProvider } from './messages.provider';

export const ExtendChat = extendType({
    type: 'Chat',
    definition: t => {
        t.list.field('messages', {
            type: 'Message',
            args: {
                id: intArg(),
            },
            resolve: ({ id }, args, { injector }: ModuleContext) => injector.get(MessagesProvider).getMessages(id),
        });
    }
})