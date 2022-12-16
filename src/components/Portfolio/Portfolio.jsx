import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
const Portfolio = () => {
    return ( <
        section className = "portfolio" >

        <
        h1 className = "heading" >Nos activités < /h1>

        <
        div className = "box-container" >

        <
        div className = "box" >
        <
        img src = { image1 }
        alt = "" / >
        <
        /div>

        <
        div className = "box" >
        <
        img src = { image2 }
        alt = "" / >
        <
        /div>

        <
        div className = "box" >
        <
        img src = { image3 }
        alt = "" />
        <
        /div>

        <
        div className = "box" >
        <
        img src = { image4 }
        alt = "" / >
        <
        /div>

        <
        /div> <
        /section>
    )
}
export default Portfolio;