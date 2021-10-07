<template>
  <h2>{{ member.cognome }} {{ member.nome }}</h2>
  <h3>Nato il {{ member.dNascita }} (età: {{ age }} anni)</h3>
  <h3>Professione: {{ member.prof }}</h3>
</template>

<script>
import members from "../backend/members";
export default {
  name: "FamilyMemberItem",
  computed: {
    member() {
      return members.find((mb) => mb.id === this.$route.params.id);
    },
    age() {
      let member = members.find((mb) => mb.id === this.$route.params.id);
      let dNascita = member.dNascita.split("/").reverse().join("-");
      const oggi = new Date();
      const age = Math.floor(
        (oggi - new Date(dNascita)) / (1000 * 60 * 60 * 24 * 365)
      );

      return age;
    },
  },
};
</script>