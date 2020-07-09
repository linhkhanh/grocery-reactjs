class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            person: "Dad",
            products: dad,
            item: '',
            brand: '',
            units: '',
            quantity: 0,
            image: ''
        }
    }
    // change data
    toggleData = (event) => {
        const data = event.target.id;
        if (data === "dad") {
            this.setState({ products: dad, person: "Dad" })
        } else if (data === "mom") {
            this.setState({ products: mom, person: "Mom" })
        } else if (data === "son") {
            this.setState({ products: son, person: "Son" })
        } else {
            this.setState({ products: daughter, person: "Daughter" })
        }
    }
    // handle change
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    // handle submit
    handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            image: this.state.image
        }
        this.setState({
            products: [newItem, ...this.state.products],
            item: '',
            brand: '',
            units: '',
            quantity: 0,
            image: ''
        })
    }

    // toggle purchase
    togglePurchased = (event) => {
        event.preventDefault();
        const index = event.target.id;
        const products = this.state.products;
        products.splice(index, 1);
        this.setState({
            products: products
        });
    }

    // sort item
    sort = (event) => {
        const sortBy = event.target.id;
        const products = this.state.products;
        if (sortBy === "byName") {
            products.sort((item1, item2) => {
                return item1.item.localeCompare(item2.item)
            });
        } else {
            products.sort((item1, item2) => {
                return item1.quantity - item2.quantity
            });
        }
        this.setState({
            products: products
        })
    }

    // toggle class later
    togglePayLater = (event) => {
        const td = event.currentTarget.parentNode;
        const tr = td.parentNode;
        tr.classList.add('grey');
        console.log(tr);
    }
    //   render
    render() {
        return (
            <div>
                <h1><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-basket2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.111 7.186A.5.5 0 0 1 1.5 7h13a.5.5 0 0 1 .489.605l-1.5 7A.5.5 0 0 1 13 15H3a.5.5 0 0 1-.489-.395l-1.5-7a.5.5 0 0 1 .1-.42zM2.118 8l1.286 6h9.192l1.286-6H2.118z" />
                    <path fill-rule="evenodd" d="M11.314 1.036a.5.5 0 0 1 .65.278l2 5a.5.5 0 1 1-.928.372l-2-5a.5.5 0 0 1 .278-.65zm-6.628 0a.5.5 0 0 0-.65.278l-2 5a.5.5 0 1 0 .928.372l2-5a.5.5 0 0 0-.278-.65z" />
                    <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zM0 6.5A.5.5 0 0 1 .5 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1z" />
                </svg> Grocery</h1>
                <div className="row">

                    <div className="col col-lg-2 side-bar">

                        {/* Side Bar */}

                        <button onClick={this.toggleData} id="dad" className="btn btn-light btn-block">Dad</button>
                        <button onClick={this.toggleData} id="mom" className="btn btn-light btn-block">Mom</button>
                        <button onClick={this.toggleData} id="son" className="btn btn-light btn-block">Son</button>
                        <button onClick={this.toggleData} id="daughter" className="btn btn-light btn-block">Daughter</button>
                    </div>
                    <div className="col">
                        <h2><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-badge" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v11.755S4 12 8 12s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                            <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
                        </svg>{this.state.person}</h2>
                        <div className="row col">
                            <div className="col-4 shadow p-3 mb-5 bg-white rounded">
                                <form onSubmit={this.handleSubmit}>
                                    <h4>Add more items</h4>
                                    <div className="form-group">
                                        <label htmlFor='item'>Item</label>
                                        <input type='text' value={this.state.item} onChange={this.handleChange} id='item' className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor='brand'>Brand</label>
                                        <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor='units'>Units</label>
                                        <input type='text' value={this.state.units} onChange={this.handleChange} id='units' className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor='quantity'>Quantity</label>
                                        <input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity' className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor='image'>Image</label>
                                        <input type='text' value={this.state.image} onChange={this.handleChange} id='image' className="form-control" />
                                    </div>
                                    <button type='submit' className="btn btn-info btn-lg col"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                                    </svg></button>
                                </form>
                            </div>

                            <div className="col-8 shadow p-3 mb-5 bg-white rounded">
                                {/* Sort */}
                                <h4>List of items</h4>
                                <ul>
                                    <li onClick={this.sort} id="byName" className="btn btn-outline-primary">Sort by Name</li>
                                    <li onClick={this.sort} id="byQuantity" className="btn btn-outline-primary">Sort by Quantity</li>
                                </ul>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Item</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.products.map((product, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{product.item}</td>
                                                    <td><img src={product.image}/></td>
                                                    <td>{product.units}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>
                                                        <button onClick={this.togglePurchased} id={index} className="btn btn-outline-warning"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg></button>
                                                        <button onClick={this.togglePayLater} className="btn btn-outline-secondary">Later</button>

                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);