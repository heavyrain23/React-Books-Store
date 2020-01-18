import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'

const BookCard = (book) => {
    const {title, author, price, image, addToCart} = book;
    return (
    <Card>
        <Image src={image} />
        <Card.Content>
            <Card.Header>
                {title}
            </Card.Header>
            <Card.Meta>
                <span className='date'>{author}</span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='euro' />
                {price}
            </a>
        </Card.Content>
        <Button onClick = {addToCart.bind(this, book )}> Add to Cart </Button>
    </Card>
    );
};

export default BookCard;