var React = require('react');

class News extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			photos: [
				'http://i.imgur.com/5QJSDB1.jpg',
				'http://i.imgur.com/nIj9GEE.jpg',
				'http://i.imgur.com/dqRILeB.png',
				'http://i.imgur.com/cSqe4s3.jpg',
				'http://i.imgur.com/5QJSDB1.jpg',
				'http://i.imgur.com/nIj9GEE.jpg',
				'http://i.imgur.com/dqRILeB.png',
				'http://i.imgur.com/cSqe4s3.jpg'
			]
		};
	}

	render() {
		var style = {
			background: '#ffffff',
			margin: 20,
			padding: 20,
			boxShadow: '1px 1px 5px'
		};

		var photos = this.state.photos.map(function(photo, key){

			let imgStyle = {
				boxShadow: '1px 1px 5px',
				margin: 10
			};

			return(
				<a href={photo}>
					<img key={key} src={photo} width="240" height="240" style={imgStyle} />
				</a>
			);
		});

		return(
			<div className="row" style={style}>
				{photos}
			</div>
		);
	}

}

module.exports = News;