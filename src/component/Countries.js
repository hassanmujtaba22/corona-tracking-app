import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from 'react-bootstrap/Card'
import Columns from "react-columns";
import Form from 'react-bootstrap/Form'




function Countries() {
    const [result, setResult] = useState([])
    const [searchCountry, setSearchCountry] =  useState([])

    useEffect(()=> {
        axios
        .get("https://corona.lmao.ninja/v2/countries")
        .then(countries => {
            setResult(countries.data)
        })
        .catch(err => {
            console.log(err);
        })
    })

    var queries = [{
        columns: 2,
        query: 'min-width: 500px'
      }, {
        columns: 3,
        query: 'min-width: 1000px'
      }];

    const filterCountry = result.filter(item => {
        return searchCountry !== "" 
        ? item.country.includes(searchCountry) 
        : item
    })
    const countries = filterCountry.map((data, index) =>{
        return (
            <div>
            <Card key={index} bg="light" text="dark" className="text-center" style={{margin: "10px"}}>
            <Card.Img variant="top" src={data.countryInfo.flag} />
            <Card.Body>
            <Card.Title>{data.country}</Card.Title>
            <Card.Text>Cases: {data.cases}</Card.Text>
            <Card.Text>Deaths: {data.deaths}</Card.Text>
            <Card.Text>Recovered: {data.recovered}</Card.Text>
            <Card.Text>Today's Cases: {data.todayCases}</Card.Text>
            <Card.Text>Today's Deaths: {data.todayDeaths}</Card.Text>
            <Card.Text>Active: {data.active}</Card.Text>
            <Card.Text>Critical: {data.critical}</Card.Text>
            </Card.Body>
            </Card>
            </div>
        )        
    })
    return (
        <div>
        <Form.Group style={{margin: "10px"}}>
        <Form.Control size="lg" type="text" placeholder="Search Country" onChange={e => setSearchCountry(e.target.value)} />
        </Form.Group>
        <Columns queries={queries}>{countries}</Columns>
        </div>
    )
}

export default Countries
