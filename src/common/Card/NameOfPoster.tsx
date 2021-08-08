import React from 'react';

interface Props {
    growwId: string;
    // Q:  Is this the correct way to remove swiggly lines when `onClick` is called when present in its parent (here, `CardTopBanner`)?
    onClick?: React.MouseEventHandler;
};
interface State {};
export default class NameOfPoster extends React.Component<Props, State>{
    render(){
        return(
            <div>
                {this.props.growwId}
            </div>
        );
    }
}
