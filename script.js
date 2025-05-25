const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');
const listenBtn = document.getElementById('listen-btn');

let voices = [];

function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = voice.name;
    voiceSelect.appendChild(option);
  });
}

window.speechSynthesis.onvoiceschanged = populateVoices;

listenBtn.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value);
  const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
  utterance.voice = selectedVoice;
  window.speechSynthesis.speak(utterance);
});
