import '../css/App.css';
import Footer from '../components/Footer';
import Menu from '../components/Menu';


const Layout = props => (
    <div className="support-page">
        <div className="Home-menuBar">
            <Menu />
        </div>

        <Footer />
    </div>
);
export default Layout;