import image2 from '../../images/image_2_reduced.jpg';
import image3 from '../../images/image_3_reduced.jpg';
import image4 from '../../images/image_4_reduced.jpg';


const SHOP_DATA = [
    {
        id: 1,
        title: 'Puzzles',
        routeName: 'puzzle-detail',
        items: [
            {
                id: 1,
                name: 'Puzzle Model 1',
                imageUrl: image2,
                price: 30
            },
            {
                id: 2,
                name: 'Puzzle Model 2',
                imageUrl: image3,
                price: 25
            },
            {
                id: 3,
                name: 'Puzzle Model 3',
                imageUrl: image4,
                price: 35
            }
        ]
    }
];

export default SHOP_DATA;