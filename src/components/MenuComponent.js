import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => { onClick(dish.id) }}>
            <CardImg src={dish.image} alt={dish.name} width="100%"></CardImg>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 m-1 col-md-5">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="row">
            {menu}
        </div>
    )
}

export default Menu;