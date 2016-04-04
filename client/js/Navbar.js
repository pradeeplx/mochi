var NavItem = React.createClass({
    render: function() {
        return (
            <li><a href="#">{this.props.children}</a></li>
        );
    }
});

var NavToggle = React.createClass({
    render: function(){
        return (
            <button type="button" 
                className="navbar-toggle collapsed" data-toggle="collapse" data-target={"#"+this.props.target} aria-expanded="false" aria-controls={this.props.target}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        );
    }
})

var Navbar = React.createClass({
    getDefaultProps: function() {
        return {
            navID: "navbar",
            navItems: [
                "Dashboard", 
                "Settings", 
                "Profile",
                "Help"
            ]
        };
    },
    getNavItems: function(){
        var items = [];
        this.props.navItems.forEach(function(i){
            items.push(<NavItem>{i}</NavItem>)
        });
        return items;
    },
    render: function() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <NavToggle target={this.props.navID}/>
                      <a className="navbar-brand" href="#">{this.props.brandName}</a>
                    </div>
                    <div id={this.props.navID} className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            {this.getNavItems()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

var Sidebar = React.createClass({
    getDefaultProps: function() {
        return {
            navID: "navbar",
            navItems: [
                "Dashboard", 
                "Settings", 
                "Profile",
                "Help"
            ]
        };
    },
    getNavItems: function(){
        var items = [];
        this.props.navItems.forEach(function(i){
            items.push(<NavItem>{i}</NavItem>)
        });
        return items;
    },
    render: function(){
        return (
            <div className="col-md-1 sidebar">
                <ul className="nav nav-sidebar">
                    {this.getNavItems()}
                </ul>
            </div>
        );
    }
});

React.render(<Navbar brandName="Mochi"/>, document.getElementById('react-navbar'));
React.render(<Sidebar/>, document.getElementById('react-sidebar'));