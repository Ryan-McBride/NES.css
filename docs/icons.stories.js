import { storiesOf } from '@storybook/html';

import '../css/nes.css';

storiesOf('Icons', module)
  .add('icon.twitter', () => '<i class="icon twitter"></i>')
  .add('icon.twitter.is-medium', () => '<i class="icon twitter is-medium"></i>')
  .add('icon.twitter.is-large', () => '<i class="icon twitter is-large"></i>')
  .add('icon.facebook', () => '<i class="icon facebook"></i>')
  .add('icon.facebook.is-medium', () => '<i class="icon facebook is-medium"></i>')
  .add('icon.facebook.is-large', () => '<i class="icon facebook is-large"></i>')
  .add('icon.github', () => '<i class="icon github"></i>')
  .add('icon.github.is-medium', () => '<i class="icon github is-medium"></i>')
  .add('icon.github.is-large', () => '<i class="icon github is-large"></i>')
  .add('icon.youtube', () => '<i class="icon youtube"></i>')
  .add('icon.youtube.is-medium', () => '<i class="icon youtube is-medium"></i>')
  .add('icon.youtube.is-large', () => '<i class="icon youtube is-large"></i>')
  .add('icon.close', () => '<i class="icon close"></i>')
  .add('icon.close.is-medium', () => '<i class="icon close is-medium"></i>')
  .add('icon.close.is-large', () => '<i class="icon close is-large"></i>')
  .add('octocat animate', () => '<i class="octocat animate"></i>')
  .add('icon.trophy', () => '<i class="icon trophy"></i>')
  .add('icon.trophy is-medium', () => '<i class="icon trophy is-medium"></i>')
  .add('icon.trophy is-large', () => '<i class="icon trophy is-large"></i>')
  .add('nes-logo', () => '<i class="nes-logo"></i>')
  .add('nes-jp-logo', () => '<i class="nes-jp-logo"></i>')
  .add('snes-logo', () => '<i class="snes-logo"></i>')
  .add('snes-jp-logo', () => '<i class="snes-jp-logo"></i>');
