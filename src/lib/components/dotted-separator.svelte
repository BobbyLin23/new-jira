<script lang='ts'>
  import { cn } from '$lib/utils'

  interface DottedSeparatorProps {
    class?: string
    color?: string
    height?: string
    dotSize?: string
    gapSize?: string
    direction?: 'horizontal' | 'vertical'
  }

  let {
    class: className = '',
    color = '#d4d4d8',
    height = '2px',
    dotSize = '2px',
    gapSize = '6px',
    direction = 'horizontal',
  }: DottedSeparatorProps = $props()

  const isHorizontal = direction === 'horizontal'
</script>

<div class={cn(isHorizontal ? 'w-full flex items-center' : 'h-full flex flex-col items-center', className)}>
  <div
    class={cn(isHorizontal ? 'flex-grow' : 'flex-grow-0')}
    style:width={isHorizontal ? '100%' : height}
    style:height={isHorizontal ? height : '100%'}
    style:background-image={`radial-gradient(circle, ${color} 24%, transparent 25%)`}
    style:background-size={isHorizontal ? `${Number.parseInt(dotSize) + Number.parseInt(gapSize)}px ${height}` : `${height} ${Number.parseInt(dotSize) + Number.parseInt(gapSize)}px`}
    style:background-repeat={isHorizontal ? 'repeat-x' : 'repeat-y'}
    style:background-position='center'
  ></div>
</div>
