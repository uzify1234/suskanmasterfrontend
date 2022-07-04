import React, {useState} from 'react'
import './Boardgames.css';
import Header from '../Helpers/Header'
import tutorial from "../Assets/Images/tutorial.png";
import boomgame from "../Assets/Images/boomgame.JPG";
import MulticapCardGame from "../Assets/Images/MulticapCardGame.jpg";
import Fun from "../Assets/Images/Fun Da Attack- Card Game.jpg";

import volatilitygame from "../Assets/Images/volatilitygame.png";
import howtoconductvg from "../Assets/Images/howtoconductvg.png";import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Link } from 'react-router-dom';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border : '4px solid #143943',
      maxHeight : '80vh',
      maxWidth : '90vw'
    },
  };

function Boardgames() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const [currentcategory, setcurrentcategory] = useState("");
    const handletap = (cat) => {
        setcurrentcategory(cat);
        setIsOpen(true);
    }
    return (
        <div className='boardgames'>
             <Header />
             <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {currentcategory == "game1" && <div className="modalcontent" style={{display : 'flex',flexDirection : 'row',justifyContent : 'left',overflow : 'scroll'}}>
                    <div className="left" style={{flex : 0.6}}>
                        
                        <h4>Boom (Become Original and Organized Matchmaker) – A Volatility Game Series</h4>

                        <h4>Box 1</h4>
                        <h4>How far will you go?</h4>
                        <p>There are 4 different elements in each card that you can use to make a match. But with every card you turn over, it gets harder and harder. Next, there may be only 2 elements you can match, or even one! You can stop any time you want, but the more cards you match, the more points you score! The only way to win is to “BOOM”</p>
                        <p>Play By Matching (1)	Color  (2) Size  (3) Picture (4) Pattern </p>
                        <p>BOOM A Volatility Game Series Game (Education Game for Students, Investors and Finance Professionals)</p>
                        <h4>Contents</h4>
                        <p>
                        81 playing cards. 
                        27 Knowledge scoring cards with Quotes to be read by the person who wins the sequence 2,3,4,5 and 6.</p> 
                        <h4>Object:</h4>
                        <p>
                        Earn the most points by matching the most cards. </p>
                        <h4>Set Up:</h4>
                        <p>
                        Remove the 27 Knowledge Scoring cards from the deck. Next shuffle the remaining cards and then place them face down in a 5*4 grid as shown; five cards across and four rows down. Set the remaining cards face down and off to the side to form a Draw Pile. </p>
                        <h4>Let’s Play!</h4>
                        <p>
                        BOOM is essentially a matchmaking game and there are FOUR potential elements you can match on each card. </p>
                        <h4>Box 2</h4>
                        <p>The youngest player goes first and then play continues clockwise. </p>
                        <p>On your turn begin by selecting 2 cards from the grid and turn them over. If they have ANY matching elements (Type of picture, Size of picture, Color or Pattern) they are a match and you may leave them face up. You may end your turn and take the points (more on that later) or continue playing. 
                        If there are NO matching elements; your turn is over. Turn all up facing cards back over, collect no points and then it is the next player’s turn. </p>
                        <h4>Box 3</h4>
                        <p>If you continue, turn over one new card. This card must have at least ONE matching element with the other TWO cards.  </p>
                        <p>NOTE: It is okay if there is more than one matching element but you MUST have at least one.  </p>
                        <p>Again, if there is no matching element, your turn is over. Turn all up-facing cards back over, collect no points and then it is the next player’s turn.  </p>
                        <p>If there is a match, you may choose to end your turn and take the points or continue playing. If you continue, the next card must match ONE element on the other THREE cards.</p>
                        <p> This continues until a player either turns over a card with NO matching elements or decides to end their turn and take the points earned.</p>
                        <p> For example, let’s say the first card you turn over is yellow with a large Bull and a *stripes pattern. The second card is blue with a large Bull and a *stripes pattern.</p>
                        <p> These cards then have TWO matching elements: Picture (Bull) and PATTERN (*stripes).  </p>
                        <p>&nbsp;</p>
                        <p>Now the next card you turn over match either a BULL or STRIPE PATTERN so the odds have gone down a little bit. But you are brave so choose to turn over another card. It is BLUE with a LARGE BULL and a *circle PATTERN.  </p>
                        <p>Success! The 3 face up cards all have ONE matching element: BULL. Your turn is still alive. Remember the same element must match on all face up cards. The new card is BLUE but only ONE of the other cards is blue, so that’s not a match. Likewise the new card has a Large BULL so it is a match.  </p>
                        <p>Now, if you are really brave and wish to continue, you may turn up a fourth card. The odds are much slimmer now, as you only have ONE element to work with the rest of this turn: Large BULL. If the card you turn over has a Large BULL on it, you may have made a fourth match. </p>
                        <h4>Box 4 </h4>
                        <p>The truly brave player may turn over another and try for a FIFTH match but if there is no Large BULL on the card their turn is over and they get NO points. Shaka Laka Boom Boom. How far will you go?  </p>
                        <p>If you choose to stop and take the points at any time, remove the face up cards from the grid and place them in a pile beside you. Then replace the cards from the Draw pile, being careful to place them FACE DOWN in the empty places on the grid so no player sees what they are.  </p>
                        <p>If a player’s turn ends when they fail to make a match, turn all FACE UP cards back over to FACE DOWN.  </p>
                        <p>NOTE: PAY ATTENTION AND REMEMBER WHERE CARDS ARE LOCATED ON THE GRID. IF THEY GET TURNED BACK TO FACE DOWN AT THE END OF ANOTHER PLAYER’S TURN; YOU MAY USE THEM ON YOUR TURN.  </p>
                        <h4>SCORING</h4>
                        <p>The score for your turn is the number of face up cards multiplied by it. So, if you have 3 face up cards, 10 points( 1 knowledge card), 4 face up card =20 points( Two Knowledge card) and so on. 5 Face up card means 30 points and 3 knowledge cards. 6 Face up card means 40 points and 4 knowledge card to read.  </p>
                        <p>PICK UP A KNOWLEDGE SCORING CARD AFTER EVERY BOOM (COMPLETION OF A SEQUENCE 3( max 3 sequence),4( max 4 sequence ),5( max 5 sequence),6( 6 max 6 sequence)  READ THE KNOWLEDGE CARD BEFORE THE TURN OF THE NEXT PARTICIPANT. The person with maximum knowledge card wins</p>
                        <h4>WINNING</h4>
                        <p>The game is over when the grid is no longer refilled to 20 cards from the Draw Pile. Player’s then count up their points and the one with the most is winner.  </p>
                        <h4>TIP</h4>
                        <p> Each time you collect cards, put them on top of your previous cards. After putting the knowledge card on top; one winners shall emerge - With highest number of knowledge cards.  </p>
                        <h4>Learning:</h4>
                        <p>It takes courage to take risk. The learning is taking risk means having more profit. But people with more knowledge will gain more and be winners. So you need to remember , learn and also take courage to win this game called Boom. </p>
                        
                    </div>
                    <div className="right" style={{flex : 0.4}}>
                        <img src={boomgame} width="90%" style={{marginLeft : '10%'}}/>
                    </div>
                </div> }






                {currentcategory == "game2" && <div className="modalcontent" style={{display : 'flex',flexDirection : 'row',justifyContent : 'left',overflow : 'scroll'}}>
                    <div className="left" style={{flex : 0.6}}>
                    <h1>Multicap Card Game</h1>

<p align="justify">There is a process of Stock Growing from small cap to mid cap and finally Large cap stock . To understand it better the top 100 stocks based of Market Capitalisation is considered as Large Cap stocks. The next 150 stocks are called Mid Cap stocks . And stocks after that are called small cap stocks.</p>
<p align="justify">In a Mutual Fund or an ETF ( Exchange Traded Fund ) a Fund is called Large Cap Fund when all the stocks in that Fund are only large cap funds  When a Fund invest in only mid size companies as described above then it’s a mid cap fund . And when Fund invest in small size company as described above it is called small cap fund.</p> 
<p align="justify">By investing in a multi-cap portfolio, you are buying into a combination of companies of various sizes that fall under various categories, such as small-cap, mid-cap and large-cap. A mid-cap investment can be a part of a multi-cap portfolio; the term "mid-cap" refers to a stock investment in a mid-sized company.</p>
<h4>Definition of 'Multicap Funds':</h4> 
These are diversified mutual funds which caninvest in stocks across market capitalization. In other words, they are market capitalization agnostic. ... They are relatively less risky compared to a pure mid cap or a small capfund and are suitable for not-so-aggressive investors. Purpose of the MultiCap Card Game -  Complete the sequence by making it a large cap only .  One can start small or mid or large but sequence is complete only when it is large cap in fact the largest capitalised stock.<br/><br/>
<h4>CONTENTS:</h4>
108 cards Please remove all components from the package and compare them to the components list. Remove any blank cards- these are not used. 
<h4>OBJECT:</h4>
Be the first player all the cards in your STOCK pile. SET UP Shuffle the deck and deal the appropriate number of cards to each player (See chart.).<br/> 
These cards remain facedown and are called your STOCK pile. HOW MANY CADS TO DEAL 2 to 4 players 20 Cards 5 or more players  10 cards Turn over only the top card of your STOCK pile and leave it, face up, on the top of the pile.The cards from your STOCK pile are what you’re trying to get rid of to win the game. During play, up to 4 BUILDING piles will be created and used by all players. Create the BUILDING piles in the middle of the playing area, close to the DRAW pile.<br/>
NOTE: A Multi Cap card is wild and may be used as any card you need. <br/><br/>
LET’S PLAY The youngest player goes first. On their turn, each player will do several things in the following order. <br/>
<ol>
<li>Draw from the DRAW pile until you have 5 cards. This is your hand.(At the beginning of every turn, you will draw back up to 5.</li> 
<li>If possible, add to BUILDING piles from your hand, Discard piles and Stock pile.(See below for what you’re allowed to add to a Building pile.) </li>
<li>When you’ve played all the cards from your Stock pile or hand that you can, end your turn by adding 1 card from your hand to stay of the</li>
<li>Discard piles in front of you. Play now moves to next player </li>
</ol>
<br/><br/>
 NOTE: If you get rid of all 5 cards in your hand on a turn, draw back up to 5. IMMEDIATELY and continue playing your turn. You may continue to immediately draw back up to 5 any time you use ALL 5 cards. (Discarding your 5th card DOES NOT count as getting rid of all of your cards in one turn.) <br/><br/>
<h4>HOW TO USE THE VARIOUS PILES STOCK PILE: </h4>
You will get rid of your Stock pile by playing the top card, when you can, on the Building piles. When you’ve used the top card of your Stock pile, turn over the next card. On your turn, you may keep playing the top card as long as there are available plays. <br/><br/>
 DISCARD PILE: At the end of your turn, you will discard ANY one card from your hand onto ANY of your discard piles. (They do NOT have to be in sequential order.) On your turn, you may play the top cards from any of your Discard piles onto any of the Building piles, if there’s an available play. 
<br/><br/>
BUILDING PILES: A 1 or a Multi Cap card is required to begin any of the 4 Building piles. Cards must be added to the Building piles sequentially. For example, if a 4 is the top card on a Building pile, you may put either a 5 or a Multi Cap card on top followed by a 6, etc. (A Multi Cap card is wild and may be used as any card you need.) A Building pile is completed when a 12 is played. Move completed piles to the sides of the playing area. (You’ll need to shuffle and reuse them if the DRAW pile runs out of cards.) There may only be 4 Building piles at any time .If you have a card to start a new pile but there are already 4 piles ,you must wait until a Building pile is finished and a slot opens up to start a new pile. You may add to the Building piles with cards from your hand,from your Discard Pile or from your Stock pile. But, remember, the stock pile is the one you are trying to get rid of so this should always be your first choice. <br/><br/>
SCORING AND WINNING The first person to get rid of all of the cards in their Stock pile wins! You may wish to play several games and keep score: the winner of each game scores 10 points for each card remaining in their opponents’ STOCK piles, plus 50 points for winning the game. The first person to collect 1000 points wins. The final aim is to reach the level of top card 12 , the largest Cap stock and get rid of all cards . Finally you Wealth is equal to points more the cards remaining in hands of opponents More is your wealth . <br/><br/>
 PARTNERSHIP  In a Partnership, you can play from both your and your partners STOCK and DISCARD piles.  Partners may not discuss moves. When you are playing, your partner must keep quiet. Partners can continue to play from both DISCARD piles even if one partner STOCK pile is finished. 
The game is over when BOTH partner’s STOCK piles are finished. <h4>REMEMBER</h4>
<ul>
<li>A player’s four DISCARD piles are imaginary until they start them during play.</li>
<li>The BUILDING piles are imaginary until started by players during the game.</li>
<li>The object of the game is to get rid of the cards from your STOCK piles  SHORT GAMES  For a shorter game, deal a STOCK pile of 10 cards each player. Key learning -  Multi Cap can fit every where</li> 
<li>Final stage is to reach Large Cap and complete . Which means final Goal is to have stocks which become Large Cap. If others are not able to reach the final level of making their pile large cap , you win by the margin.</li> 
</ul>                   
                    </div>
                    <div className="right" style={{flex : 0.4}}>
                        <img src={MulticapCardGame} width="90%" style={{marginLeft : '10%'}}/>
                    </div>
                </div> }





                {currentcategory == "game3" && <div className="modalcontent" style={{display : 'flex',flexDirection : 'row',justifyContent : 'left',overflow : 'scroll'}}>
                    <div className="left" style={{flex : 0.6}}>
                        
                    <p align="justify">A Card game to win with better fundamental. Learn to earn through fundamental analysis of stocks .
Players play and learn which stock is better based on the fundamentals of Stock .
Number of Players -2 to 6 
Cards to be distribute equally among the players </p>
<p align="justify">In a Mutual Fund or an ETF ( Exchange Traded Fund ) a Fund is called Large Cap Fund when all the stocks in that Fund are only large cap funds  When a Fund invest in only mid size companies as described above then it’s a mid cap fund . And when Fund invest in small size company as described above it is called small cap fund.</p> 
<h4>How To Play</h4>
 <ol>
 <li>
 Person sitting next to the person distributing cards will play first ( or a toss can be done who should play first or youngest players play first )
 </li>
 <li>
 The players will not see any card . The card on top will be played.
 </li>
 <li>
 The player chose a criteria and based on that criteria the round runs . Eg if the player chose market capitalisation as criteria then all will have to play on this criteria. If player chose PE( Price Earning Ratio ) the criteria becomes PE and so on
 </li>
 <li>
 All players pick up the top card and see if their Criteria is bette or not . Who so ever have better criteria wins that round and collects all the cards 
 </li>
 <li>
 Some criteria the higher the better and some fundamental criteria lower the better . Eg DE ( Debt Equity Ratio lower the better ) PE Ratio lower the better . Market Cap higher the better . 
 </li>
 <li>
 The player who finishes all the cards first is out first . The player left and have maximum cards till end is the winner 
 </li>
 </ol>
 <p>Purpose of game is to pic stocks based on Fundamental Analysis of Stocks and chose winning stocks.</p>
<h4>Higher figures better for these ratio</h4>
<ul>
<li>Market Capitalisation </li>
<li>Dividend Yield Ration DIV</li>
<li>EPS - Earning Per Share </li>
<li>Institutional Holding </li>
<li>NPG Net Profit Growth </li>
<li>RONW Return On Net Worth </li>
</ul>
<h4>Lower Figures better for the below mentioned ratios</h4>
<ul>
<li>DE - Debt Equity Ratio</li>
<li>PE Ratio - Price Equity Ratio </li>
<li>Promoters Pledge</li>
</ul>
                        
                    </div>
                    <div className="right" style={{flex : 0.4}}>
                        <img src={Fun} width="90%" style={{marginLeft : '10%'}}/>
                    </div>
                </div> }




        

     

    
            </Modal>
            <div className="downloads">
  
                <div className="eachdownloads" onClick={() => handletap("game1")}>
                        <img src={volatilitygame} />
                        <h3>Boom Card Changing Game</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("game2")}>
                        <img src={tutorial} />
                        <h3>Multi Cap card Game</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("game3")}>
                        <img src={howtoconductvg} />
                        <h3>Fun Da Attack- Card Game</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("game4")}>
                        <img src={howtoconductvg} />
                        <h3>Tol Mol Ke Goal- Board Game</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("game5")}>
                        <img src={howtoconductvg} />
                        <h3>Turnover- Turn the bear Down</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("game6")}>
                        <img src={howtoconductvg} />
                        <h3>Take Over- Bull & Bear Fight Face to Face</h3>
                </div>

      
            </div>
        </div>
    )
}

export default Boardgames
