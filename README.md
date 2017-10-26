# toDoListFatec

### App desenvolvido para demonstração no Mini curso de Introdução ao Desenvolvimento de Apps com Ionic e Firebase ministrado na Fatec de Mogi das Cruzes

[Live Demo](https://todolistfatec.firebaseapp.com) 

### Install

Após baixar o projeto, rode o comando no terminal:
```bash
npm install 
```

No arquivo [app.module.ts](https://github.com/wesleymonaro/toDoListFatec/blob/master/src/app/app.module.ts) altere as variáveis de configuração do Firebase para as que foram fornecidas na sua conta.

Depois de finalizar, execute:
```bash
ionic lab
```

Para criar a plataforma Android no projeto, execute no terminal:

```bash
cordova platform add android
```

*Para rodar esse comando, o SDK do android precisa estar instalado na máquina.*


Para debugar a aplicação no Chrome, conecte o device via USB, com modo de desenvolvedor ativo, e abra no chrome: [chrome://inspect](chrome://inspect) 

Para usar um emulador, vimos durante a aula o Genymotion - [Genymotion personal use](https://www.genymotion.com/fun-zone/)

Para espelhar a tela do celular no PC, usamos o [Vysor](https://www.vysor.io)

E por fim, adicionamos o nosso projeto no Firebase Hosting, executando os comandos:

```bash
firebase init
```

E depois de configurar:

```bash
firebase deploy
```
