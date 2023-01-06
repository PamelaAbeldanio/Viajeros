import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter(props){
    return (
        <div className="row">
            <LastMovieInDb 
                destinys={props.destinys}
            />
            <GenresInDb 
            destinys={props.destinys}
            categorys={props.categorys}
            total={props.total}
            />
        </div>
    )
}

export default ContentRowCenter;