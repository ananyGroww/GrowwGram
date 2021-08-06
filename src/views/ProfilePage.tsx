import React from 'react';

// import ProfilePageCard from '../ui/ProfilePageCard'
import axios from 'axios';

type Props = {
};

// ISSUE HERE IS WHEN I DO `GET` ON A `username` (in sendNetworkRequest), THE API RETURNS `{
//     "errors": [
//         "Couldn't find User"
//     ]
// }` EVEN THO I SENT A `username` THEY SENT ME BACK! (in sendNetworkRequestRandomImg)
class ProfilePage extends React.Component<Props>{

    constructor(props:any){
        super(props);
        let response:any= this.sendNetworkRequestRandomImg().then(this.sendNetworkRequest);
        console.log(`IGNORE: `, response);
        // promise().then(this.sendNetworkRequest);
        // sendNetworkRequest(username);
    }
    sendNetworkRequestRandomImg = async ():Promise<any> => {
        let response:any = await axios.get('https://api.unsplash.com/photos/random', {
            params: { username : 'chrisjoelcampbell', },
            headers: {
                    Authorization: 'Client-ID B0lyINmsrENvvv75E_HItGpAp7vHXschObEogo542tY'
                }
        });
        console.log(`sendNetworkRequestRandomImg/ProfilePage`,response);
        return response.data.user.username;
    }
    sendNetworkRequest = async (username:string):Promise<any> => {
        console.log(`sendNetworkRequest/ProfilePage: https://api.unsplash.com/users/:${username}`)
        let response:any = await axios.get(`https://api.unsplash.com/users/:${username}`, {
            params: { username : username, },
            headers: {
                    Authorization: 'Client-ID B0lyINmsrENvvv75E_HItGpAp7vHXschObEogo542tY'
                }
        });
        console.log(`sendNetworkRequest/ProfilePage`,response);
    }
    render(){
        return(
            <div>
                Basic Scaffolding: Profile Page
                {/* {this.props.user.name}, {this.props.user.total_likes}
                <ProfilePageCard user={this.props.user}/> */}
            </div>
        )
    };
}
export default ProfilePage;