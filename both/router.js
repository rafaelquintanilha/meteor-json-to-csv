Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('contacts', {path: '/'}),
  this.route('contact', {path: 'contact/:_id'})
});