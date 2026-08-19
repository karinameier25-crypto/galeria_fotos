<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-item>
        <ion-label position="floating">E-mail</ion-label>
        <ion-input type="email"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Senha</ion-label>
        <ion-input type="password"></ion-input>
      </ion-item>

      <ion-button expand="block">
        Entrar
      </ion-button>

      <p class="cadastro-texto">
  Não possui uma conta?
  <ion-button fill="clear" @click="irParaCadastro">
    Cadastre-se!
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

import { useRouter } from 'vue-router';

const router = useRouter();

const irParaCadastro = () => {
  router.push('/cadastro');
};
</script>