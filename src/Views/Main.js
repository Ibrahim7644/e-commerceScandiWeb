
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Main extends Component {

    women() {
        console.log("hello")

    }


    render() {
        return (
            <div className='row justify-content-center'>
                <div className='col-3'>



                    <button onClick={this.women}>WOMEN</button>
                    <button>MEN</button>
                    <button>KIDS</button>
                </div>
                <div className='col-5'>



                    <button>WOMEN</button>
                    <button>MEN</button>
                    <button>KIDS</button>
                </div>


                <div>

                    hello
                </div>
            </div>
        )
    }
}
