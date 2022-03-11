import React from 'react';
import Master from './Layout/Master';


function Cart() {
    return (
        <Master>
            <div className="container">
                <h2 className="mt-5">All Carts</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Total</td>
                            <td>Option</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>T-Shirt</td>
                            <td>2000</td>
                            <td>2</td>
                            <td>
                                <button className='btn btn-info btn-sm'>-</button>
                                <button className='btn btn-info btn-sm ml-3'>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>T-Shirt</td>
                            <td>2000</td>
                            <td>2</td>
                            <td>
                                <button className='btn btn-info btn-sm'>-</button>
                                <button className='btn btn-info btn-sm ml-3'>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div className="d-flex">
                                    <h1 className='align-self-center'>Total : </h1>
                                    <button className='btn btn-outline-primary'>40000</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Master>
    )
}


export default Cart;