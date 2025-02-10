<script lang='ts'>
  import type { LayoutProps } from './$types'
  import { page } from '$app/state'
  import logo from '$lib/assets/logo.svg'
  import { Button } from '$lib/components/ui/button'

  let { children }: LayoutProps = $props()

  let pathname = $state(page.url.pathname)
  let buttonText = $derived(pathname === '/sign-in' ? 'Sign up' : 'Sign in')
  let buttonHref = $derived(pathname === '/sign-in' ? '/sign-up' : '/sign-in')

  $effect(() => {
    pathname = page.url.pathname
  })
</script>

<main class='bg-neutral-100 min-h-screen'>
  <div class='mx-auto max-w-screen-2xl p-4'>
    <nav class='flex justify-between items-center'>
      <img alt='Logo' src={logo} height={56} width={152} />
      <Button variant='secondary'>
        <a href={buttonHref}>
          {buttonText}
        </a>
      </Button>
    </nav>
    <div class='flex flex-col items-center justify-center pt-4 md:pt-14'>
      {@render children()}
    </div>
  </div>
</main>
