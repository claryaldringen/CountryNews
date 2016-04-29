var React = require('react');

class Base extends React.Component{

	render() {

		var style = {margin: 5};

		var headStyle = {
			background: '#5000FF',
			color: '#FFFFFF',
			marginTop: 0,
			paddingTop: 40
		};

		var aStyle = {color: '#ffffff'};

		return(
			<div>
				<div className="page-header" style={headStyle}>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h1>Country News</h1>
								<h2>Top stories in my country</h2>
							</div>
							<div className="col-md-6">
								<div className="pull-right">
									<a href="http://twitter.com" style={style}><img src="./images/twitter2.png" /></a>
									<a href="http://facebook.com" style={style}><img src="./images/facebook2.png" /></a>
									<a href="http://instagram.com" style={style}><img src="./images/instagam.png" /></a>
									<a href="http://linkedin.com" style={style}><img src="./images/linkedin2.png" /></a>
									<a href="" style={style}><img src="./images/email.png" /></a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-offset-10 col-md-1">
								<a href="#/news" className="pull-right" style={aStyle}>NEWS</a>
							</div>
							<div className="col-md-1">
								<a href="#/photos" className="pull-right" style={aStyle}>PHOTOS</a>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}

module.exports = Base;