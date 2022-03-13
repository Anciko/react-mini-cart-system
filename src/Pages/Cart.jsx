import React from 'react';
import Master from './Layout/Master';


function Cart(props) {
    let total = 0;
    let dTotal = 0;
    props.cart.forEach(d => {
        dTotal = d.price * d.qty;
        total = dTotal + total;
    } )
    console.log(total);
    const renderAdd = (product) => {     
        props.setCart((prevState) =>
            prevState.map((d) => {
                if(d.title === product.title) {
                    let updateQty = d.qty + 1;
                    return {...d, qty :updateQty};
                }
                return d;
            })
        )
    }
    let renderReduce = (product) => {
        props.setCart((prevState) => 
            prevState.map((d) => {
                if(d.title === product.title) {
                    let updateQty = d.qty - 1;
                    return {...d, qty : updateQty};
                }
                return d;
            })
        )
    }

    return (
        <Master {...props}>
            <div className="container">
                <h2 className="mt-5">All Carts</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Total Qty</td>
                            <td>Total Price</td>
                            <td>Option</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.cart.map((d, ind) => {
                                return(
                                    <tr key={ind}>
                                        <td>{++ind}</td>
                                        <td>{d.title}</td>
                                        <td>{ d.price }</td>
                                        <td>{ d.qty }</td>
                                        <td>{ d.price*d.qty }</td>
                                        <td>
                                            <button className='btn btn-warning btn-sm' 
                                            onClick={() => renderReduce(d)}>-</button>
                                            <button className='btn btn-info btn-sm ml-3' 
                                            onClick={() => renderAdd(d)}>+</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr className='bg-success'>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={6} className="text-white">
                                Total  : {total} KS
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Master>
    )
}


export default Cart;