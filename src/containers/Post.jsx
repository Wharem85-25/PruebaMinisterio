import React from 'react';
import ButtonPost from '../components/ButtonPost';

const Post = ({handleOnEnter}) => {
	return (
		<div>
			<ButtonPost handleOnEnter={handleOnEnter}  />
		</div>
	);
};

export default Post;
