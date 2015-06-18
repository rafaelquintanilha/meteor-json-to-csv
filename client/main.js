Template.registerHelper("formatDate", function(date) {
	return moment.utc(date).format("DD/MM/YYYY");
});

Template.contacts.helpers({
	contacts: function() {
		return Contacts.find({}, {name: 1});
	}
});

Template.contact.helpers({
	contact: function() {
		return Contacts.findOne(Router.current().params._id);
	}
});

Template.contacts.events({
	"click #export": function() {
		MyAppExporter.exportAllContacts();
	}
});

Template.contact.events({
	"click #export": function() {
		MyAppExporter.exportContact(Router.current().params._id);
	}
});