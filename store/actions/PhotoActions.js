export const ALBUMS = 'ALBUMS';
export const PHOTOS = 'PHOTOS';
export const EDITTITLE = 'EDITTITLE';

//Albums
export const albumsServicesAction = () => {
    return async (dispatch) => {
        try {
            const fetchResp = await fetch('https://jsonplaceholder.typicode.com/albums',
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
            const resp = await fetchResp.json();
            dispatch({ type: ALBUMS, albumsData: resp });
        } catch (error) {
            console.log(error);
        }
    }
};

//Photos
export const photosServicesAction = (id) => {
    return async (dispatch) => {
        try {
            const fetchResp = await fetch(`https://jsonplaceholder.typicode.com/albums/` + id +`/photos`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
            const resp = await fetchResp.json();
            dispatch({ type: PHOTOS, photosData: resp });
        } catch (error) {
            console.log(error);
        }
    }
};


//Photos
export const editAction = (data) => {
    return ({
        type: EDITTITLE, data: data
    })
}
