<script lang='ts'>
  import type { Infer, SuperValidated } from 'sveltekit-superforms'
  import type { RegisterFormSchema } from '../schema'
  import { DottedSeparator } from '$lib/components'
  import GithubIcon from '$lib/components/icons/github-icon.svelte'
  import GoogleIcon from '$lib/components/icons/google-icon.svelte'
  import { Button } from '$lib/components/ui/button'
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card'
  import * as Form from '$lib/components/ui/form'
  import { Input } from '$lib/components/ui/input'
  import { superForm } from 'sveltekit-superforms'
  import { zodClient } from 'sveltekit-superforms/adapters'
  import { registerFormSchema } from '../schema'

  let { data }: { data: { form: SuperValidated<Infer<RegisterFormSchema>> } }
    = $props()

  const form = superForm(data.form, {
    validators: zodClient(registerFormSchema),
  })

  const { form: formData, enhance } = form
</script>

<Card class='size-full md:w-[487px] border-none shadow-none'>
  <CardHeader class='flex items-center justify-center text-center p-7'>
    <CardTitle class='text-2xl'>
      Sign Up
    </CardTitle>
    <CardDescription>
      By signing up, you agree to our
      <a href='/terms'>
        <span class='text-blue-700'>Terms of Service</span>
      </a>
      and
      <a href='/privacy'>
        <span class='text-blue-700'>Privacy Policy</span>
      </a>
    </CardDescription>
  </CardHeader>
  <div class='px-7 mb-2'>
    <DottedSeparator />
  </div>
  <CardContent class='p-7'>
    <form method='POST' use:enhance class='space-y-4'>
      <Form.Field {form} name='name'>
        <Form.Control>
          {#snippet children({ props })}
            <Input
              {...props}
              bind:value={$formData.name}
              placeholder='Enter your name'
            />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name='email'>
        <Form.Control>
          {#snippet children({ props })}
            <Input
              {...props}
              bind:value={$formData.email}
              type='email'
              placeholder='Enter your email'
            />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name='password'>
        <Form.Control>
          {#snippet children({ props })}
            <Input
              {...props}
              required
              type='password'
              placeholder='Enter your password'
            />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Button disabled={false} size='lg' type='submit' class='w-full'>
        Sign Up
      </Button>
    </form>
  </CardContent>
  <div class='px-7'>
    <DottedSeparator />
  </div>
  <CardContent class='flex p-7 flex-col gap-y-4'>
    <Button disabled={false} size='lg' variant='secondary' class='w-full'>
      <GoogleIcon class='size-5 mr-2' />
      Login with Google
    </Button>
    <Button disabled={false} size='lg' variant='secondary' class='w-full'>
      <GithubIcon class='size-5 mr-2' />
      Login with Github
    </Button>
  </CardContent>
  <div class='px-7'>
    <DottedSeparator />
  </div>
  <CardContent class='flex p-7 items-center justify-center'>
    <p>
      Already have an account?
      <a href='/sign-in' class='text-blue-700'>
        &nbsp;Sign in
      </a>
    </p>
  </CardContent>
</Card>
