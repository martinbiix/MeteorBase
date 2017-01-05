Router.configure({
	layoutTemplate: "baseLayout",
	loadingTemplate: "login",
	waitOn: function(){
		return Meteor.subscribe("postApproved");
	}
})

Router.route("/",{
	name:"login",
	data:{
		posts:function(){
			return Posts.find();
		}
	}
})


Router.route("/register",{
	name:"register",
	data: {
		posts:function(){
			return Posts.find();
		}
	}
});

// we want to be sure that the user is logging in
// for all routes but login
Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('/login');
    } else {
        // required by Iron to process the route handler
        this.next();
    }
}, {
    except: ['login','register']
});

// add here other routes

// catchall route
Router.route('/(.*)', function () {
    this.redirect('/catchallpage');
});