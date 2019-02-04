import { objectType, stringArg, intArg } from "nexus";
import { MessagesProvider } from "./messages.provider";
import { ModuleContext } from "@graphql-modules/core";

export const Mutation =  objectType({
    name: 'Mutation',
    definition: t => {
        t.field('createMessage', {
            type: 'Message',
            args: { 
                content: stringArg(),
                chatId: intArg(),
            },
            resolve: (root, { content, chatId }, { injector }: ModuleContext) => injector.get(MessagesProvider).createMessage(content, chatId),
        });
        t.int('deleteMessage', {
            args: {
                id: intArg(),
            },
            resolve: (root, { id }, { injector }: ModuleContext) => injector.get(MessagesProvider).deleteMessage(id) as any,
        })
    }
})