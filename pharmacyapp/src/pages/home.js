import * as React from 'react';
import { useState } from 'react';
import { Table, Dropdown } from 'react-bootstrap';

const Home = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div>
            <h3>Home</h3>
            Medicine Type: <Dropdown>
                <Dropdown.Toggle>
                    Dropdown
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item disabled>Schedule 1</Dropdown.Item>
                    <Dropdown.Item>Schedule 2</Dropdown.Item>
                    <Dropdown.Item text>Schedule 3</Dropdown.Item>
                    <Dropdown.Item >Schedule 4</Dropdown.Item>                    
                </Dropdown.Menu>
            </Dropdown>

            <br/>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Medicine Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Paracetamol</td>
                        <td>4</td>
                        <td>50</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Crocin</td>
                        <td>3</td>
                        <td>50</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Azithromycin</td>
                        <td>2</td>
                        <td>250</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Home;
