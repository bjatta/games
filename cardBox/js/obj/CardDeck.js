/** Created by Bjatta on 28.04.2017.
 *  card deck object
 */
;(()=>{
    "use strict";
    let r = window.r || window._r;                  // random number generator from domOperations.js
    let addDE = window.addDE || window._addDE;      // adding HTMLElement to DOM from domOperations.js

    function CardDeck(){
        this.cards = [];
    }

    CardDeck.prototype.newDeck = function () {
        let trump = ['♠', '♣', '♦', '♥'];
        let o = ['J', 'Q', 'K', 'A'];
        this.cards.length = 0;
        for (let j = 0; j < 4; j++) {               // for cards suits
            for (let i = 2; i < 15; i++)            // throgh 2 - 10, J, Q, K, A
                this.cards.push((i > 10 ? o[i - 11] : i) + trump[j]);
        }
        return this;
    };

    CardDeck.prototype.randomize = function (n) {   // method for randomize card deck
        n = n || 4;                                 // default toss card deck 4 times
        for (let t = 0; t <= n; t++)
            for (let j = 0; j < this.cards.length / 2; j++) {
                let n = r(this.cards.length - 1);
                let m = r(this.cards.length - 1);
                [this.cards[n], this.cards[m]] =
                    [this.cards[m], this.cards[n]];
            }
        return this;
    };

    CardDeck.prototype.getCards = function (n) {    // method to give a N random cards
        let b = [];                                 // cards for out
        n = n || 1;
        for (let j = 0; j < n; j++) {
            let card = this.cards.splice(r(this.cards.length - 1), 1)[0];
            b.push(card);
        }
        return b;
    };

    CardDeck.prototype.addCards = function (...n) {
        n[0].length?n[0].forEach((c)=>this.cards.push(c)):this.cards.push(n[0]);
        return this.cards.length;
    };

    CardDeck.prototype.showCard = function (HTMLParentElement,n) {
        n = n || 0;
        n > this.cards.length-1 ? n = this.cards.length-1:{};
        let zIndex = HTMLParentElement.lastChild?
            HTMLParentElement.lastChild.style.zIndex + 1:0;

        const regex = /[♦♥]/g;
        let redCardSuit = '';
        this.cards[n].match(regex)
            ? redCardSuit = 'red-text'
            : redCardSuit = '';
        let currentCard = addDE({
            parent: HTMLParentElement,
            zIndex: zIndex,
            bColor: 'white',
            id: this.cards[n],
        });
//        setTimeout(()=>currentCard.addEventListener('click',toggleBackGround),100);
        addDE({
            parent: currentCard,
            class: redCardSuit+' left-corner',
            text: this.cards[n],
        });
        addDE({
            parent: currentCard,
            class: redCardSuit+' right-corner',
            text: this.cards[n],
        });
        return this;
    };

    CardDeck.prototype.showAllCards = function (parent){
        this.cards.forEach((c,i)=>this.showCard(parent,i));
        return this;
    };

    CardDeck.prototype.cardDeckScore = function (parent) {
        return this.cards.reduce((p,c)=> {
            if (c.indexOf('A') !== -1) return p += 11;
            let cardValue = c.substr(0, c.length - 1);
            let cardScore = parseInt(cardValue) || 10;
            p += cardScore * 1;
            return p;
        },0);
    };

    CardDeck.prototype.showCardDeckScore = function () {

    };

    window.CardDeck?
        window._CardDeck=CardDeck:
        window.CardDeck =CardDeck;
})();