import React, {useEffect, useState} from "react";
import cardcs from './cardcs.css'

function Cards(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }
    return(
        <div className="toper">
            <div className="topp">
                <p className="uniname">University of Houston {" "} <img style={{maxWidth :'20px'}} className="symbolimg" src="https://i.ya-webdesign.com/images/uhcl-hawk-png-18.png"/>Clear Lake </p>

                <img className="circle-imgggg" src="https://avatars3.githubusercontent.com/u/26461331?s=460&u=b65c8c309905b0505dd509c42f983113869b5efa&v=4" alt="avatar_img" />
            </div>

            <div className="bottomm">
                <h2 className="info_name"> </h2>

                <p className="infoo">ion of a stand-alone university in Clear Lake to offer upper-division and graduate-level programs adjacent to CLGC.[8] Four years later in 1971, the 62nd Texas Legislature passed House Bill 199 authorizing the creation of the University of Houston at Clear Lake City as a separate and distinct degree-granting institution.[9][10]</p>
                <p className="infoo">In 1968 the Coordinating Board of Texas College and University System authorized</p>
            </div>

        </div>
    )
}

export default Cards