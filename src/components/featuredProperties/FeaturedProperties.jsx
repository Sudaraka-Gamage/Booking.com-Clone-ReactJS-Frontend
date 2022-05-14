import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
    <div className="fpItem">
        
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/196949207.jpg?k=a99cc80ea693194ddd596c9dc219b16a815955901fcf319fdba1c322507b4e80&o=&hp=1" 
        alt="" className="fpImg"/>
        <span className="fpName">Ella Rock View Point</span>
        <span className="fpCity">Ella</span>
        <span className="fpPrice">Starting from $50</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/196948649.jpg?k=7d8d13281eae02178c5b4829a6657fc88a791a66724ed0faee2346d18e372beb&o=&hp=1" 
        alt="" className="fpImg" />
        <span className="fpName">Lipton Place</span>
        <span className="fpCity">Haputale</span>
        <span className="fpPrice">Starting from $89</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/196950835.jpg?k=5e1d76cd43be619eb76292b21888fd391dcfe997f462df92a8c9c9ba469d0b35&o=&hp=1" 
        alt="" className="fpImg" />
        <span className="fpName">Dunhinda view point</span>
        <span className="fpCity">Badulla</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/244262335.jpg?k=79c78ef96b6a8fb29b6d3a25bd9ba75781e2f58e7f0ecc264e6716ebc4507580&o=&hp=1" 
        alt="" className="fpImg" />
        <span className="fpName">Costa view</span>
        <span className="fpCity">Ella</span>
        <span className="fpPrice">Starting from $50</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
    
    </div>
  )
}

export default FeaturedProperties