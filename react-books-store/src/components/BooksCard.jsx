import react from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const BooksCard = ({ title, author, price, image }) => (

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
    </Card>

);

export default BooksCard;