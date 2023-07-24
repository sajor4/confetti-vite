import confetti from "canvas-confetti";

export class MainController {

    constructor() {

    }

    render() {
        const mainContainer = document.getElementById('main-container');

        const button1 = document.createElement('button');
        button1.appendChild(document.createTextNode('fire1'));
        button1.addEventListener('click', () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        })
        mainContainer.appendChild(button1);

        const button2 = document.createElement('button');
        button2.appendChild(document.createTextNode('fire2'));
        button2.addEventListener('click', () => {
            var count = 200;
            var defaults = {
                origin: { y: 0.7 }
            };

            function fire(particleRatio, opts) {
                confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio)
                }));
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        })
        mainContainer.appendChild(button2);

        const button3 = document.createElement('button');
        button3.appendChild(document.createTextNode('fire3'));
        button3.addEventListener('click', () => {
            var defaults = {
                spread: 360,
                ticks: 50,
                gravity: 0,
                decay: 0.94,
                startVelocity: 30,
                shapes: ['star'],
                colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
            };

            function shoot() {
                confetti({
                    ...defaults,
                    particleCount: 40,
                    scalar: 1.2,
                    shapes: ['star']
                });

                confetti({
                    ...defaults,
                    particleCount: 10,
                    scalar: 0.75,
                    shapes: ['circle']
                });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
        })
        mainContainer.appendChild(button3);
}
}