import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'PUZZLE MODEL 1',
                image: '../../public/images/menu-item/image_1.jpg',
                id: 1
            }, 
            {
                title: 'PUZZLE MODEL 2',
                image: '../../public/images/menu-item/image_1.jpg',
                id: 2
            },
            {
                title: 'PUZZLE MODEL 3',
                image: '../../public/images/menu-item/image_1.jpg',
                id: 3
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, image, id}) => (
                        <MenuItem key={id} title={title} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;