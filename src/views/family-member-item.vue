<template>
  <h2>{{ member.cognome }} {{ member.nome }}</h2>
  <h3>Nato il {{ member.dNascita }} (età: {{ age }} anni)</h3>
  <h3>Professione: {{ member.prof }}</h3>
  <router-link to="/">
    <button>Torna a Home</button>
  </router-link>
</template>

<script>
import members from "../backend/members";
export default {
  name: "FamilyMemberItem",
  computed: {
    member() {
      const url = this.$route.params.id;
      let cognome = url.slice(0, url.indexOf("-"));
      let nome = url.slice(url.indexOf("-") + 1);
      return members.find(
        (mb) =>
          mb.cognome.toLowerCase() === cognome && mb.nome.toLowerCase() === nome
      );
    },
    age() {
      const url = this.$route.params.id;
      let cognome = url.slice(0, url.indexOf("-"));
      let nome = url.slice(url.indexOf("-") + 1);

      let member = members.find(
        (mb) =>
          mb.cognome.toLowerCase() === cognome && mb.nome.toLowerCase() === nome
      );
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