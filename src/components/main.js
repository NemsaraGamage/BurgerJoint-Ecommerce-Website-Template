import React, { useState } from 'react';
import '../components/styles.css';

import add from '../components/icons/add.png'
import cart from '../components/icons/cart.png'
import user from '../components/icons/user.png'
import ban from '../components/pics/banner1.jpg'
import pic1 from '../components/pics/1.jpg'
import pic2 from '../components/pics/2.jpg'
import pic3 from '../components/pics/3.jpg'
import pic4 from '../components/pics/4.jpg'
import pic5 from '../components/pics/5.jpg'
import pic6 from '../components/pics/6.jpg'
import pic7 from '../components/pics/7.jpg'
import pic8 from '../components/pics/8.jpg'
import pic9 from '../components/pics/9.jpg'
import c1 from '../components/pics/c1.png'
import c2 from '../components/pics/c2.png'
import c3 from '../components/pics/c3.png'
import c4 from '../components/pics/c4.png'
import c5 from '../components/pics/c5.png'
import ban2 from '../components/pics/ban2.jpg'
import ban3 from '../components/pics/ban3.jpg'
import ban4 from '../components/pics/ban4.jpg'
import d1 from '../components/pics/d1.png'
import d2 from '../components/pics/d2.png'
import d3 from '../components/pics/d3.png'
import d4 from '../components/pics/d4.png'
import d5 from '../components/pics/d5.png'
import des1 from '../components/pics/des1.jpg'
import des2 from '../components/pics/des2.jpg'
import des3 from '../components/pics/des3.jpg'
import des4 from '../components/pics/des4.jpg'
import des5 from '../components/pics/des5.jpg'
import sid1 from '../components/pics/sid1.png'
import sid2 from '../components/pics/sid2.png'
import sid3 from '../components/pics/sid3.jpg'
import sid4 from '../components/pics/sid4.png'
import sid5 from '../components/pics/sid5.png'

import face from '../components/icons/face.png'
import insta from '../components/icons/insta.png'
import twit from '../components/icons/twit.png'


