function initAnima() {

	const menuScroll = document.querySelector('.header');
	const small = window.matchMedia('(max-width: 500px)');

	if (small) {
		const windowAnima = window.innerHeight * 0.6;
		const menuDesativo = document.querySelector('.apresentacao');

		function menuAtivo() {
			const headerTop = menuDesativo.getBoundingClientRect().top;

			if (headerTop < 0) {
				menuScroll.classList.add('ativo');
			}
			else {
				menuScroll.classList.remove('ativo');
			}
		}


		window.addEventListener('scroll', menuAtivo);

	}

}
initAnima();



function initVoltarHome() {
	const voltarHome = document.querySelector('.logo a');
	const voltarDesativo = document.querySelector('.apresentacao-eu');

	function voltarAtivo() {
		const voltarTop = voltarDesativo.getBoundingClientRect().top;

		if (voltarTop < 0) {
			voltarHome.classList.add('ativo');
		}
		else {
			voltarHome.classList.remove('ativo');
		}
	}


	window.addEventListener('scroll', voltarAtivo);
}
initVoltarHome();



function initMenuHamburguer() {

	const menuHamburguer = document.querySelector('.menu-hamburguer');
	const nav = document.querySelector('.menu');
	const header = document.querySelector('.header');
	const linkInterno = document.querySelectorAll('.header a');

	function menuHamburguerOpcoes(event) {

		if (event.type === 'touchstart') event.preventDefault();
		nav.classList.toggle('ativo');
		header.classList.toggle('ativado');
	}

	function closeMenu() {
		nav.classList.remove('ativo');
		header.classList.remove('ativado');
	}

	linkInterno.forEach((link) => {
		link.addEventListener('click', () => {
			closeMenu();
		});
	});
	menuHamburguer.addEventListener('click', menuHamburguerOpcoes);
	menuHamburguer.addEventListener('touchstart', menuHamburguerOpcoes);
}

initMenuHamburguer();



function initMenuMob() {

	const menuMob = document.querySelector('.menu-apps');
	const fecharMenu = document.querySelector('.fechar-menu');
	const nav = document.querySelector('.menu-mob');
	const linkInterno = document.querySelectorAll('.header a');

	function menuOpcoes(event) {

		if (event.type === 'touchstart') event.preventDefault();
		nav.classList.add('ativo');
		menuMob.classList.add('desativo');
		fecharMenu.classList.add('ativo');
	}

	function fecharOpcoes(event) {

		if (event.type === 'touchstart') event.preventDefault();
		nav.classList.remove('ativo');
		fecharMenu.classList.remove('ativo');
		menuMob.classList.remove('desativo');
	}

	function closeMenu() {
		nav.classList.remove('ativo');
		menuMob.classList.remove('desativo');
		fecharMenu.classList.remove('ativo');
	}



	linkInterno.forEach((link) => link.addEventListener('click', () => closeMenu()));
	fecharMenu.addEventListener('click', fecharOpcoes);
	fecharMenu.addEventListener('touchstart', fecharOpcoes);
	menuMob.addEventListener('click', menuOpcoes);
	menuMob.addEventListener('touchstart', menuOpcoes);
}

initMenuMob();

