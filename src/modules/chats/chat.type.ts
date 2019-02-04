import { objectType } from 'nexus';

export const Chat = objectType({
    name: 'Chat',
    definition: t => {
        t.id('id');
        t.string('title');
        t.string('description');
    }
});
