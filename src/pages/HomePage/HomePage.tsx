import { Hero } from './components/Hero/Hero'
import { Reasons } from './components/Reasons/Reasons';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Services } from './components/Services/Services';
import { Stats } from './components/Stats/Stats';
import { Ads } from './components/Ads/Ads';
import { Projects } from './components/Projects/Projects';
import { Cta } from './components/Cta/Cta';
import './HomePage.scss'

export const HomePage = () => {
    return(
        <>
        <Hero/>
        <Reasons/>
        <AboutUs/>
        <Services/>
        <Stats/>
        <Ads/>
        <Projects/>
        <Cta/>
        </>
    );
}