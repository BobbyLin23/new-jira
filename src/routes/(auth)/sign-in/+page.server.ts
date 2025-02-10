import type { Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { loginFormSchema } from '$lib/features/auth/schema'
import { fail } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(loginFormSchema)),
  }
}

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(loginFormSchema))
    if (!form.valid) {
      return fail(400, {
        form,
      })
    }
    return {
      form,
    }
  },
}
