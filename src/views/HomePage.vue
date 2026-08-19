<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Minha Galeria</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div class="ion-padding">

        <div v-if="fotos.length === 0" class="vazio">
          <ion-card>
            <ion-card-content>
              Nenhuma foto adicionada ainda!
            </ion-card-content>
          </ion-card>
        </div>

        <div v-else class="grid-fotos">

          <div
            v-for="(foto, index) in fotos"
            :key="index"
            class="foto-container"
          >

            <img
              :src="foto"
              alt="Foto da galeria"
            />

            <ion-button
              class="botao-remover"
              size="small"
              color="danger"
              @click="removerFoto(index)"
            >
              🗑
            </ion-button>

          </div>

        </div>

      </div>

      <!-- Botão flutuante -->
      <ion-fab
        vertical="bottom"
        horizontal="end"
        slot="fixed"
      >
        <ion-fab-button @click="adicionarFoto">
          📷
        </ion-fab-button>
      </ion-fab>

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
  IonFab,
  IonFabButton,
  IonCard,
  IonCardContent,
  IonButton,
  toastController
} from '@ionic/vue'

import { ref, onMounted } from 'vue'

import {
  Camera,
  CameraResultType,
  CameraSource
} from '@capacitor/camera'


const fotos = ref<string[]>([])


/*
 * Abre a câmera ou a galeria
 */
async function adicionarFoto() {

  try {

    const foto = await Camera.getPhoto({

      resultType: CameraResultType.DataUrl,

      source: CameraSource.Prompt,

      quality: 90,

      width: 800

    })

    if (foto.dataUrl) {

      fotos.value.push(foto.dataUrl)

      salvarFotos()

    }

  } catch (err: unknown) {

    if (String(err).includes('cancelled')) {
      return
    }

    await mostrarToast(
      'Não foi possível acessar a câmera ou galeria',
      'danger'
    )
  }
}


/*
 * Remove uma foto
 */
async function removerFoto(index: number) {

  fotos.value.splice(index, 1)

  salvarFotos()

  await mostrarToast(
    'Foto removida!',
    'success'
  )
}


/*
 * Salva as fotos no aparelho
 */
function salvarFotos() {

  localStorage.setItem(
    'fotos',
    JSON.stringify(fotos.value)
  )

}


/*
 * Recupera as fotos quando abre a Home
 */
function carregarFotos() {

  const fotosSalvas = localStorage.getItem('fotos')

  if (fotosSalvas) {

    fotos.value = JSON.parse(fotosSalvas)

  }

}


/*
 * Permissão da câmera
 */
async function verificarPermissao() {

  try {

    const status = await Camera.checkPermissions()

    if (status.camera !== 'granted') {

      const result = await Camera.requestPermissions()

      if (result.camera !== 'granted') {

        await mostrarToast(
          'Permissão de câmera negada',
          'danger'
        )

      }

    }

  } catch (err) {

    console.log('Erro ao verificar permissão:', err)

  }

}


/*
 * Toast
 */
async function mostrarToast(
  message: string,
  color: string = 'primary',
  duration = 2000
) {

  const toast = await toastController.create({

    message,

    color,

    duration,

    position: 'bottom'

  })

  await toast.present()

}


onMounted(() => {

  carregarFotos()

  verificarPermissao()

})

</script>


<style scoped>

.grid-fotos {

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 12px;

}


.foto-container {

  position: relative;

  width: 100%;

  aspect-ratio: 1 / 1;

  overflow: hidden;

  border-radius: 12px;

}


.foto-container img {

  width: 100%;

  height: 100%;

  object-fit: cover;

  display: block;

}


.botao-remover {

  position: absolute;

  top: 5px;

  right: 5px;

  --border-radius: 50%;

  min-width: 35px;

  min-height: 35px;

}


.vazio {

  text-align: center;

  margin-top: 30px;

}

</style>