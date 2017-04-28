function toggleCode(el,pictureName) {
    let nextEl = document.querySelector('div[id="full-screen"]');
    let body   = document.querySelector('section[id="main-container"]');
    pictureName = pictureName || '';
    nextEl.style.backgroundImage = pictureName ? 'url("img/' + pictureName + '.png")':'';
    if (hasClass(nextEl,'visible')) {
        removeClass(nextEl,'visible');
        removeClass(body,'muted');
        addClass(nextEl,'hidden');
    }else{
        removeClass(nextEl,'hidden');
        addClass(nextEl,'visible');
        addClass(body,'muted');
    }
}
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className=el.className.replace(reg, ' ')
    }
}
;(()=>{
    "use strict";
    let _r_ = (n) => Math.round(Math.random()*n);
    window.r?window._r= _r_:window.r= _r_;
    let _ra_ = (n,m)=>{
        n = n || r(100)+1;
        m = m || r(100)+1;
        let a = [];
        for (let i=0;i<n;i++){
            a.push(r(m));
        }
        return a;
    };
    window.ra?window._ra= _ra_:window.ra= _ra_;
    let _newDOMdiv_ = (newObject) => {
        newObject = {
            parent: newObject.parent || document.querySelector('body'),
               tag: newObject.tag    || 'div',
              text: newObject.text   || '',
             class: newObject.class  || 'cards',
               top: newObject.top    || 0,
              left: newObject.left   || 0,
            zIndex: newObject.zIndex || 0,
            bColor: newObject.bColor || 'transparent',
                id: newObject.id     || '',
        };
        let obj = document.createElement(newObject.tag);
        obj = obj || document.createElement('div');
        let number = (newObject.text.length>2?newObject.text[0]+newObject.text[1]:newObject.text[0]);
        newObject.text?obj.innerHTML=number+'<br><span class="card-suit">'+newObject.text[newObject.text.length-1]+'</span>':'';
        newObject.parent.appendChild(obj);
        obj.className+=newObject.class;
        newObject.top   ?obj.style.top              = newObject.top+'em':{};
        newObject.left  ?obj.style.left             = newObject.left+'em':{};
        newObject.zIndex?obj.style.zIndex           = newObject.zIndex:{};
        newObject.bColor?obj.style.backgroundColor  = newObject.bColor:{};

        newObject.id    ?obj.id = newObject.id:{};
        return obj;
    };
    window.addDE?window._addDE=_newDOMdiv_:window.addDE=_newDOMdiv_;
})();