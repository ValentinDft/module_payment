import React from 'react'
import { Row, Col } from 'antd';
import bgCard from "../img/bg.jpg"
import chipCard from "../img/chip.png";
import visa from "../img/visa.png";
import masterCard from "../img/mastercard.png";

export default function Card() {
    return (
        <Row style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Col style={{ backgroundImage: `url(${bgCard})`, backgroundPosition: "left", width: "380px", height: "200px", borderRadius: "10px" }}>
                
                
                <Row style={{display: "flex", justifyContent: "space-between"}}>
                    <img src={chipCard} style={{width: "70px", height: "70px"}}/>
                    <img src={visa} style={{width: "60px", height: "60px", padding: "10px"}}/>
                </Row>
                <Row style={{display: "flex", justifyContent: "space-around", alignItems: "center",color: "white", width: "100%", height: "50px", fontSize: "25px"}}>
                    <span>####</span>
                    <span>####</span>
                    <span>####</span>
                    <span>####</span>
                </Row>
                <Row style={{display: "flex", justifyContent: "space-between", marginTop: "18px"}}>
                    <Col style={{marginLeft: "30px"}}>
                        <h1 style={{color: "white", fontSize: "11px", opacity: "0.8", fontWeight: "900"}}> Card Holder </h1>
                        <span style={{color: "white", fontWeight: "900"}}>John Doe</span>
                    </Col>
                    <Col style={{marginRight: "30px"}}>
                        <h1 style={{color: "white", fontSize: "11px", opacity: "0.8", fontWeight: "900"}}> Expires </h1>
                        <span style={{color: "white", fontWeight: "900"}}>MM/YY</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
