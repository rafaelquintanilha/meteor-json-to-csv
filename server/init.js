Meteor.startup(function() {
  if ( Contacts.find().count() === 0 ) {
    Contacts.insert({
        name: "Rafael",
        gender: "Male",
        address: {
            country: "Brazil",
            city: "Rio de Janeiro"
        },
        createdAt: new Date
    });

    Contacts.insert({
        name: "John",
        gender: "Male",
        address: {
            country: "Australia",
            city: "Melbourne"
        },
        createdAt: moment(new Date).subtract(1, "days")._d
    });

    Contacts.insert({
        name: "Marie",
        gender: "Female",
        address: {
            country: "France",
            city: "Paris"
        },
        createdAt: moment(new Date).subtract(7, "days")._d
    });
  }
});