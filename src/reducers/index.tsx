import { combineReducers } from 'redux';

export const imagesMetaDataReducer = (imagesMetaData:Array<ImgMetaData>=[], action:action) => {
    switch (action.type){
        // Had to remove this one below coz: When coming from `/profile` back to `/`, the old data gets appended with the same new data, thus duplicates occur.
        // case 'GET_NEW_PAGE': return [...imagesMetaData, ...action.payload.imagesObjList];
        case 'GET_NEW_PAGE': return [...action.payload.imagesObjList];
    }
    return imagesMetaData;
};
export const currentUserReducer = (username:string = 'aiony', action:action) => {
    if( action.type === 'LOGGED_IN_PROFILE' ){
        return action.payload.userName;
    }
    return username;
};
export default combineReducers({
    imagesMetaData: imagesMetaDataReducer,
    loggedInProfile: currentUserReducer,
});
type GET_NEW_PAGE = {
    type: 'GET_NEW_PAGE';
    payload:{
        imagesObjList: Array<ImgMetaData>,
    };
};
type LOGGED_IN_PROFILE = {
    type: 'LOGGED_IN_PROFILE';
    payload: {
        userName: string,
    };
};
type action = GET_NEW_PAGE | LOGGED_IN_PROFILE;
type ImgMetaData = {
    url: string;
    caption: string;
    likes: number;
    id: string;
    likedByUser: boolean;
    location: string;
    user: any;
};