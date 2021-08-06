import React from 'react';

interface Props {
    growwId: string;
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
