<template>
  <DefaultLayout class="scroll_enabled">
    <router-view />
  </DefaultLayout>
</template>

<script setup lang="tsx">
import { DefaultLayout } from '@/renderer/components/layout'
</script>

<style lang="scss">
html {
  overflow-y: auto !important;
  user-select: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
/* Do not force capitalization of button text */
.v-btn {
  text-transform: unset !important;
}

//_____________
:root {
  --bg: hsl(250, 24%, 9%);
  --fg: hsl(0, 0%, 100%);
  --pink: hsl(270, 60%, 52%);
  --secondaryBg: hsl(250, 21%, 11%);
  --green-700: hsl(152, 38%, 70%);
  --gray-600: hsl(246, 6%, 65%);
  --gray-200: hsl(246, 11%, 22%);
  --gray-50: hsl(248, 21%, 13%);
  --red-500: hsl(1, 62%, 44%);

  --v-theme-background: var(--bg);
}

$dots: radial-gradient(farthest-side, var(--gray-200), 7%, transparent 10%) 0 0 / 24px 24px;

@mixin dots {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: $dots;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: visible;
  background-color: var(--bg);
  color: var(--fg);
  @media screen and (max-width: 150px) {
    visibility: hidden;
  }
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen-Sans,
    Ubuntu,
    Cantarell,
    Helvetica Neue,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol;
}

body::before {
  @include dots();
}

h1 {
  font-size: 32px;
  font-weight: 700;
  margin: 1rem;
}

p {
  font-size: 24px;
  font-weight: 500;
  margin: 1rem;

  color: var(--gray-600);
  margin: 1rem;
}

hr {
  width: 100%;
  background-color: var(--gray-200);
  height: 1px;
  border: 0;
  margin: 0%;
}

ul {
  margin: 1rem;
}

a {
  color: white;
  font-size: 32px;
  font-weight: 700;
  appearance: none;
  text-decoration: none;
}

main {
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 16px;
}

.btn {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;

  font-size: 16px;
  font-weight: 500;

  margin: 1rem;
  appearance: none;
  text-decoration: none;

  padding: 12px 24px;
  border-radius: 6px;

  color: var(--gray-600);
  background-color: var(--gray-50);

  cursor: pointer;
}

.btn:hover {
  background-color: var(--gray-200);
}

.header {
  display: block;
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 100%;
}

.container {
  width: 15rem;

  position: relative;

  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 0.75rem;
  border: 0.1rem solid;
  border-color: var(--gray-200);

  background-color: var(--secondaryBg);

  margin: 40px auto auto auto;
}

.padding-up {
  padding: 40px 40px 0 40px;
}

.padding-lr {
  padding: 0 40px 0 40px;
}

.padding-bt {
  padding: 0 40px 40px 40px;
}

.padding {
  padding: 40px;
  margin: auto;
}

.central-container {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 0.75rem;
  border: 0.1rem solid;
  border-color: var(--gray-200);

  background-color: var(--secondaryBg);
}

.width-100 {
  width: 100%;
}

.flex-start {
  align-self: flex-start;
}

.red-button {
  border: 0.1rem solid;
  border-radius: 0.75rem;
  border-color: rgb(79, 24, 23);
  background-color: rgba(0, 0, 0, 0);
}

.red-button:hover {
  transition: 300ms ease;
  background-color: rgb(44, 17, 17);
}

//____________________
.b {
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  .btn {
    max-width: 200px;
  }
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  color: #ccc;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
button:focus {
  outline: 1px solid transparent;
  outline-color: #646cff;
}

input {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 10px;
  color: #ccc;
}
input:hover {
  border-color: #646cff;
}
input:focus,
input:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
input:focus {
  outline: 1px solid transparent;
  outline-color: #646cff;
}

select {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 10px;
  color: #ccc;
}
select:hover {
  border-color: #646cff;
}
select:focus,
select:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
select:focus {
  outline: 1px solid transparent;
  outline-color: #646cff;
}

.logo {
  will-change: filter, transform;
  transition:
    filter 300ms,
    transform 300ms;
  cursor: pointer;
  margin: 10px;
}
.logo:hover {
  filter: drop-shadow(0 0 0.5em #646cffaa);
  transform: scale(1.3);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 0.5em #42b883aa);
}
.logo.back {
  transform: scale(0.8);
}
.logo.back:hover {
  filter: drop-shadow(0 0 0.5em #646cffaa);
  transform: scale(1);
}

.logo-del-transitions {
  cursor: pointer;
  margin: 10px;
}

//_______________________________________________
.h1 {
  font-size: xx-large;
  display: flex;
  vertical-align: bottom;
  -webkit-text-fill-color: #8a8a8a;
}

.mn {
  display: flex;
  flex-direction: row;
}

.h-100 {
  height: 45px;
  padding: 10px;
  margin: 0px 20px 0px 20px;
  border-radius: 0px 0px 10px 10px;
  border-color: var(--gray-200);
  background-color: var(--secondaryBg);
}

.st {
  display: flex;
  justify-content: space-between;
  p {
    @media screen and (max-width: 1150px) {
      width: 150px;
      font-size: smaller;
    }
    @media screen and (max-width: 450px) {
      width: 50px;
      font-size: smaller;
    }
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
  }
}

.cg {
  color: var(--green-700);
}

.cont {
  border-radius: 0.75rem;
  border: 0.1rem solid;
  border-color: var(--gray-200);

  background-color: var(--secondaryBg);

  padding: 10px;
}

.cl {
  height: 100%;
  width: 150px;
  margin: auto;
}

.mg-10 {
  margin: 10px;
}

.mg-20 {
  margin: 20px;
}

.mg-a {
  margin: auto;
}

.w-100 {
  width: 75px;
}
//________________________________________________
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

.fliex-column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.scroll_enabled {
  overflow: scroll;
  height: 1000px; /* define your custom height */
}

.scroll_enabled::-webkit-scrollbar {
  width: 20px;
}
.scroll_enabled::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0);
}
.scroll_enabled::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 6px;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: content-box;
  min-width: 32px;
  min-height: 32px;
}
.scroll_enabled::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}

//_______________________________
.tooltip {
  position: relative;
  display: inline-block;
  //border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  //top: 15px;
  //left: 500%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.df {
  display: flex;
}
</style>
