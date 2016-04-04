// ADD CATEGORY PROPS
var Event = React.createClass({
	render: function() {
		return (
			<div className="timeline-event">
				<div className="event-title">
					<svg className="event-circle" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
				    	<circle cx="10" cy="10" r="10" fill="#f61b7d" />
					</svg>
					<h4>{this.props.title}</h4>
				</div>
				<div className="event-details">
					<h5>{this.props.date}</h5>
					<p>{this.props.children}</p>
				</div>
			</div>
		);


	}
});

var Timeline = React.createClass({
	render: function(){
		return (
			<div className="col-md-4 main timeline">
				<Event title="Donated $500" date="March 19, 2016">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi ornare id odio in pharetra.
				</Event>
				<Event title="Donated $200" date="March 1, 2016">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi ornare id odio in pharetra.
				</Event>
				<Event title="Donated $10" date="January 7, 2012">
				</Event>
				<Event title="Attended Gala" date="July 24, 2011">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi ornare id odio in pharetra.
				</Event>
				<Event title="Donated $10" date="April 15, 2008">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi ornare id odio in pharetra.
				</Event>
				<Event title="Email Campaign" date="November 5, 2007">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi ornare id odio in pharetra.
				</Event>	
				<Event title="Email Campaign" date="November 5, 2007">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi ornare id odio in pharetra.
				</Event>		
			</div>
		);
	}
});

React.render(<Timeline>Timeline</Timeline>, document.getElementById('react-timeline'));