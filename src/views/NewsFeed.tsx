import React from 'react';

import axios from 'axios';

// import SampleImg1 from '../common/Card/sample1.png';
import Card from '../ui/Card';

interface ImgMetaData {
    url: string;
    caption: string;
    likes: number;
    id: string;
    likedByUser: boolean;
    location: string;
    user: any;
}
interface State {
    imagesList: Array<ImgMetaData>;
};
class NewsFeed extends React.Component{
    state: State = {
        imagesList: [{
            url: ``,
            caption: ``,
            likes: 0,
            id: ``,
            likedByUser: false,
            location: ``,
            user: {},
        }],
    }
    constructor(props:any){
        super(props);
        // console.log(`constructor/NewsFeedfiller. ignore`);
        this.sendNetworkRequest();
    }
    bind = (image:ImgMetaData, imagesObj:any) => {
        image.url = imagesObj.urls.thumb;
        image.caption = imagesObj.alt_description;
        image.likes = imagesObj.likes;
        image.id = imagesObj.id;
        image.likedByUser = imagesObj.likedByUser;
        image.location = imagesObj.created_at;
        image.user = imagesObj.user;
    }
    // Move this function:sendNetworkRequest to some other NetConfig.tsx file (See Lecture 100)
    sendNetworkRequest = async ():Promise<any> => {
        // How to change below any to particular type
        let response:any = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: 'portrait', per_page: 20 },
            headers: {
                    Authorization: 'Client-ID B0lyINmsrENvvv75E_HItGpAp7vHXschObEogo542tY'
                }
        });
        let imagesObj:any = response.data.results;
        console.log(`sendNetworkRequest/NewsFeed `, imagesObj);
        let tempImgList:Array<JSX.Element> = imagesObj.map( (imageObj:any) => {
            let image:ImgMetaData = {
                url: ``,
                caption: ``,
                likes: 0,
                id: ``,
                likedByUser: true,
                location: ``,
                user:{},
            };
            this.bind(image, imageObj);
            return image;
        } );
        this.setState({imagesList: tempImgList});
    }
    render(){
        let cardsList:Array<JSX.Element> = this.state.imagesList.map( (image:ImgMetaData) => <Card key={image.id} imgMetaData={image}/> );
        return(
            <div>
                {cardsList}
            </div>

        )
    };
}
export default NewsFeed;