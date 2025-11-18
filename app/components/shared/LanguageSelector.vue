<script setup lang="ts">
import { computed } from 'vue'
import { useI18nLocale } from '~/components/core/useI18nLocale'

const { currentLocale, availableLocales, setLocale } = useI18nLocale()

const handleLocaleChange = async (value: string) => {
  await setLocale(value)
}

const dropdownOptions = computed(() =>
  availableLocales.value.map(locale => ({
    label: locale.flag,
    value: locale.code
  }))
)
</script>

<template>
  <div class="language-selector">
    <USelect
      :model-value="currentLocale"
      :items="dropdownOptions"
      option-attribute="label"
      value-attribute="value"
      class="w-16"
      @update:model-value="(value: any) => handleLocaleChange(value)"
    />
  </div>
</template>

<style scoped>
.language-selector {
  display: flex;
  align-items: center;
}
</style>
