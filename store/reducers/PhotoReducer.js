import { ALBUMS, PHOTOS, EDITTITLE } from '../actions/PhotoActions';

const initialState = {
    albumsData: [],
    photosData: []
};

const AlbumsServicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALBUMS:
            return { ...state, albumsData: action.albumsData, };
        case PHOTOS:
            return { ...state, photosData: action.photosData, };
        case EDITTITLE:
            let arr = state.photosData.filter((item) => item.id == action.data.id ? item.title = action.data.title : item.title)

            return { ...state, photosData: arr, };
        default:
            return state;
    }
};

export default AlbumsServicesReducer;