const Main = () => {

    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 100);
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div className='backColor'>

            {/* <!-- navigation bar --> */}
            <div className="navbar">
                <a href="#" className="logo">BurgerJoint</a>
                <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
                <ul className={menuOpen ? 'menu active' : 'menu'}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#cata">Catagories</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>

            {/* banner */}
            <div className='banner'>
                <img src={ban}></img>
            </div>

            {/* main sector */}
            <div className='exMenu'>
                <h4>Top Deals</h4>

                <div className='cardMenu'>
                    <div className="burger-card">
                        <img src={pic1} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Double Beef</h2>
                            <p className="burger-description">Double Quarter Pounder with Cheese features two quarter pound* 100% fresh beef burger patties. </p>
                            <div>
                                <p className="burger-price">$3.50</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={pic2} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Double Chicken</h2>
                            <p className="burger-description">100% beef burger with a taste like no other. The perfection starts with two 100% pure all beef patties</p>
                            <div>
                                <p className="burger-price">$3.50</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={pic3} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Big Tasty</h2>
                            <p className="burger-description">Beef burger is seasoned with a pinch of salt and pepper, sizzled on a flat iron grill, then topped with onions.</p>
                            <div>
                                <p className="burger-price">$2.99</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={pic4} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Cheese Deluxe</h2>
                            <p className="burger-description">Cheese deluxe burger crisp shredded lettuce and three Roma tomato slices top a ¼ lb.* of fresh patty </p>
                            <div>
                                <p className="burger-price">$3.45</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={pic5} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Bacon Deluxe</h2>
                            <p className="burger-description"> Bacon burger features thick-cut applewood smoked bacon and cheese atop a ¼ lb.* of fresh beef and onions</p>
                            <div>
                                <p className="burger-price">$2.00</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='add2Display'>
                <img src={ban4}></img>
            </div>

            <div className='comboMenu'>
                <h4>Combo Menu</h4>

                <div className='cardMenu'>
                    <div className="burger-card">
                        <img src={c1} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Burger Feast</h2>
                            <p className="burger-description">4 Big Chicken Burgers + 2 Mojitos</p>
                             <div>
                                <p className="burger-price">$8.99</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={c2} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">5Pcs Lays Strips</h2>
                            <p className="burger-description">5 pcs strips lays + 2 dips</p>
                             <div>
                                <p className="burger-price">$4.59</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={c3} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Supreme Combo</h2>
                            <p className="burger-description">Sandwich + Fries + Drink</p>
                             <div>
                                <p className="burger-price">$3.00</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={c4} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Twister Meal</h2>
                            <p className="burger-description">Twister Charger Sandwich + Fries + Drink</p>
                             <div>
                                <p className="burger-price">$1.99</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={c5} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Burger Box</h2>
                            <p className="burger-description">Chicken Burger + 1 Pc Chicken + Regular Fries + Drink</p>
                             <div>
                                <p className="burger-price">$6.00</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/* sides */}
            <div className='drinkMenu'>
                <h4>Side's</h4>

                <div className='cardMenu'>
                    <div className="burger-card">
                        <img src={sid1} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Large Curly Fries</h2>
                            <p className="burger-description">Crisply Curly spicy fries <br></br> <br></br><br></br></p>
                             <div>
                                <p className="burger-price">$2.00</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={sid2} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Golden Chicken Bites</h2>
                            <p className="burger-description">Crispy breaded Chicken bites cooked to a golden crisp <br></br> <br></br></p>
                             <div>
                                <p className="burger-price">$1.50</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={sid3} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Jalapeno Poppers</h2>
                            <p className="burger-description">4 crispy pieces of delicious poppers stuffed with spicy jalapeno & tasty cheddar cheese</p>
                             <div>
                                <p className="burger-price">$1.50</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={sid4} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Loaded Fries</h2>
                            <p className="burger-description">Natual-cut french fries loaded with Cheddar Cheese, Sante Fe sauce and Jalapeno coins.</p>
                             <div>
                                <p className="burger-price">$2.00</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                    <div className="burger-card">
                        <img src={sid5} className="burger-image" />
                        <div className="burger-details">
                            <h2 className="burger-name">Garden Salad</h2>
                            <p className="burger-description">Fresh Iceberg lettuce, shredded cheddar cheese, tomato your choice of dressing.</p>
                             <div>
                                <p className="burger-price">$1.26</p>
                                <img className="burger-addicon" src={add}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='addDisplay'>
                <img src={ban2}></img>
                <img src={ban3}></img>   
            </div>

            <div id='cata' className='catagories'>
                <h4>Catagories</h4>

                <div className='catagories-buttons'>
                    <button onClick={() => handleOptionClick('option1')}>Burgers</button>
                    <span>|</span>
                    <button onClick={() => handleOptionClick('option2')}>Combo Meals</button>
                    <span>|</span>
                    <button onClick={() => handleOptionClick('option3')}>Drinks</button>
                    <span>|</span>
                    <button onClick={() => handleOptionClick('option4')}>Desserts</button>
                </div>

                <div className='catagories-options'>
                    {selectedOption && (
                        <div>
                        {selectedOption === 'option1' && (
                            <div>
                                <h4 className=''>Burgers</h4>
                                <div className='cardMenu'>
                                    <div className="burger-card">
                                        <img src={pic1} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Double Beef</h2>
                                            <p className="burger-description">Double beef + Pickles + Cheese + Onions</p>
                                            <div>
                                                <p className="burger-price">$3.50</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={pic2} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Double Chicken</h2>
                                            <p className="burger-description">Double Chicken + Cheese + Pickles</p>
                                            <div>
                                                <p className="burger-price">$3.50</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={pic3} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Big Tasty</h2>
                                            <p className="burger-description">Beef Patty + Cheese + Pickles + Onions</p>
                                            <div>
                                                <p className="burger-price">$2.99</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={pic4} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Cheese Deluxe</h2>
                                            <p className="burger-description">Beef Patty + Cheese + Pickle + Onions</p>
                                            <div>
                                                <p className="burger-price">$3.45</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={pic5} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Bacon Deluxe</h2>
                                            <p className="burger-description">Beef Patty + Bacon + Onions + Cheese</p>
                                            <div>
                                                <p className="burger-price">$2.00</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={pic6} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Crispy Fish</h2>
                                            <p className="burger-description">Fish Patty + Cheese + Onions + Tomato</p>
                                            <div>
                                                <p className="burger-price">$2.45</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={pic7} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Chicken Deluxe</h2>
                                            <p className="burger-description">Chicken Patty + Pickle + Onions + Cheese</p>
                                            <div>
                                                <p className="burger-price">$2.00</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={pic8} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Hamburger</h2>
                                            <p className="burger-description">Beef Patty + Cheese + Pickle + Onions</p>
                                            <div>
                                                <p className="burger-price">$1.50</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={pic9} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Fish Burger</h2>
                                            <p className="burger-description">Fish Patty + lettuce + Onions + Mayonnaise</p>
                                            <div>
                                                <p className="burger-price">$1.50</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedOption === 'option2' && (
                            <div>
                                <h4 className=''>Combo Meals</h4>
                                <div className='cardMenu'>
                                    <div className="burger-card">
                                        <img src={c1} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Burger Feast</h2>
                                            <p className="burger-description">4 Big Chicken Burgers + 2 Mojitos</p>
                                            <div>
                                                <p className="burger-price">$8.99</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={c2} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">5Pcs Lays Strips</h2>
                                            <p className="burger-description">5 pcs strips lays + 2 dips</p>
                                            <div>
                                                <p className="burger-price">$4.59</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={c3} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Supreme Combo</h2>
                                            <p className="burger-description">Sandwich + Fries + Drink</p>
                                            <div>
                                                <p className="burger-price">$3.00</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={c4} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Twister Meal</h2>
                                            <p className="burger-description">Twister Charger Sandwich + Fries + Drink</p>
                                            <div>
                                                <p className="burger-price">$1.99</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={c5} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Burger Box</h2>
                                            <p className="burger-description">Chicken Burger + 1 Pc Chicken + Regular Fries + Drink</p>
                                            <div>
                                                <p className="burger-price">$6.00</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedOption === 'option3' && (
                            <div>
                                <h4 className=''>Drinks</h4>
                                <div className='cardMenu'>
                                    <div className="burger-card">
                                        <img src={d1} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Pepsi</h2>
                                            <p className="burger-description">Soft Drink</p>
                                            <div>
                                                <p className="burger-price">$10</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={d2} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">7 Up</h2>
                                            <p className="burger-description">Soft Drink</p>
                                            <div>
                                                <p className="burger-price">$1.00</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={d3} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Mirinda</h2>
                                            <p className="burger-description">Soft Drink</p>
                                            <div>
                                                <p className="burger-price">$1.00</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={d4} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Mountain Dew</h2>
                                            <p className="burger-description">Soft Drink</p>
                                            <div>
                                                <p className="burger-price">$1.00</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={d5} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Water</h2>
                                            <p className="burger-description">Water</p>
                                            <div>
                                                <p className="burger-price">$0.99</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedOption === 'option4' && (
                            <div>
                                <h4 className=''>Desserts</h4>
                                <div className='cardMenu'>
                                    <div className="burger-card">
                                        <img src={des1} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Ice Cream</h2>
                                            <p className="burger-description">Vanilla Ice Cream</p>
                                            <div>
                                                <p className="burger-price">$1.00</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={des2} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">M&M Sunday</h2>
                                            <p className="burger-description">Ice Cream Sunday</p>
                                            <div>
                                                <p className="burger-price">$2.60</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={des3} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Oreo Sunday</h2>
                                            <p className="burger-description">Ice Cream Sunday</p>
                                            <div>
                                                <p className="burger-price">$2.60</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={des4} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Cameral Sunday</h2>
                                            <p className="burger-description">Ice Cream Sunday</p>
                                            <div>
                                                <p className="burger-price">$1.79</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="burger-card">
                                        <img src={des5} className="burger-image" />
                                        <div className="burger-details">
                                            <h2 className="burger-name">Chocolate Chip </h2>
                                            <p className="burger-description">Cookie</p>
                                            <div>
                                                <p className="burger-price">$0.50</p>
                                                <img className="burger-addicon" src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    )}
                    
                </div>

            </div>

            <button className={`back-to-top ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
                &#8593;
            </button>

            <footer class="footer">
                <h4>BurgerJoint</h4>
                <div className='links'> 
                    <a href="#" class="nav-link">Home</a>
                    <a href="#" class="nav-link">About</a>
                    <a href="#" class="nav-link">Services</a>
                    <a href="#" class="nav-link">Contact</a>
                </div>
            
                <div class="icons">
                    <img src={twit}></img>
                    <img src={face}></img>
                    <img src={insta}></img>
                </div>
                <p class="footer-text">© 2023 BurgerJoint. All rights reserved.</p>
            </footer>

        </div>
        </>
    )
}

export default Main;