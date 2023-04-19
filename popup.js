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
    featureImage: './images/card1_img.png',
    alternateTextImage: 'header-main-project image.',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },

  {
    id: 'project-0',
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
    id: 'project-0',
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
