const character = document.getElementById('character');
let characterX = 0;
let characterY = 0;

const keyState = {
    w: false,
    a: false,
    s: false,
    d: false
};

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    keyState[key] = true;

    updateCharacterPosition();
});

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    keyState[key] = false;

    updateCharacterPosition();
});

function updateCharacterPosition() {
    let deltaX = 0;
    let deltaY = 0;

    if (keyState.w) {
        deltaY -= 10;
    }
    if (keyState.a) {
        deltaX -= 10;
    }
    if (keyState.s) {
        deltaY += 10;
    }
    if (keyState.d) {
        deltaX += 10;
    }

    characterX += deltaX;
    characterY += deltaY;

    character.style.left = characterX + 'px';
    character.style.top = characterY + 'px';
}
