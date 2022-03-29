import React from 'react';

import Button from './Button';
import Card from './Card';

function Header() {
    return(
        <div className='container'> 
            <div className='header'>
                <div className='menu container'>
                    <p className='logo'>Relvise</p>
                    <div className='navigation'>
                        <div class="navigation-item">Home</div>
                        <div class="navigation-item">Product</div>
                        <div class="navigation-item">Pricing</div>
                        <div class="navigation-item">Contact</div>
                    </div>
                    <div className='icons-items'>
                    <a>
                        <img className='serchPic' src="/assets/icons/search.png" alt="Поиск" />
                    </a>
                    <a>
                        <img src="/assets/icons/korzina.png" alt="Корзина" />
                    </a>
                    </div>
                    <a className='toggler'>
                        <img src="/assets/icons/toggler.png" alt="toggler" />
                    </a>
                </div>
                <div className='header__content'>
                    <h1 className='header__title'>Finance and Consultancy Solution</h1>
                    <h4 className='header__subTitle'>We know how large objects will act, but things on a small scale.</h4>
                    <div className='header__button'>
                    <Button orangeButton>Get Quote Now</Button>
                    <Button>Learn More</Button>
                    </div>
                </div>
            </div>
            <div className='blue'>
            <div className='cards-items'>
                <Card>
                    <img src="/assets/icons/blue settings.png" alt="шестеренка" />
                    <h3 className='title'>Surface Transport & Logistics</h3>
                    <p className='subTitle'>We focus on ergonomics and meeting you where you work. </p>
                </Card>
                <Card>
                <img src="/assets/icons/blue settings.png" alt="шестеренка" />
                <h3 className='title'>Save money and time</h3>
                <p className='subTitle'>Just type what's on your mind and we'll get you there. </p>
                </Card>
                <Card blueCard>
                <img src="/assets/icons/white settings.png" alt="шестеренка" />
                <h3 className='title'>Environmental Consulting</h3>
                <p className='subTitle'>the quick fox jumps over the lazy dog </p>
                </Card>
            </div>
            </div>
        </div>
    );
}

export default Header;