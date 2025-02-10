<script lang='ts' module>
  import type { WithElementRef } from 'bits-ui'
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'
  import type { VariantProps } from 'tailwind-variants'
  import { tv } from 'tailwind-variants'

  export const buttonVariants = tv({
    base: 'cursor-pointer ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    variants: {
      variant: {
        primary: 'bg-gradient-to-b from-blue-600 to-blue-700 text-primary-foreground hover:from-blue-700 hover:to-blue-700',
        destructive: 'bg-gradient-to-b from-amber-600 to-amber-700 text-destructive-foreground hover:from-amber-700 hover:to-amber-700',
        outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
        secondary: 'bg-white text-black hover:bg-neutral-100 border border-border',
        ghost: 'border-transparent shadow-none hover:bg-accent hover:text-muted-foreground',
        muted: 'bg-neutral-200 text-neutral-600 hover:bg-neutral-200/80',
        teritrary: 'bg-blue-100 text-blue-600 border-transparent hover:bg-blue-200 shadow-none',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        xs: 'h-7 rounded-md px-2 text-xs',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  })

  export type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
  export type ButtonSize = VariantProps<typeof buttonVariants>['size']

  export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant
      size?: ButtonSize
    }
</script>

<script lang='ts'>
  import { cn } from '$lib/utils.js'

  let {
    class: className,
    variant = 'primary',
    size = 'default',
    ref = $bindable(null),
    href = undefined,
    type = 'button',
    children,
    ...restProps
  }: ButtonProps = $props()
</script>

{#if href}
  <a
    bind:this={ref}
    class={cn(buttonVariants({ variant, size }), className)}
    {href}
    {...restProps}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={ref}
    class={cn(buttonVariants({ variant, size }), className)}
    {type}
    {...restProps}
  >
    {@render children?.()}
  </button>
{/if}
