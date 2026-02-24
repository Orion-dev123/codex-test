const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const chatbot = document.getElementById('chatbot');
const chatToggle = document.querySelector('.chatbot-toggle');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

chatToggle.addEventListener('click', () => {
  chatbot.classList.toggle('open');
});

const botReplies = [
  {
    keywords: ['time', 'open', 'close', 'hours'],
    text: 'We are open daily from 8:00 AM to 10:30 PM.'
  },
  {
    keywords: ['book', 'reservation', 'table'],
    text: 'Use the Book Now section above to reserve your table in under a minute!'
  },
  {
    keywords: ['menu', 'food', 'drink'],
    text: 'Our favorites are Signature Lattes, Cold Brew, and Berry Cheesecake.'
  },
  {
    keywords: ['location', 'map', 'where'],
    text: 'You can find us at Central London. Scroll down to the map section for directions.'
  }
];

function addMessage(text, className) {
  const message = document.createElement('div');
  message.className = className;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
  const lower = message.toLowerCase();
  const match = botReplies.find((reply) =>
    reply.keywords.some((keyword) => lower.includes(keyword))
  );

  return match
    ? match.text
    : 'Great question! For quick help, ask me about menu, reservations, opening hours, or location.';
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userText = chatInput.value.trim();

  if (!userText) {
    return;
  }

  addMessage(userText, 'user-msg');
  chatInput.value = '';

  setTimeout(() => {
    addMessage(getBotResponse(userText), 'bot-msg');
  }, 350);
});

const reservationForm = document.querySelector('.reservation-form');

reservationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = reservationForm.querySelector('button');
  button.textContent = 'Booked ✓';
  button.disabled = true;
});
