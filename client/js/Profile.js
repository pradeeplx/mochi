var Avatar = React.createClass({
	render: function() {
		return (
			<section className="avatar">
				<div className="profile-img"></div>
				<h1>{this.props.children}</h1>
				<button className="btn">Add Donation</button>
			</section>
		);
	}
});

var StatItem = React.createClass({
	render: function() {
		return (
			<div className={"col-md-" + this.props.size}>
				<h4>{this.props.header}</h4>
				<span>{this.props.detail}</span>
			</div>		
		);
	}
});

var SummaryStats = React.createClass({
	render: function() {
		return (
			<section className="summary-stats profile-card row">
				<StatItem size="3" header="Donor Since:" detail="2007"/>
				<StatItem size="3" header="Last Interaction:" detail="March 19, 2016"/>
				<StatItem size="3" header="Last Donation:" detail="$500"/>
				<StatItem size="3" header="YTD Total:" detail="$700"/>
			</section>
		);
	}
});


var ContactItem = React.createClass({
	render: function(){
		return (
			<li className="list-group-item">
				<span>{this.props.field + ": "}</span>
				<span>{this.props.children}</span>
			</li>
		);
	}
});

var ContactInfo = React.createClass({
	render: function() {
		return (
			<section className="contact-info profile-card">
				<h3>Contact Info</h3>
				<ul className="list-group">
					<ContactItem field="Email">gig6@cornell.edu</ContactItem>
					<ContactItem field="Phone">(516) 732-9916</ContactItem>
					<ContactItem field="Twitter">@gidglass</ContactItem>
					<ContactItem field="City">New York</ContactItem>
				</ul>
			</section>
		);
	}
});

var Profile = React.createClass({
	render: function(){
		return (
			<div className="col-md-7 col-md-offset-1 main profile">
				<Avatar>Gideon Glass</Avatar>
				<SummaryStats/>
				<ContactInfo/>
			</div>
		);
	}
});

React.render(<Profile>Gideon Glass</Profile>, document.getElementById('react-profile'));