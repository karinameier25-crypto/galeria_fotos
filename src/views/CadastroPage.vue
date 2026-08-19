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
        <ion-input v-model="nome" type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">E-mail</ion-label>
        <ion-input v-model="email" type="email"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Senha</ion-label>
        <ion-input v-model="senha" type="password"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Confirmar senha</ion-label>
        <ion-input v-model="confirmarSenha" type="password"></ion-input>
      </ion-item>

      <ion-button expand="block" class="ion-margin-top" @click="cadastrar">
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
  IonButton,
  alertController
} from '@ionic/vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nome = ref('');
const email = ref('');
const senha = ref('');
const confirmarSenha = ref('');

const cadastrar = async () => {

  if (!nome.value || !email.value || !senha.value || !confirmarSenha.value) {
    const alert = await alertController.create({
      header: 'Atenção',
      message: 'Preencha todos os campos.',
      buttons: ['OK']
    });

    await alert.present();
    return;
  }

  if (senha.value !== confirmarSenha.value) {
    const alert = await alertController.create({
      header: 'Atenção',
      message: 'As senhas não são iguais.',
      buttons: ['OK']
    });

    await alert.present();
    return;
  }

  const usuarioExistente = localStorage.getItem('usuario');

  if (usuarioExistente) {
    const alert = await alertController.create({
      header: 'Atenção',
      message: 'Já existe um usuário cadastrado.',
      buttons: ['OK']
    });

    await alert.present();
    return;
  }

  const usuario = {
    nome: nome.value,
    email: email.value,
    senha: senha.value
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));

  const alert = await alertController.create({
    header: 'Sucesso!',
    message: 'Cadastro realizado com sucesso.',
    buttons: ['OK']
  });

  await alert.present();

  router.push('/login');
};

const irParaLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
.cadastro-texto {
  text-align: center;
  margin-top: 20px;
}
</style>