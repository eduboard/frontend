<template>
  <div>
    <Dashboard id="dashboard"></Dashboard>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue';

export default {
  components: {
    Dashboard,
  },
};
</script>

<style>
html {
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on; }
  html *, html *::after, html *::before {
    box-sizing: inherit; }

body {
  margin: 0; }

img {
  max-width: 100%; }

hr {
  height: 0; }

abbr[title] {
  text-decoration: underline dotted; }

b,
strong {
  font-weight: 700; }

code,
kbd,
samp,
pre {
  font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 1em; }

small {
  font-size: 80%; }

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline; }

sub {
  bottom: -0.25em; }

sup {
  top: -0.5em; }

figure {
  margin: 0; }

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0; }

button,
select {
  outline: 0;
  text-transform: none; }

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; }

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0; }

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText; }

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  display: block;
  /* For Firefox */ }

#dashboard .card__link, #dashboard .dashboard__course__file a {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%; }

#dashboard .container, #dashboard .container-narrow {
  margin: 0 auto;
  padding: 0 1.25rem;
  width: 100%; }

#dashboard .container {
  max-width: 1440px; }

#dashboard .container-narrow {
  max-width: 576px; }

html {
  font-size: 15px; }

body {
  background: #FAFAFA;
  font-size: 1.175rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  line-height: 1.5; }

#dashboard input {
  background: transparent;
  border: 0;
  border-bottom: 1px solid #70808E;
  color: #70808E;
  outline: 0; }
  #dashboard input::placeholder {
    color: #BAC2CA; }

#dashboard button {
  background: #000000;
  border: 0;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-weight: 700;
  line-height: 1;
  padding: 1.25rem 1rem;
  text-align: center;
  transition: all 0.2s ease-out; }
  #dashboard button:hover {
    background: #70808E; }

#dashboard h2 {
  color: #70808E;
  font-size: 1.375rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1em; }

#dashboard .controls {
  background: #000000;
  color: #FFFFFF;
  overflow: auto;
  padding: 0.875rem 0 0; }
  #dashboard .controls__container {
    display: flex;
    justify-content: space-between; }
  #dashboard .controls__logo {
    font-size: 2rem;
    line-height: 1;
    margin: 0.5rem 0 0.875rem; }
  #dashboard .controls__navigation {
    margin-left: -1.25rem;
    margin-top: auto; }
    #dashboard .controls__navigation ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0; }
    #dashboard .controls__navigation__item {
      line-height: 1; }
      #dashboard .controls__navigation__item a {
        color: #70808E;
        display: block;
        font-weight: 700;
        padding: 0.875rem 1.25rem 0.875rem;
        position: relative;
        text-decoration: none; }
        #dashboard .controls__navigation__item a:hover {
          color: #FAFAFA; }
        #dashboard .controls__navigation__item a::after {
          border-top: 3px solid #FFFFFF;
          bottom: 0;
          content: '';
          display: none;
          left: 0;
          position: absolute;
          width: 100%; }
      #dashboard .controls__navigation__item.active a {
        color: #FFFFFF; }
        #dashboard .controls__navigation__item.active a::after {
          display: block; }
#dashboard .controls__container--large, #dashboard .controls__container--small {
    display: flex;
    flex-direction: column; }
  #dashboard .controls__user {
    align-items: center;
    display: flex; }
    #dashboard .controls__user__name {
      font-size: 1.375rem;
      font-weight: 700;
      line-height: 1; }
    #dashboard .controls__user__image {
      align-items: center;
      background: #FFFFFF;
      border-radius: 50%;
      color: #000000;
      display: flex;
      font-weight: 700;
      height: 50px;
      justify-content: center;
      margin-left: 1.5rem;
      width: 50px; }

#dashboard .card {
  background: #FFFFFF;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.05);
  color: #70808E;
  padding: 1rem 1.25rem 1.5rem;
  position: relative;
  transition: all 0.2s ease-out; }
  #dashboard .card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.05); }
  #dashboard .card h3 {
    color: #000000;
    margin: 0 0 0.75rem; }
    #dashboard .card h3 span {
      display: none; }
  #dashboard .card.new h3 span {
    color: #50A5FF;
    display: inline-block;
    font-size: 0.875rem;
    margin-left: 10px; }
  #dashboard .card p {
    margin: 0 0 0.75rem; }
    #dashboard .card p:first-child {
      color: #000000;
      margin-bottom: 0; }
  #dashboard .card strong {
    font-size: 1rem; }
  #dashboard .card span {
    color: #BAC2CA;
    font-size: 0.875rem; }
  #dashboard .card.new span {
    color: #50A5FF;
    font-weight: bold; }
  #dashboard .card.new::before {
    background: #50A5FF;
    border-radius: 50%;
    content: '';
    height: 16px;
    left: -8px;
    position: absolute;
    top: 18px;
    width: 16px; }

#dashboard .dashboard {
  display: flex;
  padding-top: 5rem; }
  #dashboard .dashboard__courses {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0; }
  #dashboard .dashboard__course {
    display: flex;
    margin-bottom: 1rem; }
    #dashboard .dashboard__course.card::before {
      top: 1.5rem; }
    #dashboard .dashboard__course__files {
      align-content: flex-end;
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 50%;
      list-style: none;
      margin: 0 0 0 4%;
      padding: 0;
      position: relative;
      z-index: 10; }
    #dashboard .dashboard__course__file {
      background: #000000;
      color: #FFFFFF;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1;
      margin: 0.3rem;
      padding: 0.4rem 0.5rem 0.5rem;
      position: relative;
      transition: all 0.2s ease-out; }
      #dashboard .dashboard__course__file:hover {
        background: #70808E; }
  #dashboard .dashboard__sidebar {
    margin-left: 3rem;
    flex: 0 0 360px; }
    #dashboard .dashboard__sidebar__search {
      position: relative; }
      #dashboard .dashboard__sidebar__search input {
        padding: 0.25rem 0 0.75rem 2.5rem;
        width: 100%; }
      #dashboard .dashboard__sidebar__search svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 2rem;
        width: 2rem; }
    #dashboard .dashboard__sidebar__all {
      margin-top: 0.75rem;
      width: 100%; }
    #dashboard .dashboard__sidebar__messages {
      list-style: none;
      margin: 0;
      padding: 0; }
    #dashboard .dashboard__sidebar__message {
      font-size: 1rem;
      margin-bottom: 0.875rem; }
    #dashboard .dashboard__sidebar h2 {
      margin-top: 2.5rem; }

</style>

