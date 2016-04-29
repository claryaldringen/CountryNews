var React = require('react');
var Article = require('./Article.jsx');

class News extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			articles: [
				{
					title: 'Obesity in America',
					subtitle: 'Why Americans so fat?',
					content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aliquam ante. Fusce nibh. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nunc tincidunt ante vitae massa.',
					images: ['https://i.ytimg.com/vi/I7IM2YssIEo/hqdefault.jpg', 'http://img.costumepedia.com/1/88/fat-elvis-costume.jpg'],
					location: 'Kentucky, USA',
					favicon: 'http://bestanimations.com/Flags/USA/usa-american-flag-gif-3.gif'
				},{
					title: 'UX Designer',
					subtitle: 'Smart software development',
					content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aliquam ante. Fusce nibh. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nunc tincidunt ante vitae massa.',
					images: ['http://www.inflow.cz/files/field/image/ux-infographic.jpg'],
					location: 'Czech Republic',
					favicon: 'http://files.sz63tk.webnode.cz/200000350-c2414c2c07/Slovenia%20flag-M-anim.gif'
				},
			]
		};
	}

	render() {

		var articles = this.state.articles.map(function(article, key){
			return(
				<Article key={key} title={article.title} subtitle={article.subtitle} content={article.content} images={article.images} location={article.location} favicon={article.favicon} />
			);
		});

		return(
			<div>
				{articles}
			</div>
		);
	}

}

module.exports = News;