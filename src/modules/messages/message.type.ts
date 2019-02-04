import { objectType } from "nexus";
import { ModuleContext } from "@graphql-modules/core";
import { ChatsProvider } from '../chats/chats.provider';

export const Message = objectType({
    name: 'Message',
    definition: t => {
        t.id('id');
        t.string('content');
        t.field('chat', {
            type: 'Chat',
            resolve: ({ chatId }, args, { injector }: ModuleContext) => injector.get(ChatsProvider).getChat(chatId),
        });
    }
}) 