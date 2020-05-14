import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

const superheroes = require('superheroes');

function ProductInfo(props) {

    const name = superheroes.random();

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Your Friend Give you this">
                <Descriptions.Item label="Likes"> {Product.price}❤️</Descriptions.Item>
                <Descriptions.Item label="SuperHero"> {Product.title}, you are a <h3>{name}!! </h3> congratulations on your Graduation.
                </Descriptions.Item>
                <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Graduation Message"> {Product.description}</Descriptions.Item>
            </Descriptions>



            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Get Your Card
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
