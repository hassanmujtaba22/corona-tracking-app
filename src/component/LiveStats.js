import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import axios from "axios"

export default function LiveStats() {
    const [latest, setLatest] = useState([])
    const date = new Date(parseInt(latest.updated))
    const lastUpdated = date.toString()
    useEffect(()=> {
        axios
        .get("https://corona.lmao.ninja/v2/all")
        .then(res => {
            setLatest(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    })
    return (
        <div>
<CardDeck className="text-center" style={{margin: "10px"}}>
<Card bg='warning' text="white">
    <Card.Body>
    <Card.Title>Total Cases</Card.Title>
    <Card.Text>{latest.cases}</Card.Text>
    </Card.Body>
    <Card.Footer>
    <small>Last updated {lastUpdated}</small>
    </Card.Footer>
</Card>

<Card bg='success' text="white">
<Card.Body>
    <Card.Title>Recovered</Card.Title>
    <Card.Text>{latest.recovered}</Card.Text>
    </Card.Body>
    <Card.Footer>
    <small>Last updated {lastUpdated}</small>
    </Card.Footer>
</Card>

<Card bg="danger" text="white">
<Card.Body>
    <Card.Title>Total Death</Card.Title>
    <Card.Text>{latest.deaths}</Card.Text>
    </Card.Body>
    <Card.Footer>
    <small>Last updated {lastUpdated}</small>
    </Card.Footer>
</Card>
</CardDeck>
</div>
    )
}