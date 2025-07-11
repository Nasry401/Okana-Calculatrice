const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

let current = '';

const clickSound = document.getElementById("clickSound");
const errorSound = document.getElementById("errorSound");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    // Play click sound for every button
    clickSound.currentTime = 0;
    clickSound.play();

    switch (value) {
      case '=':
        try {
          // Replace π with Math.PI for evaluation
          let expression = current.replace(/π/g, Math.PI);
          // Evaluate expression safely
          current = eval(expression);
          result.value = current;
          // Glow animation
          result.classList.add('result-glow');
          setTimeout(() => result.classList.remove('result-glow'), 300);
        } catch {
          result.value = 'ERROR';
          current = '';
          errorSound.currentTime = 0;
          errorSound.play();
        }
        break;

      case 'C':
        current = '';
        result.value = '';
        break;

      case 'CE':
      case '←':
        current = current.toString().slice(0, -1);
        result.value = current;
        break;

      case 'π':
        current += 'π';
        result.value = current;
        break;

      case 'sqrt':
        try {
          current = Math.sqrt(eval(current)).toString();
          result.value = current;
          result.classList.add('result-glow');
          setTimeout(() => result.classList.remove('result-glow'), 300);
        } catch {
          result.value = 'ERROR';
          current = '';
          errorSound.currentTime = 0;
          errorSound.play();
        }
        break;

      case '^2':
        try {
          current = Math.pow(eval(current), 2).toString();
          result.value = current;
          result.classList.add('result-glow');
          setTimeout(() => result.classList.remove('result-glow'), 300);
        } catch {
          result.value = 'ERROR';
          current = '';
          errorSound.currentTime = 0;
          errorSound.play();
        }
        break;

      case '1/x':
        try {
          current = (1 / eval(current)).toString();
          result.value = current;
          result.classList.add('result-glow');
          setTimeout(() => result.classList.remove('result-glow'), 300);
        } catch {
          result.value = 'ERROR';
          current = '';
          errorSound.currentTime = 0;
          errorSound.play();
        }
        break;

      default:
        current += value;
        result.value = current;
    }
  });
});
