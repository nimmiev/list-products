import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <h1>Products</h1>
        <div className='row'>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height={180}/>
              <Card.Body>
                <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title>
                <Card.Subtitle>$109.95</Card.Subtitle>
                <Card.Text>
                Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" height={180}/>
              <Card.Body>
                <Card.Title>Mens Casual Premium Slim Fit T-Shirts</Card.Title>
                <Card.Subtitle>$22.3</Card.Subtitle>
                <Card.Text>
                  Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" height={180}/>
              <Card.Body>
                <Card.Title>Mens Cotton Jacket</Card.Title>
                <Card.Subtitle>$55.99</Card.Subtitle>
                <Card.Text>
                  great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, mountain/rock climbing, cycling, traveling or other outdoors.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" height={180} />
              <Card.Body>
                <Card.Title>Mens Casual Slim Fit</Card.Title>
                <Card.Subtitle>$15.99</Card.Subtitle>
                <Card.Text>
                  The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed ..
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" height={180} />
              <Card.Body>
                <Card.Title>John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet</Card.Title>
                <Card.Subtitle>$695</Card.Subtitle>
                <Card.Text>
                  From our Legends Collection, the Naga was inspired by the mythical water ..
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" height={180} />
              <Card.Body>
                <Card.Title>Solid Gold Petite Micropave</Card.Title>
                <Card.Subtitle>$168</Card.Subtitle>
                <Card.Text>
                  Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" height={180}/>
              <Card.Body>
                <Card.Title>White Gold Plated Princess</Card.Title>
                <Card.Subtitle>$9.99</Card.Subtitle>
                <Card.Text>
                Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary..
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" height={180} />
              <Card.Body>
                <Card.Title>Pierced Owl Rose Gold Plated Stainless Steel Double</Card.Title>
                <Card.Subtitle>$10.99</Card.Subtitle>
                <Card.Text>
                  Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" height={180} />
              <Card.Body>
                <Card.Title>WD 2TB Elements Portable External Hard Drive - USB 3.0</Card.Title>
                <Card.Subtitle>$64</Card.Subtitle>
                <Card.Text>
                  USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility..
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-3 py-3'>
            <Card>
              <Card.Img variant="top p-4" src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" height={180} />
              <Card.Body>
                <Card.Title>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</Card.Title>
                <Card.Subtitle>$109</Card.Subtitle>
                <Card.Text>
                  Easy upgrade for faster boot up, shutdown, application load and response
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        
      </Container>
    </>
  )
}

export default App
