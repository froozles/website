// @ts-ignore
const { Typed } = window;

const typed2 = new Typed('#strike', {
  strings: [
    ' ',
    'ZM0F',
    'the guy from jd',
    'the guy from the wilderness bear',
    'best clash royale player',
  ],
  typeSpeed: 95,
  backSpeed: 81,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}
