/* eslint-disable react/jsx-pascal-case */
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import HomeAbout from "../components/HomeAbout";
import Footer from "../components/Footer";
//import Navbar_1 from "../components/Navbar_1";
const Home = () => {
    return (
        <section className="bg-white dark:bg-gray-900">    
            <Navbar />
            <HomeCard/>
            <HomeAbout/>
            <Footer/>
        </section>
);
}
export default Home;