import logo from '../Component/Assets/home.png';
import '../Component/style.css';

function Image() {
    return(
        <img src={logo} className="home_img" alt="logo" />
    )
}

export default Image;