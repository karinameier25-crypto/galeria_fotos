<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Privacidade</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <h1>Termos de Privacidade</h1>

      <h2>1. Dados do usuário</h2>

      <p>
        O aplicativo utiliza dados básicos de cadastro,
        como nome, e-mail e senha, para permitir o acesso
        à conta do usuário.
      </p>

      <h2>2. Fotos</h2>

      <p>
        As fotos selecionadas ou tiradas pelo usuário são
        utilizadas exclusivamente para exibição dentro
        do aplicativo.
      </p>

      <h2>3. Permissões</h2>

      <p>
        O aplicativo pode solicitar permissão para acessar
        a câmera e a galeria de fotos do dispositivo.
      </p>

      <h2>4. Segurança</h2>

      <p>
        As informações utilizadas pelo aplicativo são
        armazenadas localmente no dispositivo durante
        a utilização da aplicação.
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
  IonContent
} from '@ionic/vue'

</script>