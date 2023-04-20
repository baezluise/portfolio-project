// Define the array of projects
const arrWorks = [
  {
    id: 'project-0',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: '',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-1',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-2',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-3',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-4',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-5',
    name: 'Multi-Post Stories',
    name2: 'Gain+Glory',
    ShortDescrip:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },
  // Add more projects as needed
];

const gridWorks = document.getElementById('projects-container');
let popupContainer = null;
let div = null;
let bodyDom = null;
let card = null;

for (let i = 0; i < arrWorks.length; i += 1) {
  card = arrWorks[i];

  div = document.createElement('div');

  /*  ******** the first cards its the main ****************** */

  div.classList = 'header1';
  div.id = card.id;
  div.innerHTML = `<div class="card">
                   <div class="img-wrapper">
                   <img class="img-placeholder" alt="project" src="${card.featureImage}" />
                   </div>
                   <h2 class="card-name">${card.name}${card.name2}</h2>
                   <ul class="technologies">${card.technologies
                     .map(
                       (tech) => `
                   <li class="li_btn">${tech}</li>`
                     )
                     .join(' ')}</ul>
                   <button id="btn-${card.id}" class="see-project">See Project</button>
                   </div>
                   `;

  gridWorks.appendChild(div);
}

function closeModal() {
  bodyDom.removeChild(popupContainer);
}

function visitSite(url) {
  window.open(url);
  closeModal();
}

/* creates a pop-up window with the respective button's card clicked info */

function popupWindow(card) {
  bodyDom = document.getElementById('body');
  bodyDom.appendChild(document.createElement('div')).setAttribute('id', 'popupContainer');
  popupContainer = document.getElementById('popupContainer');

  /* *********************************** */
  div = document.createElement('div');

  div.classList = 'cntInfoPopup';
  div.id = card.id;
  div.innerHTML = `<a id="btnClosePopup" class="btnClosePopup">
        <img class="btn-close-icon" src="images/close-icon.png" alt="Close menu icon.">
    </a> 
    <h1 class="PopupTitle1 Title2_dark">${card.name}</h1>
    <h2 class="PopupTitle2 Title2_card">${card.name2}</h2>
    <ul class="list_feat_popup ">${card.technologies
      .map(
        (tech) => `
        <li class="li_btn_popup">${tech}</li>`
      )
      .join(' ')}</ul>
      
    <div class="popup-columns">
      <div class="popup-col1 popupImgCnt">
        <img class="PopupImg" src="${card.featureImage}" alt="${card.alternateTextImage}">
      </div>
      <div class="popup-col2">
        <p class="PopupDescrip">${card.LongDescrip}</p>
        <ul class="cntBtnPopup">
          <li id="btnLive" class="SeeProjectBtn BtnClass btnSeeLive" href="${card.liveVersion}">
            <div>See live</div>
            <img class="icon-btn" src="./images/icon-btn-live.png"></li>
          <li id="btnSrc" class="SeeProjectBtn BtnClass btnSeeSource" href="${card.source}">
            <div>See source</div>
            <img class="icon-btn" src="./images/icon-btn-git.png"></li>
        </ul>
      </div>
    </div>
    `;

  popupContainer.appendChild(div).setAttribute('id', 'modal');
}
