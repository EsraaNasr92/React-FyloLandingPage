import Features from '../Features';
import Header from '../Header';
import HeroSection from '../HeroSection';
import HowWorks from '../HowWorks';
import Testimonials from '../Testimonials';

export default function index(){
    return(
        <>
            <Header />
            <HeroSection />
            <Features />
            <HowWorks />
            <Testimonials />
        </>
    );
}