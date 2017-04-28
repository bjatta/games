;(()=> {
    "use strict";
    console.log('let\'s play a game');

    let c = new CardDeck;                                               // common card deck
    let players = [];                                                   // make all players array

    c.newDeck();                                                        // make new card deck (52 cards in order)
    c.randomize(2);                                                     // randomize new card deck twice
    for (let i=0;i < r(4)+2;i++) {
        players[i] = new CardDeck;                                      // playres i card deck
        players[i].addCards(c.getCards(r(3)));                          // toss 1-3 card to player i
    }
// working with DOM
    let deck = addDE({
        parent: document.querySelector('section[id="main-container"]'),
        tag: 'section',
        class: 'row',
        bColor: '#298057',
    });
    players.forEach((player)=>{
        let bColor = player.cardDeckScore()>21?'#ff3f3f':'';            // set color red when more than 21
            bColor = ( 21 === player.cardDeckScore()?'gold':'')         // set color gold when WIN !!!
                || bColor;
        let player_row = addDE({
            parent: addDE({
                parent:deck,
                   tag:'section',
                 class:'row2 player-row-' + players.length,
            }),
            tag: 'section',
            class: 'row',
            bColor: bColor,
        });
        player.showAllCards(player_row);
    });
    let cardRow = addDE({
        parent: deck,
        tag: 'section',
        class: 'card-row',
        bColor: '#298057',
    });
    c.showAllCards(cardRow);
})();