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
        <ion-input
          v-model="email"
          type="email"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Senha</ion-label>
        <ion-input
          v-model="senha"
          type="password"
        ></ion-input>
      </ion-item>

      <ion-button
        expand="block"
        class="ion-margin-top"
        @click="entrar"
      >
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
  IonButton,
  alertController
} from '@ionic/vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const senha = ref('');

const entrar = async () => {

  const dados = localStorage.getItem('usuario');

  if (!dados) {
    const alert = await alertController.create({
      header: 'Atenção',
      message: 'Nenhum usuário cadastrado. Faça seu cadastro primeiro.',
      buttons: ['OK']
    });

    await alert.present();
    return;
  }

  const usuario = JSON.parse(dados);

  if (
    email.value === usuario.email &&
    senha.value === usuario.senha
  ) {

    localStorage.setItem('logado', 'true');

    router.push('/tabs/tab1');

  } else {

    const alert = await alertController.create({
      header: 'Erro',
      message: 'E-mail ou senha incorretos.',
      buttons: ['OK']
    });

    await alert.present();
  }
};

const irParaCadastro = () => {
  router.push('/cadastro');
};
</script>

<style scoped>
.cadastro-texto {
  text-align: center;
  margin-top: 20px;
}
</style>