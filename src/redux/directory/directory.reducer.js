import image1 from '../../images/image_1.jpg';

const INITIAL_STATE = {
    sections: [{
        title: 'PUZZLE MODELS',
        image: image1,
        size: 'small',
        id: 1,
        linkUrl: 'shop' 
    }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;