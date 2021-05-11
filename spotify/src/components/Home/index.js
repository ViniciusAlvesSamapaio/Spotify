import Initialbanner from '../Initialbanner';
import Content from '../Content';
import Footer from '../Footer';
import Menu from '../Menu';

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