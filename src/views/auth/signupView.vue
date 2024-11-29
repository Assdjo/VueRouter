<script setup></script>

<template>
  <div>
    <form action="get">
      <h2>S'inscrire</h2>
      <input type="text" name="nom" placeholder="Entrez votre nom" /><br /><input type="text"  name="Prenom" placeholder="Entrez votre prénom"/><br />
      <input type="password"  name="Motdepasse" placeholder="Créez votre mot de passe"/><br>
      <input type="password"  name="Motdepasse" placeholder="Confirmez le mot de passe"/>
      <br><button>creer mon compte</button><br>
      <span>already have an account ?</span><RouterLink :to="`/`">Connexion</RouterLink>
    </form>
  </div>
</template>

<style scoped></style>
