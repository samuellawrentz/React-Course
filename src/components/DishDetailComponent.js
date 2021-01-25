import { Component } from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

export class DishDetail extends Component {
    renderDish(dish) {
        return (
            <Card>
                <CardImg src={dish.image} alt={dish.name} width="100%"></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    // Method that will render comment list from the comment array
    renderComments(comments) {
        if (comments.length)
            return (
                <ul className="list-unstyled">
                    {comments.map(comment => {
                        // Format date using the built in method - toLocaleString
                        const formattedDate = (new Date(comment.date)).toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
                        return (
                            <li key={comment.id}>
                                <div className="mt-3">
                                    {comment.comment}
                                </div>
                                <div className="mt-3">
                                    -- <span className="mr-1">{comment.author}</span>, <span>{formattedDate}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            );
        else
            return <div></div>
    }
    // Render the selected Dish Card
    render() {
        const selectedDish = this.props.selectedDish
        if (selectedDish)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(selectedDish.comments)}
                    </div>
                </div>
            );
        else
            return <div></div>
    }
}