import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import Master from "./Layout/Master";

function Home() {

    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://product.mmcoder.xyz/").then((res) => {
            setProducts(res.data);
            setLoader(false);
        })
    }, []);

    return (
        <Master>
            <div className="container mt-5">
                {loader && <Loader />}

                {
                    !loader

                    &&

                    <div className="row">
                        {
                            products.map((product, ind) => {
                                return(
                                    <div className="col-md-3" key={ind}>
                                        <div class="card">
                                            <img src={product.image} class="card-img-top" alt="Fissure in Sandstone" />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>

                                                <div className="d-flex">
                                                    <button className="btn btn-outline-primary btn-sm">
                                                        { product.price }KS
                                                    </button>
                                                    <button className="btn btn-primary btn-sm">
                                                        <i className="fas fa-cart-arrow-down"></i>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                       
                    </div>

                }

            </div>

        </Master>
    )
}
export default Home;