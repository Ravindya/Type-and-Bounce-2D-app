export const cursorElm = document
    .createElement('div');
cursorElm.classList.add('cursor', 'hide');
document.body.append(cursorElm);

let tmrId;

let previousX, previousY;
const fn = (e)=> {

    if (previousX) cursorElm.dx = e.clientX - previousX;
    if (previousY) cursorElm.dy = e.clientY - previousY;

    previousX = e.clientX;
    previousY = e.clientY;

    cursorElm.style.left = `${e.clientX - cursorElm.offsetWidth / 2}px`;
    cursorElm.style.top = `${e.clientY - cursorElm.offsetHeight / 2}px`;
    if (tmrId) clearTimeout(tmrId);
    if (cursorElm.classList.contains('hide')){
        cursorElm.classList.remove('hide');
    }
    tmrId = setTimeout(()=> {
        cursorElm.classList.add('hide');
    }, 8000);
}
addEventListener('mousemove',fn);
addEventListener('touchmove',fn);

document.addEventListener('mouseenter', ()=>{
    cursorElm.classList.remove('hide');
});

document.addEventListener('mouseleave', ()=>{
    cursorElm.classList.add('hide');
});
