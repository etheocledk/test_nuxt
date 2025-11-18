<template>
  <form class="space-y-4">
    <h2 class="text-xl font-semibold mb-6">Créez votre espace de travail</h2>
    <ProfilePictureForm label="Logo de l’entreprise" shape="square" icon="building" class="mb-6" />
    <div>
      <label class="block mb-1 font-semibold">Nom de l'espace</label>
      <input type="text" class="input input-bordered w-full" placeholder="Nom de l'espace de travail" />
    </div>
    <div>
      <label class="block mb-1 font-semibold">Secteur d'activité</label>
      <input type="text" class="input input-bordered w-full" placeholder="Secteur d'activité" />
    </div>
  </form>
  <div class="mt-4 text-center text-lg font-semibold">Créez votre espace de travail</div>
</template>

<script setup lang="ts">
import ProfilePictureForm from './ProfilePictureForm.vue'
// ...
</script>
