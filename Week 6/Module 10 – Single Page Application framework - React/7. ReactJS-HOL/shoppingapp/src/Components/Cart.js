import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <table border="1" style={{ margin: 'auto',padding:'8px', textAlign: 'center', color: 'green'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.item.map((item) => {
                        return (
                            <tr>
                                <td>{item.itemname}</td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default Cart;
