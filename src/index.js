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

import fireSpiritIdle from './assets/enemy-fireplantskeleton/Fire_Spirit/Idle.png'
import fireSpiritAttack from './assets/enemy-fireplantskeleton/Fire_Spirit/Attack.png'
import fireSpiritCharge from './assets/enemy-fireplantskeleton/Fire_Spirit/Charge.png'
import fireSpiritDead from './assets/enemy-fireplantskeleton/Fire_Spirit/Dead.png'
import fireSpiritExplosion from './assets/enemy-fireplantskeleton/Fire_Spirit/Explosion.png'
import fireSpiritFlame from './assets/enemy-fireplantskeleton/Fire_Spirit/Flame.png'
import fireSpiritHurt from './assets/enemy-fireplantskeleton/Fire_Spirit/Hurt.png'
import fireSpiritRun from './assets/enemy-fireplantskeleton/Fire_Spirit/Run.png'
import fireSpiritShot from './assets/enemy-fireplantskeleton/Fire_Spirit/Shot.png'
import fireSpiritWalk from './assets/enemy-fireplantskeleton/Fire_Spirit/Walk.png'

import plentIdle from './assets/enemy-fireplantskeleton/Plent/Idle.png'
import plentAttack1 from './assets/enemy-fireplantskeleton/Plent/Attack_1.png'
import plentAttack2 from './assets/enemy-fireplantskeleton/Plent/Attack_2.png'
import plentAttack3 from './assets/enemy-fireplantskeleton/Plent/Attack_3.png'
import plentAttackDisguise from './assets/enemy-fireplantskeleton/Plent/Attack_Disquise.png'
import plentCloudPoison from './assets/enemy-fireplantskeleton/Plent/Cloud_posion.png'
import plentDead from './assets/enemy-fireplantskeleton/Plent/Dead.png'
import plentDisguise from './assets/enemy-fireplantskeleton/Plent/Disguise.png'
import plentHurt from './assets/enemy-fireplantskeleton/Plent/Hurt.png'
import plentPoison from './assets/enemy-fireplantskeleton/Plent/Poison.png'
import plentWalk from './assets/enemy-fireplantskeleton/Plent/Walk.png'

import skeletonIdle from './assets/enemy-fireplantskeleton/Skeleton/Idle.png'
import skeletonAttack1 from './assets/enemy-fireplantskeleton/Skeleton/Attack_1.png'
import skeletonAttack2 from './assets/enemy-fireplantskeleton/Skeleton/Attack_2.png'
import skeletonAttack3 from './assets/enemy-fireplantskeleton/Skeleton/Attack_3.png'
import skeletonDead from './assets/enemy-fireplantskeleton/Skeleton/Dead.png'
import skeletonHurt from './assets/enemy-fireplantskeleton/Skeleton/Hurt.png'
import skeletonJump from './assets/enemy-fireplantskeleton/Skeleton/Jump.png'
import skeletonRun from './assets/enemy-fireplantskeleton/Skeleton/Run.png'
import skeletonSpecAttack from './assets/enemy-fireplantskeleton/Skeleton/Special_attack.png'
import skeletonWalk from './assets/enemy-fireplantskeleton/Skeleton/Walk.png'


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
