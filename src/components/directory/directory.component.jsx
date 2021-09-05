import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
//Images:
import image1 from '../../images/image_1.jpg';
import image2 from '../../images/image_2.jpg';
import image3 from '../../images/image_3.jpg';


class Directory extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'PUZZLE MODEL 1',
                image: image1,
                size: 'small',
                id: 1,
                linkUrl: 'puzzle-detail' 
            }, 
            {
                title: 'PUZZLE MODEL 2',
                image: image2,
                size: 'small',
                id: 2,
                linkUrl: '' 
            },
            {
                title: 'PUZZLE MODEL 3',
                image: image3,
                size: 'large',
                id: 3,
                linkUrl: '' 
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;