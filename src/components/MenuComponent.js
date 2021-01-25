import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


export class Menu extends Component {
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 m-1 col-md-5">
                    <Card onClick={()=>{this.props.onClick(dish.id)}}>
                        <CardImg src={dish.image} alt={dish.name} width="100%"></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
                <div className="row">
                    {menu}
                </div>
        )
    }
}