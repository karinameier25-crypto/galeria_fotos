# Minha Galeria

## Aluna

Karina Meier

## Curso

Informática para Internet

## Unidade Curricular

Codificar aplicações para dispositivos móveis

## Sobre o projeto

O aplicativo Minha Galeria foi desenvolvido em Ionic Vue que permite ao usuário realizar cadastro e login e, após entrar no aplicativo, adicionar fotos utilizando a câmera ou a galeria do dispositivo.

## Funcionalidades

- Cadastro de usuário
- Login
- Acesso protegido à tela principal
- Adição de fotos pela câmera
- Seleção de fotos da galeria
- Exibição das fotos em uma grade
- Remoção de fotos
- Tela Sobre
- Termos de Uso
- Termos de Privacidade

## Tecnologias utilizadas

- Ionic
- Vue.js
- TypeScript
- Capacitor
- Capacitor Camera
- Android

## Como rodar o projeto

1. Instalar o Ionic CLI
npm i -g @ionic/cli
2. Entrar na pasta do projeto
cd caminho/da/pasta/galeria_fotos
3. Instalar as dependências
npm install
4. Executar o projeto

Para executar o projeto no navegador:

ionic serve
5. Gerar o build
ionic build
6. Sincronizar com o Android
npx cap sync
7. Abrir no Android Studio
npx cap open android
8. Atualizar o projeto no Android Studio

Após realizar alterações no código, execute:

ionic build
npx cap sync

Depois, abra o projeto no Android Studio:

npx cap open android
