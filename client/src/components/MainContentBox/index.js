import React from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

const MainBox = ({score, qrCode, materials, manufacturing, use, transport, endOfLife}) =>{
    return (
        <Container>
            <Column>
                <div>
                    <h1>{score}</h1>
                    <p>kg CO2E</p>
                </div>
                <QRCode value={qrCode}/>
            </Column>
            <hr></hr>
            <Column>
                <InnerBox 
                    materials = {materials}
                    manufacturing = {manufacturing}
                    use = {use}
                    transport = {transport}
                    endOfLife = {endOfLife}
                />
            </Column>
        </Container>
    );
};

export default MainBox;

const InnerBox = ({materials, manufacturing, use, transport, endOfLife}) =>{
    return(
        <InnerContainer>
            <InnerColumn>
                <Row><h2>Materials</h2></Row>
                <Row><h2>Manufacturing</h2></Row>
                <Row><h2>Use</h2></Row>
                <Row><h2>Transport</h2></Row>
                <Row><h2>End of Life</h2></Row>
            </InnerColumn>
            <InnerColumn>
                <Row><h2>{materials}</h2><p>kg CO2e</p></Row>
                <Row><h2>{manufacturing}</h2><p>kg CO2e</p></Row>
                <Row><h2>{use}</h2><p>kg CO2e</p></Row>
                <Row><h2>{transport}</h2><p>kg CO2e</p></Row>
                <Row><h2>{endOfLife}</h2><p>kg CO2e</p></Row>
            </InnerColumn>
        </InnerContainer>
    );
};

const InnerContainer = styled.main`
    display: flex;
    flex-direction: row;
`;

const Container = styled.main`
    border-radius: 28px;
    border: 3px solid black;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: row;
    padding: 0.1rem 0px 0.1rem 0.5rem;
    background-color: white;
    width: fit-contents;

    h1{
        margin: 1.5rem 0 0rem 0;
        font-size: 6vw;
        font-weight: 500;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    p{
        text-align: center;
        font-size: 1vw;
        margin:0;
    }

    hr.vertical {
        height:100%; 
        width:0;
        border:1px solid black;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: 0rem !important;
        margin-inline-end: 0rem;
    }

    svg {
        width: 50%; 
        height: auto;
    }

    @media only screen 
    and (max-width : 768px) {
        flex-direction: column;
        padding: 0.2rem 0.6rem 1.2rem; 0.6rem;
        width: auto;

        hr {
            width:95%;
            border:1px solid lightgray;
        }

        h1{
            margin: 0.3rem 0 0rem 0;
            font-size: 5rem;
        }

        p{
            font-size: 0.9rem;
        }

    }
`;

const Column = styled.div`
    padding: 0.2rem 1rem 0.2rem 0.5rem;
    margin: 0rem 0 0 0;

    p{
        margin-top: 0rem;
        margin-bottom: 1rem;
        font-size: 1vw;
    }

    canvas{
        margin: 1rem 0 auto auto;
        height: 7vw !important;
        width: 7vw !important; 
    }

    @media only screen 
    and (max-width : 768px) {
        padding: 0.3rem 0.6rem 0rem 0.6rem;
        display: flex;
        flex-direction: row;

        p{
            margin-top: 0rem;
            margin-bottom: 0.3rem;
            font-size: 0.9rem;
        }
        canvas{
            margin: auto 0 auto auto;
            height: 80px !important;
            width: 80px !important; 
        }
    }

`;

const InnerColumn = styled.div`
    padding: 10px 10px 10px 10px;
    margin: auto 0 auto 0;

    @media only screen 
    and (max-width : 768px) {
        padding: 0px 10px 0px 10px;
    }

    @media only screen 
    and (max-width : 300px) {
        padding: 0px 0px 0px 0px;
    }

`;

const Row = styled.div`
    display: flex;
    flex-direction: row;

    p{
        margin: auto 0 auto 0;
        padding-left: 0px;
        font-size: 0.2rem;
        @media only screen 
        and (max-width : 768px) {
            margin: 1rem 0 auto 0;
        }
        @media only screen 
        and (max-width : 340px) {
            margin: 0.5rem 0 auto 0;
            font-size: 0.1rem;
        }
    }

    h2{
        margin: 0.4rem;
        font-size: 2vw;
        @media only screen 
        and (max-width : 768px) {
            font-size: 1.4rem;
        }

        @media only screen 
        and (max-width : 340px) {
            font-size: 1rem;
        }
    }

`;