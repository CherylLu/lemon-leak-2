sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
    info.changeScoreBy(2)
    sprites.destroy(otherSprite)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`層級2`)
let mySprite2 = sprites.create(assets.image`我的影像`, SpriteKind.Food)
mySprite2.setPosition(52, 83)
mySprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(60)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . c c c c c . . 
        . . . . . . c c c 5 5 5 5 c c . 
        . . . . c c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . c 9 9 9 b b 9 b b c c . . 
        . . . c 9 9 9 9 b 9 9 9 c . c c 
        . . . c d 9 9 9 b 9 9 9 c b 5 c 
        . . c c d 9 c 9 b 9 9 9 b b 5 c 
        c c c d d 9 9 9 b 9 b 9 5 5 5 c 
        f d d d 9 9 9 9 9 9 b 9 b b c c 
        . f f 9 9 9 9 9 9 b b 9 f . . . 
        . . . f 9 9 9 9 9 b b b f . . . 
        . . . . f f 9 9 b b 5 5 f . . . 
        . . . . . . f 5 5 5 5 5 f . . . 
        . . . . . . . f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(0, -50), randint(10, 50))
})
