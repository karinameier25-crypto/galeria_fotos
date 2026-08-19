<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cadastro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-item>
        <ion-label position="floating">Nome</ion-label>
        <ion-input type="text" v-model="nome"></ion-input>
      </ion-item>


      <ion-item>
        <ion-label position="floating">E-mail</ion-label>
        <ion-input type="email" v-model="email"></ion-input>
      </ion-item>

      <ion-item>
    <ion-label position="floating">Senha</ion-label>
    <ion-input type="password" v-model="senha"></ion-input>
    </ion-item>

      <ion-item>
        <ion-label position="floating">Confirmar senha</ion-label>
        <ion-input type="password" v-model="confirmarSenha"></ion-input>
      </ion-item>

      <ion-button expand="block" @click="cadastrar">
        Cadastrar
      </ion-button>

      <p class="cadastro-texto">
  Já possui uma conta?
  <ion-button fill="clear" @click="irParaLogin">
    Faça login!
  </ion-button>
</p>


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nome = ref('');
const email = ref('');
const senha = ref('');
const confirmarSenha = ref('');

const cadastrar = () => {
  console.log(nome.value);
  console.log(email.value);
  console.log(senha.value);
  console.log(confirmarSenha.value);
};

const irParaLogin = () => {
  router.push('/login');
};
</script>