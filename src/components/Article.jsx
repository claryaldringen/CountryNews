var React = require('react');

class Article extends React.Component{

	render() {

		var imgStyle = {
			width: 200,
			margin: 10,
		};

		var style = {
			background: '#ffffff',
			margin: 20,
			padding: 20,
			boxShadow: '1px 1px 5px'
		};

		var images = this.props.images.map(function(image, key) {
			return <img key={key} src={image} style={imgStyle} />
		});

		return(
			<div className="row" style={style}>
				<div className="col-md-1">
					<img src={this.props.favicon} width="64" height="64" />
				</div>
				<div className="col-md-11">
					<h1>{this.props.title}</h1>
					<h2>{this.props.subtitle}</h2>
					<p>
						{this.props.content}
						<br />
						{images}
					</p>
					<span>{this.props.location}</span>
				</div>
			</div>
		);
	}
}

module.exports = Article;