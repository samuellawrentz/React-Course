import { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

export class Menu extends Component {
    state = {
        selectedDish: null
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg src={dish.image} alt={dish.name} width="100%"></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return <div></div>
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 m-1 col-md-5">
                    <Card onClick={() => { this.onDishSelect(dish) }}>
                        <CardImg src={dish.image} alt={dish.name} width="100%"></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        )
    }
}