<template>
  <h1>Famiglia Felisi</h1>
  <div v-for="membro in membri" :key="membro.id">
    <router-link
      class="membro"
      :to="`/membri/${membro.cognome.toLowerCase()}-${membro.nome.toLowerCase()}`"
    >
      <h3 class="membro">{{ membro.nome }}</h3>
    </router-link>
  </div>
</template>

<script>
import membri from "../backend/members";

export default {
  name: "FamilyMembersList",
  data() {
    return { membri };
  },
};
</script>

<style scoped>
.membro,
.membro:visited {
  color: blue;
  text-decoration: none;
}

.membro:hover {
  color: red;
}
</style>