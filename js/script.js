
// Services tabs

const tabsBtn = document.querySelectorAll('.tab-panel__btn');
const tabsItems = document.querySelectorAll('.tab-content__item')

tabsBtn.forEach(tabsClick);

function tabsClick(item) {
  item.addEventListener('click', function () {
    let activeBtn = item
    let tabId = activeBtn.getAttribute('data-tab')
    let activeTab = document.querySelector(tabId)

    if (!activeBtn.classList.contains('tab-panel__btn--active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('tab-panel__btn--active')
      })

      tabsItems.forEach(function (item) {
        item.classList.remove('tab-content__item--active')
      })

      activeBtn.classList.add('tab-panel__btn--active')
      activeTab.classList.add('tab-content__item--active')
    }
  })
}

document.querySelector('.tab-panel__btn').click();


// Feedback modal

const feedbackModal = document.querySelector('.modal-feedback');
const openFeedbackButton = document.querySelector('.contacts__btn');
const feedbackForm = document.querySelector('.modal-feedback__form');

const feedbackClose = feedbackModal.querySelector('.modal-feedback__close');
const emailInput = feedbackModal.querySelector('[name=feedback-email]');
const userNameInput = feedbackModal.querySelector('[name=feedback-name]');
const messageInput = feedbackModal.querySelector('[name=feedback-message]');

let inStorageSupport = true;
let userNameStorage;
let emailStorage;
let messageStorage;

try {
  userNameStorage = localStorage.getItem('user-name')
  emailStorage = localStorage.getItem('user-email')
  messageStorage = localStorage.getItem('user-message')
} catch (err) {
  inStorageSupport = false;
}

openFeedbackButton.addEventListener("click", (evt) => {
  feedbackModal.classList.add('modal--show')

  if (userNameStorage) {
    userNameInput.value = userNameStorage
    emailInput.focus()
  } else {
    userNameInput.focus()
  }
  if (emailStorage) {
    emailInput.value = emailStorage
    messageInput.focus()
  } else {
    emailInput.focus()
  }
  if (messageStorage) {
    messageInput.value = messageStorage
    userNameInput.focus()
  }
});

feedbackClose.addEventListener("click", () => {
  localStorage.setItem('user-name', userNameInput.value)
  localStorage.setItem('user-email', emailInput.value)
  localStorage.setItem('user-message', messageInput.value)

  feedbackModal.classList.remove('modal--show')
  feedbackModal.classList.remove('modal--error')
});

feedbackForm.addEventListener('submit', (evt) => {
  if (!userNameInput.value || !emailInput.value || !messageInput.value) {
    evt.preventDefault()
    feedbackModal.classList.remove('modal--error')
    feedbackModal.offsetWidth = feedbackModal.offsetWidth
    feedbackModal.classList.add('modal--error')
  }

  localStorage.removeItem('user-name')
  localStorage.removeItem('user-email')
  localStorage.removeItem('user-message')
});

window.addEventListener('keyup', (evt) => {
  if (evt.keyCode === 27) {
    if (feedbackModal.classList.contains('modal--show')) {
      evt.preventDefault()
      feedbackModal.classList.remove('modal--show')
    }
  }
});

// Modal map

const mapModal = document.querySelector('.modal-map');
const openMapButton = document.querySelector('.contacts__map');
const mapClose = mapModal.querySelector('.modal-map__close');

openMapButton.addEventListener('click', () => {
  mapModal.classList.add('modal--show')
});

mapClose.addEventListener('click', () => {
  mapModal.classList.remove('modal--show')
});

// Map

ymaps.ready(init);

function init() {
  const map = new ymaps.Map('map', {
    center: [59.940163930035936, 30.314802652053764],
    zoom: 16,
    controls: ['zoomControl']
  });

  const placemark = new ymaps.Placemark([59.93863506417266, 30.323117499999945], {
    iconLayout: 'default#image'
  });

  map.geoObjects.add(placemark);
}


