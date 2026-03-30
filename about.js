const people = [
  { id: 'alex', name: 'Alex Lee', role: 'Product Lead', initials: 'AL', bio: 'Product lead with 8+ years building user-centered platforms. Focuses on strategy, roadmap, and cross-functional delivery.' },
  { id: 'maria', name: 'Maria Jones', role: 'Designer', initials: 'MJ', bio: 'Senior designer specializing in visual systems, interaction, and accessibility. Passionate about crafting delightful product experiences.' },
  { id: 'raj', name: 'Raj Kapoor', role: 'Principal Engineer', initials: 'RK', bio: 'Engineer focused on scalable services, reliability, and developer experience. Enjoys performance tuning and mentoring teams.' },
  { id: 'sofia', name: 'Sofia Nguyen', role: 'Data Scientist', initials: 'SN', bio: 'Data scientist working on predictive models and experimentation. Skilled in translating data into product improvements.' }
];

const cardsEl = document.getElementById('cards');
const detailName = document.getElementById('d-name');
const detailRole = document.getElementById('d-role');
const detailBio = document.getElementById('d-bio');

function renderCards(list){
  cardsEl.innerHTML = '';
  list.forEach(p=>{
    const c = document.createElement('button');
    c.className = 'card';
    c.type = 'button';
    c.dataset.id = p.id;
    c.setAttribute('aria-pressed','false');
    c.innerHTML = `<div class="avatar" aria-hidden="true">${p.initials}</div>
                   <div class="c-info"><p class="c-name">${p.name}</p><p class="c-role">${p.role}</p></div>`;
    c.addEventListener('click', ()=>selectPerson(p.id));
    cardsEl.appendChild(c);
  });
}

function selectPerson(id){
  const person = people.find(x=>x.id===id);
  if(!person) return;
  detailName.textContent = person.name;
  detailRole.textContent = person.role;
  detailBio.textContent = person.bio;
  Array.from(cardsEl.children).forEach(card=>{
    if(card.dataset.id === id){
      card.classList.add('selected');
      card.setAttribute('aria-pressed','true');
      card.focus();
    } else {
      card.classList.remove('selected');
      card.setAttribute('aria-pressed','false');
    }
  });
}

document.getElementById('shuffle').addEventListener('click', ()=>{
  for(let i=people.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [people[i],people[j]]=[people[j],people[i]];
  }
  renderCards(people);
});

// Initial render and select first
renderCards(people);
setTimeout(()=>selectPerson(people[0].id), 80);


