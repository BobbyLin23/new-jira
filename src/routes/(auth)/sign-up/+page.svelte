<script lang='ts'>
  import type { PageData } from './$types'
  import SignUpCard from '$lib/features/auth/components/sign-up-card.svelte'

  let { data }: { data: PageData } = $props()
</script>

<SignUpCard {data} />
