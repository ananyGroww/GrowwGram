import axios from 'axios';

// Action Creator
// Q: How to define types of functions `getNewPage` & the `async function` 3 lines below?
export let getNewPage = (itemsPerPage:number = 10) => {
    // return an action
    return async function (dispatch:Function, getState:object){
        const response = await sendNetworkRequest(itemsPerPage);
        // console.log(`render/action`, response, response instanceof Array);
        dispatch({
                type: 'GET_NEW_PAGE',
                payload:{
                    imagesObjList: response,
                }
        }); 
    }
};

export let loggedInProfile = (userName:string = 'aiony') => {
    return {
        type: 'LOGGED_IN_PROFILE',
        payload: {
            userName: userName,
        },
    };
};

// A real user obj from get request.
// user:
    // accepted_tos: true
    // bio: "My instagram: aiony .\r\nFilm and digital photographer.\r\nAmbassador Canon Kazakhstan.\r\nWorldwide!\r\n\r\nConnect: aionytoday@gmail.com"
    // first_name: "Aiony"
    // for_hire: false
    // id: "82ckjvxTQdk"
    // instagram_username: "aiony"
    // last_name: "Haust"
    // links: {self: "https://api.unsplash.com/users/aiony", html: "https://unsplash.com/@aiony", photos: "https://api.unsplash.com/users/aiony/photos", likes: "https://api.unsplash.com/users/aiony/likes", portfolio: "https://api.unsplash.com/users/aiony/portfolio", …}
    // location: "Kazakhstan/Astana"
    // name: "Aiony Haust"
    // portfolio_url: "https://www.instagram.com/aiony"
    // profile_image: {small: "https://images.unsplash.com/profile-1539616908003-…&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32", medium: "https://images.unsplash.com/profile-1539616908003-…&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64", large: "https://images.unsplash.com/profile-1539616908003-…m=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"}
    // social: {instagram_username: "aiony", portfolio_url: "https://www.instagram.com/aiony", twitter_username: null, paypal_email: null}
    // total_collections: 0
    // total_likes: 11
    // total_photos: 50
    // twitter_username: null
    // updated_at: "2021-08-05T06:26:46-04:00"
    // username: "aiony"
    // __proto__: Object

const sendNetworkRequest = async (itemsPerPage:number):Promise<any> => {
    // Q: How to change below any in `response:any` to particular type?
    // A: You don't, for now. Groww does it though.

    // Q: How do I add error handling? (Here, suppose net rqst fails. So this Promise should return `reject();`)
    let response:any = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: 'portrait', per_page: itemsPerPage },
        headers: {
                Authorization: 'Client-ID B0lyINmsrENvvv75E_HItGpAp7vHXschObEogo542tY'
            }
    });
    let imagesObj:any = response.data.results;
    console.log(`sendNetworkRequest/actionCreators `, imagesObj);
    let tempImgList:Array<ImgMetaData> = imagesObj.map( (imageObj:any) => {
        let image:ImgMetaData = {
            url: ``,
            caption: ``,
            likes: 0,
            id: ``,
            likedByUser: true,
            location: ``,
            user:{},
        };
        bind(image, imageObj);
        return image;
    } );
    return tempImgList;
};
const bind = (image:ImgMetaData, imagesObj:any) => {
    image.url = imagesObj.urls.thumb;
    image.caption = imagesObj.alt_description;
    image.likes = imagesObj.likes;
    image.id = imagesObj.id;
    image.likedByUser = imagesObj.liked_by_user;
    image.location = imagesObj.created_at;
    image.user = imagesObj.user;
};
type ImgMetaData = {
    url: string;
    caption: string;
    likes: number;
    id: string;
    likedByUser: boolean;
    location: string;
    user: any;
};