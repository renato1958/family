<template>
  <h1>Famiglia F****i</h1>
  <h3 v-for="membro in membri" :key="membro.id">
    <router-link
      :to="`/membri/${membro.cognome.toLowerCase()}-${membro.nome.toLowerCase()}`"
    >
      {{ membro.nome }} {{ membro.cognome }}
    </router-link>
  </h3>
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