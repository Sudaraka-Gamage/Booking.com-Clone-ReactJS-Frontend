import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/347596031.jpg?k=aaaf1c1857bd12f1dd8d8aee493a79efe578df695075dee3d433aae8f6bb5fd4&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/356163262.jpg?k=73af6b6fec86bfb625f85a1a039eff30c66d9d6d6fcb91445ec023797d1c31c7&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/279175511.jpg?k=20f523039c839b52f017fce813da3ce0808be06aebf624cfebf2bc43f19f6c39&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/164056442.jpg?k=0e7205ef220d5204df9525e167b8810c7acac5857237702c8019824003b27a45&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/348859281.jpg?k=1eb5d53ad53762f248b45763201144418554f951c3794772c5f6740011bca45e&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/338758769.jpg?k=e0e1bf8b8ddf12619756f4481d2dd1e35df1d3dda616c34e1a8416cd77db8d42&o=&hp=1"
    },
  ];

  const handleOpen = (i) => {
      setSlideNumber(i);
      setOpen(true);
  };

  const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  };

  return (
    <div>

      <Navbar/>
      <Header type="list"/>
       <div className="hotelContainer">

         {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
         </div>}

         <div className="hotelWrapper">
           <button className="bookNow">Reserve or Book Now!</button>
           <h1 className="hotelTitle">Grand Hotel</h1>

            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Elton St 125 New York</span>
            </div>

            <span className="hotelDistance">
              Exellent location - 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114  at this property and get a free airport taxi.
            </span>

            <div className="hotelImages">
              {photos.map((photo, i)=>(

                <div className="hotelImgWrapper">
                  <img onClick={ ()=>handleOpen(i)  } src={photo.src} alt="" className="hotelImg"/>
                </div>

              ))}
            </div>

            <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">Stay in the heart of Nuwara.</h1>
                  <p className="hotelDesc">
                  You're eligible for a Genius discount at Little Tai Hang! To save at this property, 
                  all you have to do is sign in. Featuring stunning views of Victoria Harbour with 
                  pockets of greens, Little Tai Hang offers cosy accommodation in Causeway Bay, 
                  Hong Kong. It is only a 5-minute walk from Exit A1 of Tin Hau MTR Station. Free 
                  WiFi is available Little Tai Hang is a 10-minute walk from Causeway Bay shopping 
                  area, while Central and Wanchai can be approached within 15 minutes by public 
                  transportation. The property is a 40 km away from Hong Kong International Airport.
                  Designed with a loving devotion to detail, rooms here will provide a flat-screen 
                  TV with international channels.
                  </p>
                </div>

                <div className="hotelDetailsPrice">
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>
                    Located in the real heart of Nuwara,this property has 
                    Exellent location score of 9.8!
                  </span>
                  <h2>
                    <b>$945</b>(9 nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
            </div>

         </div>
         <MailList/>
         <Footer/>
       </div>
    </div>
  );
};
export default Hotel;