<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Sobre</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <div class="sobre">

        <h1>Minha Galeria</h1>

        <p class="descricao">
          Um aplicativo simples para armazenar e visualizar
          suas fotos de forma prática.
        </p>

        <ion-card>
          <ion-card-header>
            <ion-card-title>Informações do aplicativo</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <p><strong>Versão:</strong> 1.0.0</p>
            <p><strong>Desenvolvido por:</strong> Karina Meier</p>
          </ion-card-content>
        </ion-card>

        <ion-list>

          <ion-item button @click="abrirTermos">
            <ion-label>
              <h2>Termos de Uso</h2>
              <p>Leia os termos de utilização do aplicativo.</p>
            </ion-label>
          </ion-item>

          <ion-item button @click="abrirPrivacidade">
            <ion-label>
              <h2>Termos de Privacidade</h2>
              <p>Saiba como suas informações são utilizadas.</p>
            </ion-label>
          </ion-item>

        </ion-list>

      </div>

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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/vue'

import { useRouter } from 'vue-router'

const router = useRouter()

function abrirTermos() {
  router.push('/termos')
}

function abrirPrivacidade() {
  router.push('/privacidade')
}

</script>

<style scoped>

.sobre {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-top: 20px;
}

.descricao {
  text-align: center;
  color: #666;
  margin-bottom: 25px;
}

ion-card {
  margin-left: 0;
  margin-right: 0;
}

</style>