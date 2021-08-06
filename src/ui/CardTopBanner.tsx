import React from 'react';

import LocationOfPoster from '../common/Card/LocationOfPoster';
import NameOfPoster from '../common/Card/NameOfPoster';

interface Props {
    userData:any;
};
interface State {
};
class CardTopBanner extends React.Component<Props, State>{
    render(){
        return(
            <div>
                {/* <Link to='/profile' userData={this.props.userData}>
                    <NameOfPoster growwId={this.props.userData.instagram_username}/>
                </Link> */}
                <NameOfPoster growwId={this.props.userData.instagram_username}/>
                <LocationOfPoster location={this.props.userData.location}/>
            </div>
        );
    }
}
export default CardTopBanner;