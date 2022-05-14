import "./featured.css"

const Featured = () => {
  return (
    <div className="featured" >

      <div className="featuredItem">
        <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/106581103.jpg?k=af5bc4be2d863270259c92110c48221b3eba3e2ce66543edbff29f69dc981311&o=&hp=1" 
            alt="" 
            className="featuredImg"
        />
        <div className="featuredTitles">
        <h1>Nuwara Eliya</h1>
        <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/210630841.jpg?k=9c7ce6f4a15261e69822a5c641a659eebd1442d2f53671a75b339ffa59fae2ed&o=&hp=1" 
            alt="" 
            className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ella</h1>
          <h2>369 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/283039206.jpg?k=58497039163f26d2c1d33106832592b110862749bb9f427219184319d8d59b47&o=&hp=1" 
            alt="" 
            className="featuredImg"
        />
        <div className="featuredTitles">
        <h1>Badulla</h1>
        <h2>456 properties</h2>
        </div>
      </div>


    </div>
  )
}

export default Featured