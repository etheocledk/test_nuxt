<template>
  <div class="space-y-8">
    <form class="space-y-4">
      <h2 class="text-xl font-semibold mb-6">Faisons connaissance</h2>
      <ProfilePictureForm label="Photo de profil" />
      <div>
        <label class="block mb-1 font-semibold">Nom</label>
        <input type="text" class="input input-bordered w-full" placeholder="Votre nom" />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Prénom</label>
        <input type="text" class="input input-bordered w-full" placeholder="Votre prénom" />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Email</label>
        <input type="email" class="input input-bordered w-full" placeholder="Votre email" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import ProfilePictureForm from '~/components/ProfilePictureForm.vue'
</script>
