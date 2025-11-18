<script setup lang="ts">

interface Props {
  showLabel?: boolean
  variant?: 'dropdown' | 'buttons'
  showFlag?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showLabel: true,
  variant: 'dropdown',
  showFlag: true
})

const { t } = useI18n()
const { currentLocale, availableLocales, setLocale, getCurrentLocaleOption } = useI18nLocale()

const handleLocaleChange = async (value: string | number | boolean | undefined) => {
  if (typeof value === 'string') {
    await setLocale(value)
  }
}

// Options pour le dropdown avec flags
const dropdownOptions = computed(() =>
  availableLocales.value.map(locale => ({
    label: props.showFlag ? `${locale.flag} ${locale.name}` : locale.name,
    value: locale.code
  }))
)

// Option courante avec flag
const currentOption = computed(() => {
  const current = getCurrentLocaleOption.value
  if (!current) return null

  return {
    label: props.showFlag ? `${current.flag} ${current.name}` : current.name,
    value: current.code
  }
})
</script>

<template>
  <div class="language-selector">
    <!-- Dropdown variant -->
    <div v-if="variant === 'dropdown'" class="flex items-center space-x-2">
      <label v-if="showLabel" class="text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ t('navigation.language') }}
      </label>
      <USelect :model-value="currentLocale" :items="dropdownOptions" option-attribute="label" value-attribute="value"
        class="min-w-32" @update:model-value="(value: any) => handleLocaleChange(value)" />
    </div>

    <!-- Buttons variant -->
    <div v-else-if="variant === 'buttons'" class="flex items-center space-x-2">
      <label v-if="showLabel" class="text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ t('navigation.language') }}
      </label>
      <div class="flex space-x-1">
        <UButton v-for="locale in availableLocales" :key="locale.code"
          :variant="currentLocale === locale.code ? 'solid' : 'outline'"
          :color="currentLocale === locale.code ? 'primary' : 'neutral'" size="xs" class="flex items-center gap-1"
          @click="() => handleLocaleChange(locale.code)">
          <span v-if="showFlag">{{ locale.flag }}</span>
          {{ locale.name }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.language-selector {
  display: flex;
  align-items: center;
}
</style>
