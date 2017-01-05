Meteor.publish('postApproved',function(){
	return Posts.find({status:1})	
})