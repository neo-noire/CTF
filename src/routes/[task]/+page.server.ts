import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
    if (!url.pathname.includes('konoha-village')) {
        redirect(302, '/')
    }
}