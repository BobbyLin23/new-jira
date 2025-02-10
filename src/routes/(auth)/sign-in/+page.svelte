<script lang='ts'>
  import type { PageData } from './$types'
  import SignInCard from '$lib/features/auth/components/sign-in-card.svelte'

  let { data }: { data: PageData } = $props()
</script>

<SignInCard {data} />
