import React from 'react'
import cart from './cart.css'
function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (

            // <tr key={product._id}>
            <div className="toper">
            <div className="topp">
                {/*<p className="uniname">University of Houston {" "} <img style={{maxWidth :'20px'}} className="symbolimg" src="https://i.ya-webdesign.com/images/uhcl-hawk-png-18.png"/> {" "} Clear Lake </p>*/}
                <h2 className="uniname">
                    University of Houston  {" "}
                    {" "}
                    Clear Lake
                </h2>
                <img className="circle-imgggg" alt="product"  src={renderCartImage(product.images)} />
                <img className="circle-img" alt="product"      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-2GNgmG_ZT_FeLoRxGapoqTDlvm9OuL45RWGJOS-iYeVzXjal&usqp=CAU"
                />

            </div>

            <div className="bottomm">
                <h2 className="info_name">{product.title} </h2>

                <p className="infoo"> {product.description}</p>
                <h2 className="infoo">Congratulations {product.title}</h2>
            </div>
            </div>
       // </tr>
        ))
    )


    return (
        <div>
            <table>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
