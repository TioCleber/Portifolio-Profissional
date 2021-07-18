export default function initTab() {
  const tabMenu = document.querySelectorAll('.skills-list li');
  const tabContent = document.querySelectorAll('.skills-content div');
  const menuSkill = document.querySelectorAll('.skills-list li');

  tabContent[0].classList.add('ativo');
  menuSkill[0].classList.add('ativo');

  function activeSkills(index){
    menuSkill.forEach((li) => {
      li.classList.remove('ativo');
    });
    menuSkill[index].classList.add('ativo');
  }

  menuSkill.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeSkills(index);
    });
  });


  function activeMenu(index) {
    tabContent.forEach((div) => {
      div.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeMenu(index);
    });
  });
}
