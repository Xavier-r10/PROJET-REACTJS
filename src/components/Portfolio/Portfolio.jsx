import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.css';
const Portfolio = () => {
    return ( <
        section className = "portfolio" >

        <
        h1 className = "heading" > My Nos activités < /h1>

        <
        div className = "box-container" >

        <
        div className = "box" >
        <
        img src = "image1.jpg"
        alt = "" >
        <
        /div>

        <
        div className = "box" >
        <
        img src = "image2.jpg"
        alt = "" >
        <
        /div>

        <
        div className = "box" >
        <
        img src = "image3.jpg"
        alt = "" >
        <
        /div>

        <
        div className = "box" >
        <
        img src = "image4.jpg"
        alt = "" >
        <
        /div>

        <
        /div> <
        /section>
    )
}
export default Portfolio;