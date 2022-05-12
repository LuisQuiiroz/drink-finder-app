import React, { useState } from 'react'
import { Col, Form, Row, Button, Alert } from 'react-bootstrap'
import { useCategories } from '../hooks/useCategories'
import { useDrinks } from '../hooks/useDrinks';

const FormDrink = () => {

    const [search, setSearch] = useState({
        cocktail: '',
        category: ''
    });

    const [alert, setAlert] = useState('');

    const { categories } = useCategories();
    const { getDrinks } = useDrinks();



    const handelChangeData = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(search).includes('')) {
            setAlert('All fields are required')
        }
        setAlert('');
        getDrinks(search)

    }

    return (
        <Form
            autoComplete='off'
            onSubmit={handleSubmit}>
            {alert &&
                <Alert
                    className="text-center"
                    variant="danger"
                >
                    {alert}
                </Alert>}
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="cocktail">Cocktail</Form.Label>
                        <Form.Control
                            id="cocktail"
                            name="cocktail"
                            type="text"
                            placeholder="Search for a cocktail..."
                            value={search.cocktail}
                            onChange={handelChangeData}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="category">Cocktail category</Form.Label>
                        <Form.Select
                            id="category"
                            name="category"
                            className="text-center"
                            value={search.category}
                            onChange={handelChangeData}
                        >
                            <option value="" >- Select category -</option>
                            {categories.map(category => (
                                <option
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4} className="d-flex align-items-end mb-3">
                    <Button
                        type="submit"
                        variant="danger"
                        className="text-uppercase w-100">
                        Search cocktail
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default FormDrink