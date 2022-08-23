import Initialbanner from '../../components/Initialbanner';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

export default function Home(){
    return(
        <div className="">
            <Menu />
            <Initialbanner />
            <Content />
            <Footer />
        </div>
    );
}