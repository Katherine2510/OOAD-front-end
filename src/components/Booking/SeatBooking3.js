import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom"
import '../../css/booking.css'
import { Route, Router, Routes } from 'react-router-dom'
import ViewNameFilm from '../View/ViewNameFilm'

class SeatBooking3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectingSeats: []
        }
    }
    componentDidMount() {
        axios.get('').then(res => {
            // console.log(res.data)
            const resData = res.data;
            for(let i=0;i<resData.length;i++){
                if(resData[i].available === false){
                    document.getElementById(resData[i].seatNumber).setAttribute("disabled", true)
                }
            }
        })
    }
    choiceSeat = (seat) => {
        const newBookedSeats = [ ...this.state.selectingSeats, seat ];
        this.setState({
            selectingSeats: newBookedSeats
        })
    };
    SelectSeats = () => {
        const Selected = this.state.selectingSeats;
        if(Selected.length !== 0)
        {
            axios.post(`http://localhost:8080/bookSeat`, {"seats": Selected}).then(res => {
                this.props.history.push('/invoice')
            })
        }
        else {
            alert('Please Select Seats')
        }
    };

    render() {
        const seatsColumnsOfS1 = ['1', '2', '3', '4', '', '5',  '6', '7', '8'];
        const seatsRowsOfS1 = ['A', 'B','C', 'D', '', 'E', 'F', 'G', 'H'];
        const seatsGeneratorS1 = () => {
            return (
                <table id="seatsBlock">
                    <tbody>
                    <tr>
                        <td></td>
                        {seatsColumnsOfS1
            .map((column, index) => <td key={index}>{column}</td>)}
                    </tr>
                    {
                        seatsRowsOfS1.map((row, index) =>
                            row === ''
                                ?
                                <tr key={index} className="seatVGap"></tr>
                                :
                                <tr key={index}>
                                    <td>
                                        {row}
                                    </td>
                                    {seatsColumnsOfS1
                        .map((column, index) => {
                                        return (
                                            column === ''
                                                ?
                                                <td key={index} className="seatGap"></td>
                                                :
                                                <td key={index}>
                                                    <input onClick={() => this.choiceSeat(`${row}${column}`)} type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                                                </td>
                                        )
                                    })}
                                </tr>)
                    }
                    </tbody>
                </table>
            );
        };
        const seatsColumnsOfM1 = ['1', '2', '3', '4', '', '5',  '6', '7', '8', '9', '','10', '11'];
        const seatsRowsOfM1 = ['A', 'B','C', 'D', '', 'E', 'F', 'G', 'H','I', '', 'K','L'];
        const seatsGeneratorM1 = () => {
            return (
                <table id="seatsBlock">
                    <tbody>
                    <tr>
                        <td></td>
                        {seatsColumnsOfM1
            .map((column, index) => <td key={index}>{column}</td>)}
                    </tr>
                    {
                        seatsRowsOfM1.map((row, index) =>
                            row === ''
                                ?
                                <tr key={index} className="seatVGap"></tr>
                                :
                                <tr key={index}>
                                    <td>
                                        {row}
                                    </td>
                                    {seatsColumnsOfM1
                        .map((column, index) => {
                                        return (
                                            column === ''
                                                ?
                                                <td key={index} className="seatGap"></td>
                                                :
                                                <td key={index}>
                                                    <input onClick={() => this.choiceSeat(`${row}${column}`)} type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                                                </td>
                                        )
                                    })}
                                </tr>)
                    }
                    </tbody>
                </table>
            );
        };
        

        const seatsColumnsOfL1 = ['1', '2', '3', '4', '', '5',  '6', '7', '8','', '9', '10', '11', '12', '13','14'];
        const seatsRowsOfL1 = ['A', 'B','C', 'D', 'E', 'F', 'G', '','H','I', 'K','L','M','N','O'];
        const seatsGeneratorL1 = () => {
            return (
                <table id="seatsBlock">
                    <tbody>
                    <tr>
                        <td></td>
                        {seatsColumnsOfL1
            .map((column, index) => <td key={index}>{column}</td>)}
                    </tr>
                    {
                        seatsRowsOfL1.map((row, index) =>
                            row === ''
                                ?
                                <tr key={index} className="seatVGap"></tr>
                                :
                                <tr key={index}>
                                    <td>
                                        {row}
                                    </td>
                                    {seatsColumnsOfL1
                        .map((column, index) => {
                                        return (
                                            column === ''
                                                ?
                                                <td key={index} className="seatGap"></td>
                                                :
                                                <td key={index}>
                                                    <input onClick={() => this.choiceSeat(`${row}${column}`)} type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                                                </td>
                                        )
                                    })}
                                </tr>)
                    }
                    </tbody>
                </table>
            );
        };
        return (
            <div>
                <div >
                    <h1 style={{ color: "black" }}>Lựa chọn chỗ ngồi</h1>
                    <h4></h4>
                    <div className='container'>
                    <div className="containerbooking">
                        <div className="w3ls-reg" style={{paddingTop: '0px'}}>
                            <ul className="seat_w3ls">
                                <li className="smallBox greenBox">Ghế đang chọn</li>

                                <li className="smallBox redBox">Ghế đã đặt trước</li>

                                <li className="smallBox emptyBox">Các ghế trống</li>
                            </ul>
                            <div className="seatStructure txt-center" style={{overflowX:'auto'}} >
                                {seatsGeneratorL1()}
                                <div className="screen">
                                    <h2 className="wthree">Đây là màn hình</h2>
                                </div>
                                <button onClick={() => { this.SelectSeats()}}>Confirm Selection</button>
                            </div>
                        </div>
                    </div>
                    <div className="containerpayment" >
                        <div className='bill'><p>BILL</p></div>
                    </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default SeatBooking3;