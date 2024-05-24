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

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

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
</style>
