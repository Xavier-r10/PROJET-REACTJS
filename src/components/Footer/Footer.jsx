import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpeg';
import img8 from '../../assets/img8.jpeg';
const Footer = () => {
    return ( <
        section className = "partenaires" >

        <
        h1 className = "heading3" > Nos banques partenaires< /h1>

        <
        div className = "box-container" >

        <
        div className = "box" >
        <
        img src = { img1 }
        alt = "" / >
        <
        /div>

        <
        div className = "box" >
        <
        img src = { img2 }
        alt = "" / >
        <
        /div>

        <
        div className = "box" >
        <
        img src = { img3 }
        alt = "" />
        <
        /div>

        <
        div className = "box" >
        <
        img src = { img4 }
        alt = "" / >
        <
        /div>

        <
        div className = "box" >
        <
        img src = { img5 }
        alt = "" / >
        <
        /div>

        <
        div className = "box" >
        <
        img src = { img6 }
        alt = "" / >
        <
        /div>

        <
        div className = "box" >
        <
        img src = { img7 }
        alt = "" / >
        <
        /div>

        <
        div className = "box" >
        <
        img src = { img8 }
        alt = "" / >
        <
        /div>

        <
        /div> <
        /section>

        
    
    )
}
export default Footer;