import bg1 from './assets/backgrounds/Cartoon_Forest_BG_01/Cartoon_Forest_BG_01.png'
import bg2 from './assets/backgrounds/Cartoon_Forest_BG_02/Cartoon_Forest_BG_02.png'
import bg3 from './assets/backgrounds/Cartoon_Forest_BG_03/Cartoon_Forest_BG_03.png'
import bg4 from './assets/backgrounds/Cartoon_Forest_BG_04/Cartoon_Forest_BG_04.png'

import boss1Idle from './assets/bosses/1/Idle.png'
import boss1attack1 from './assets/bosses/1/Attack1.png'
import boss1attack2 from './assets/bosses/1/Attack2.png'
import boss1attack3 from './assets/bosses/1/Attack3.png'
import boss1attack4 from './assets/bosses/1/Attack4.png'
import boss1walk from './assets/bosses/1/Walk.png'
import boss1death from './assets/bosses/1/Death.png'
import boss1hurt from './assets/bosses/1/Hurt.png'
import boss1special from './assets/bosses/1/Special.png'

import boss2Idle from './assets/bosses/2/Idle.png'
import boss2attack1 from './assets/bosses/2/Attack1.png'
import boss2attack2 from './assets/bosses/2/Attack2.png'
import boss2attack3 from './assets/bosses/2/Attack3.png'
import boss2attack4 from './assets/bosses/2/Attack4.png'
import boss2walk from './assets/bosses/2/Walk.png'
import boss2death from './assets/bosses/2/Death.png'
import boss2hurt from './assets/bosses/2/Hurt.png'
import boss2special from './assets/bosses/2/Special.png'
import boss2proj from './assets/bosses/2/Projectile.png'

import boss3Idle from './assets/bosses/3/Idle.png'
import boss3attack1 from './assets/bosses/3/Attack1.png'
import boss3attack2 from './assets/bosses/3/Attack2.png'
import boss3attack3 from './assets/bosses/3/Attack3.png'
import boss3attack4 from './assets/bosses/3/Attack4.png'
import boss3walk from './assets/bosses/3/Walk.png'
import boss3death from './assets/bosses/3/Death.png'
import boss3hurt from './assets/bosses/3/Hurt.png'
import boss3special from './assets/bosses/3/Special.png'
import boss3proj from './assets/bosses/3/Projectile.png'




class MyGame extends Phaser.Scene
{

    preload ()
    {

    }
      
    create ()
    {

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1920,
    height: 1080,
    scene: MyGame
};

const game = new Phaser.Game(config);
