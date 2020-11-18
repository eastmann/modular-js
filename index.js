// console.log('[JS] : Script loaded');

(function() {

    var people = {
        people: ['John', 'George'],
        cacheDom() {
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#people-template').html();
        },
        bindEvents() {
            this.$button.on('click', this.addPerson.bind(this));
            this.$ul.on('click', 'i.del', this.deletePerson.bind(this));
        },
        addPerson() {
            this.people.push(this.$input.val());
            this.render();
            this.$input.val('');
        },
        deletePerson(event) {
            var $remove =$(event.target).closest('li');
            var i = this.$ul.find('li').index($remove);

            this.people.splice(i, 1);
            this.render();
        },
        render() {
            var data = {
                people: this.people
            };
            this.$ul.html(Mustache.render(this.template, data));
        },
        init() {
            this.cacheDom();
            this.render();
            this.bindEvents();
        }
    };

    people.init();

})();

// $(function() {


//     $('#peopleModule').find('button').on('click', function() {
//         people.push($('#peopleModule').find('input').val());
//         $('#peopleModule').find('input').val('');
//         // data for Mustache template
//         var data = {
//             people: people
//         };
//         $('#peopleModule').find('ul').html(Mustache.render(template, data));
//     });

//     $('#peopleModule').find('ul').on('click', 'i.del', function(e) {
//         var $remove = $(e.target).closest('li');
//         var i = $('#peopleModule').find('ul').find('li').index($remove);

//         $remove.remove();

//         people.splice(i, 1);
//     });
// });
