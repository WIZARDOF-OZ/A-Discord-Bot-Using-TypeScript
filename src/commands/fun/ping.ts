import { ICommand } from "wokcommands";

export default {
    category: 'Fun',
    description: "Reply a Pong",
    slash: 'both',
    testOnly: true,
    callback: ({}) => {
        return 'Pong'
    },
} as ICommand