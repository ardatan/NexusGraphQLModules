import { GraphQLModule } from "@graphql-modules/core";

import { ChatsModule } from "./chats";
import { MessagesModule } from "./messages";
import { ChatEntity } from "./chats/chat.entity-type";
import { MessageEntity } from "./messages/message.entity-type";

export const AppModule = new GraphQLModule({
    imports: ({ config: { chats, messages} }: { config: { chats: ChatEntity[], messages: MessageEntity[] } }) => [
        ChatsModule.forRoot({ chats }),
        MessagesModule.forRoot({ messages }),
    ],
    configRequired: true,
});
