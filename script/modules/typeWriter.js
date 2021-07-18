export default function initStatusAnima() {
    const speed = 100;
    let i = 0;
    const status = document.querySelector('.status');
    const textStatus = 'desenvolvedor front-end iniciante                      ';

    if (textStatus.length) {
        function typeWriter() {
            if (i < textStatus.length) {
                status.innerHTML += textStatus.charAt(i);
                i++;
                setTimeout(typeWriter, speed)
            }
            else {
                i = 0;
                status.innerHTML = textStatus.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        window.addEventListener('load', typeWriter);
    }
}



