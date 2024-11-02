import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
    if (!url.pathname.includes('konoha-village')) {
        redirect(302, '/')
    }
}

export const actions = {
    task: async ({ request }) => {
        const formData = await request.formData();
        const input = formData.get('input');
        const inputValue = input?.toString().toLowerCase()

        const close = inputValue === "SE9LQUdF".toLowerCase()
        const isSolved = inputValue === 'hokage'

        const successText = `Congratulations, you are one step closer to becoming Hokage. 🥷`
        const errorText = 'Ooppss I guess you are wrong'
        const closeText = "Ohhh, looks like you are very close!"
        return {
            solved: isSolved,
            text: isSolved ? successText : close ? closeText : errorText
        }

    },
} satisfies Actions;