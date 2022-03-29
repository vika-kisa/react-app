
import {Button , Card} from "../";


export const Header = () => {
    return(
        <div className='container'> 
            <div className='header'>
                <div className='menu container'>
                    <p className='logo'>Relvise</p>
                    <div className='navigation'>
                        <div class="navigation__item">Home</div>
                        <div class="navigation__item">Product</div>
                        <div class="navigation__item">Pricing</div>
                        <div class="navigation__item">Contact</div>
                    </div>
                    <div className='icons__items'>
                    <a>
                        <img src="/assets/icons/search.png" alt="Поиск" />
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
            <div className='cards__items'>
                <Card
                image="/assets/icons/blue settings.png"
                imageAlt="шестеренка"
                title = "Surface Transport & Logistics"
                subTitle= "We focus on ergonomics and meeting you where you work."
                />
                <Card
                image="/assets/icons/blue settings.png"
                imageAlt="шестеренка"
                title = "Save money and time"
                subTitle= "Just type what's on your mind and we'll get you there."
                />
                <Card blueCard 
                image = "/assets/icons/white settings.png"
                imageAlt= "шестеренка"
                title = "Environmental Consulting" 
                subTitle= "the quick fox jumps over the lazy dog"
                />
            </div>
            </div>
        </div>
    );
}
