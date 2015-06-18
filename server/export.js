Meteor.methods({
	exportAllContacts: function() {		
		var fields = [
			"Name",
			"Gender",
			"Date of Affiliation",
			"Country",
			"City"			
		];

		var data = [];		

		var contacts = Contacts.find().fetch();
		_.each(contacts, function(c) {
			data.push([
				c.name,
				c.gender,				
				moment.utc(c.createdAt).format("DD/MM/YYYY"),
				c.address.country,
				c.address.city
			]);
		});

		return {fields: fields, data: data};
	},

	exportContact: function(id) {		
		var fields = [
			"Name",
			"Gender",
			"Date of Affiliation",
			"Country",
			"City"			
		];

		var data = [];		

		var c = Contacts.findOne(id);		
		data.push([
			c.name,
			c.gender,				
			moment.utc(c.createdAt).format("DD/MM/YYYY"),
			c.address.country,
			c.address.city
		]);

		return {fields: fields, data: data};
	}	
});