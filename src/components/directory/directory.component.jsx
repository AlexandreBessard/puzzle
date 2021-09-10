import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
//Images:
import image1 from '../../images/image_1.jpg';


class Directory extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'PUZZLE MODELS',
                image: image1,
                size: 'small',
                id: 1,
                linkUrl: '/shop' 
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