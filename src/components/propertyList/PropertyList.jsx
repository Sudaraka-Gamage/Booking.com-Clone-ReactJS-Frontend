import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">

        <div className="pListItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/344223041.jpg?k=ddb694a31297ff1d47d4dbe1cb3306cd7c65ac7d797c8d809eda0f4fd49e45ae&o=&hp=1" 
                alt="" 
                className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/190659197.jpg?k=3e2464fa3ef0f6a3b0d2d50429273edb3acb7ce6a89c35c28d28b388da73d911&o=&hp=1"
                alt="" 
                className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>155 resorts</h2>
            </div>
        </div>

        <div className="pListItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/49176183.jpg?k=658a53c14581c6e67a8bf92b1d61c393acebc4ab8277ac9035a96087109e4771&o=&hp=1" 
                alt="" 
                className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>201 villas</h2>
            </div>
        </div>

        <div className="pListItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/304938137.jpg?k=ad1910049a0611289c4c442a28565547e73aa98b810ea91cebd684bd2f66e744&o=&hp=1" 
                alt="" 
                className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>433 cabins</h2>
            </div>
        </div>

        <div className="pListItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/60773215.jpg?k=ac9d97b793a9ee5493024bb8206cff6188dddc1f547b9d10a248c490e6444990&o=&hp=1"
                alt="" 
                className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>89 apartments</h2>
            </div>
        </div>

    </div>
  )
}

export default PropertyList