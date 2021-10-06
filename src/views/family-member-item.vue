<template>
  <h2>{{ membro.cognome }} {{ membro.nome }}</h2>
</template>

<script>
import membri from "../backend/members";
export default {
  name: "FamilyMemberItem",
  data() {
    return {membri}
  },
  computed: {
    membro() {
      return membri.find((mb) => mb.id === this.$route.params.id);
    },
  },
};
</script>