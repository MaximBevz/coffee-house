import './hero.scss';
import coffeeOne from '../../images/coffee.png';
import coffeeTwo from '../../images/coffee2.png';
import coffeeThree from '../../images/coffee3.png';
import coffeeFour from '../../images/coffee4.png';
import banner from '../../images/wakeUp.png';

export default function Hero() {
    return (
        <section className='hero'>
            <div className='main-offer'>
                <h2 className='main-offer-tittle'>
                    Wake Up And Choose Your Coffee Type
                </h2>
                <div className='main-offer-pictures'>
                    <img
                        className='main-offer-picture'
                        src={coffeeOne}
                        alt='cap'/>
                    <img
                        className='main-offer-picture'
                        src={coffeeTwo}
                        alt='cap'/>
                    <img
                        className='main-offer-picture'
                        src={coffeeThree}
                        alt='cap'/>
                    <img
                        className='main-offer-picture'
                        src={coffeeFour}
                        alt='cap'/>
                </div>
            </div>
            <div className='hero-banner'>
                <img src={banner} alt="wake up"/>
                <p className='hero-text'>
                    Lorem ipsum dolor sit amet, consvectetur adipis cing elit, sed do
                    eiusmod tempor incididunt.
                </p>
            </div>
        </section>
    );
}