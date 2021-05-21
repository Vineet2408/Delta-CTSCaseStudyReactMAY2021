import React, { Fragment } from 'react'
import Header from './Header';
import Footer from './Footer';
const Main = (props) => {
    return (
       <Fragment>
            <Header></Header>
            <div>
                {props.children}
            </div>
            <Footer></Footer>
        </Fragment>
    )
}

export default Main
