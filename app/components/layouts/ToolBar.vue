<script setup lang="ts">
// interface Props {
//   as?: string
//   sticky?: boolean
//   ui?: {
//     root?: string
//     left?: string
//     right?: string
//   }
// }

// const props = withDefaults(defineProps<Props>(), {
//   as: 'div',
//   sticky: false,
//   ui: () => ({})
// })

// const appConfig = useAppConfig()
// const defaultConfig = {
//   root: 'shrink-0 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px] bg-white dark:bg-gray-900',
//   left: 'flex items-center gap-1.5',
//   right: 'flex items-center gap-1.5'
// }

// const config = computed(() => {
//   const baseRoot = props.ui.root || appConfig.ui?.toolbar?.slots?.root || defaultConfig.root
//   const stickyClasses = props.sticky ? ' sticky top-0 z-10' : ''

//   return {
//     root: baseRoot + stickyClasses,
//     left: props.ui.left || appConfig.ui?.toolbar?.slots?.left || defaultConfig.left,
//     right: props.ui.right || appConfig.ui?.toolbar?.slots?.right || defaultConfig.right
//   }
// })
</script>

<template>
  <!-- <component :is="as" :class="config.root">
    <div v-if="$slots.left" :class="config.left">
      <slot name="left" />
    </div>

    <div class="flex-1">
      <slot />
    </div>

    <div v-if="$slots.right" :class="config.right">
      <slot name="right" />
    </div>
  </component> -->
  <div>
    
  </div>
</template>
