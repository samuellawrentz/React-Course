import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';


    function RenderDish({dish}) {
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
    function RenderComments({comments}) {
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
    const DishDetail = (props) => {
        const selectedDish = props.selectedDish
        if (selectedDish)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={selectedDish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments= {selectedDish.comments}/>
                    </div>
                </div>
            );
        else
            return <div></div>
    }

    export default DishDetail;