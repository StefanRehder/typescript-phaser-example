import * as Phaser from 'phaser';
import logo_img from '../assets/logo.png';

class MyPhaserGame extends Phaser.Game {
    constructor() {
        const config = {
            type: Phaser.AUTO,
            parent: 'typescript-phaser-example',
            width: 800,
            height: 600,
            scene: {
                preload: preload,
                create: create
            }
        };

        super(config);

        function preload ()
        {
            this.load.image('logo', logo_img);
        }

        function create ()
        {
            var logo = this.add.image(400, 150, 'logo');
            this.tweens.add({
                targets: logo,
                y: 600,
                duration: 2000,
                ease: 'Power2',
                yoyo: true,
                loop: -1
            });
        }
    }
}


const game = new MyPhaserGame();
