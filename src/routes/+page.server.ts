import type { Actions } from "@sveltejs/kit";

export const actions = {
    hm: async () => {
        return {
            text: 'You might want to ask me for a "clue"'
        }
    },
    clue: async ({ setHeaders }) => {
        setHeaders({
            'Capture-The-Flag-Challenge': 'bWF5YmUgYmV0dGVyIHRyeSAiYW5vdGhlciIgY2x1ZQ=='
        })
        return {
            text: "You'd better check somewhere else this time."
        }
    },
    another: async ({ cookies }) => {
        cookies.set("SUPER_MEGA_SECRET", "WW91IGhhdmUgdG8gZ28gdmlzaXQgL2tvbm9oYS12aWxsYWdlIHRvIG1lZXQgU2Vuc2Vp", { path: '/' })
    }
} satisfies Actions;