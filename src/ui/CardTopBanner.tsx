import React from 'react';

import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';
import { loggedInProfile } from '../actions';
import LocationOfPoster from '../common/Card/LocationOfPoster';
import NameOfPoster from '../common/Card/NameOfPoster';

class CardTopBanner extends React.Component<Props>{
    gotoProfile(){
        console.log(this.props.imgMetaData.user);
        // loggedInProfile(this.props.imgMetaData.user);
    }
    render(){
        return(
            <div>
                {/* <Link to='/profile' userData={this.props.userData}>
                    <NameOfPoster growwId={this.props.userData.instagram_username}/>
                </Link> */}
                {/* <Link to='/profile'> */}
                    <NameOfPoster onClick={this.gotoProfile} growwId={this.props.imgMetaData.user.instagram_username}/>
                {/* </Link> */}
                <LocationOfPoster location={this.props.imgMetaData.location}/>
            </div>
        );
    }
}
// export default CardTopBanner;
const mapStateToProps = (state:ReduxState) => {
    return {imagesMetaData: state.imagesMetaData};
}
export default connect(mapStateToProps, { loggedInProfile: loggedInProfile, })(CardTopBanner);
type Props = {
    imgMetaData: ImgMetaData;
    loggedInProfile: Function;
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
type ReduxState = {
    imagesMetaData: Array<ImgMetaData>;
    loggedInProfile: string;
};