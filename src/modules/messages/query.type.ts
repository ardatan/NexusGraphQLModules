import { objectType, intArg } from "nexus";
import { ModuleContext } from "@graphql-modules/core";
import { MessagesProvider } from "./messages.provider";

export const Query = objectType({
    name: 'Query',
    definition: t => {
        t.list.field('messages', {
            type: ['Message'],
            args: {
                chatId: intArg()
            },
            resolve: (root, { chatId }, { injector }: ModuleContext) => injector.get(MessagesProvider).getMessages(chatId)
        });
        t.field('message', {
            type: 'Message',
            args: {
                id: intArg()
            },
            resolve: (root, { id }, { injector }: ModuleContext) => injector.get(MessagesProvider).getMessage(id),
        })
    }
})