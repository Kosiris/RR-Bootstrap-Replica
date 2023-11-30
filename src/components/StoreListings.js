import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function StoreListings() {
    return(
        <div>
            <h2>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/15/2018/01/Aldi-logo.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                        <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://shelbyreport.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/11/sprouts-logo.jpg" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://1000logos.net/wp-content/uploads/2021/03/Kroger-logo.jpg" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}