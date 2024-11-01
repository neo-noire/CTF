import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ request, setHeaders }) => {

}

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
    },
    another: async ({ cookies }) => {
        cookies.set("SUPER_MEGA_SECRET", "hello", { path: '/' })
        return {
            isOpen: true
        }
    }
} satisfies Actions;