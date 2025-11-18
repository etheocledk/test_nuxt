<script setup lang="ts">
import { computed } from 'vue'
import { useI18nLocale } from '~/components/core/useI18nLocale'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
    <label class="sr-only" for="lang-select">{{ t('header.language') }}</label>
    <USelect
      id="lang-select"
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
