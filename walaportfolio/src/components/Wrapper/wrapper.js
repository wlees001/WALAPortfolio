import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//images
import Image3 from '../images/pic03.jpg';
import Image4 from '../images/pic04.jpg';

export class Wrapper extends Component {
    render() {
       return (
<div class="wrapper">
<section class="container">
    <header class="major">
        <h2>Sed magna consequat lorem curabitur tempus</h2>
        <p>Elit aliquam vulputate egestas euismod nunc semper vehicula lorem blandit</p>
    </header>
    <div class="row features">
        <section class="4u 12u(narrower) feature">
            <div class="image-wrapper first">
                <a href="#" class="image featured"><img src={Image3} alt="nope" /></a>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
            vel sem sit dolor neque semper magna lorem ipsum.</p>
        </section>
        <section class="4u 12u(narrower) feature">
            <div class="image-wrapper">
                <a href="#" class="image featured"><img src={Image4} alt="" /></a>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
            vel sem sit dolor neque semper magna lorem ipsum.</p>
        </section>
        <section class="4u 12u(narrower) feature">
            <div class="image-wrapper">
                <a href="#" class="image featured"><img src="images/pic05.jpg" alt="" /></a>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
            vel sem sit dolor neque semper magna lorem ipsum.</p>
        </section>
    </div>
    <ul class="actions major">
        <li><a href="#" class="button">Elevate my awareness</a></li>
    </ul>
</section>
</div>
       )
    }
}

export default Wrapper;