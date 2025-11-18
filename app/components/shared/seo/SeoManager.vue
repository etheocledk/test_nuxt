<template>
  <div></div>
</template>

<script setup lang="ts">
import { useHead, useRoute } from '#imports'

const route = useRoute()

const title = 'Page d\'accueil - Wink'
const description = 'Wink.'
const siteUrl = 'https://monsite.com'
const currentUrl = siteUrl + route.path

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: currentUrl },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: currentUrl }
  ]
})
</script>
