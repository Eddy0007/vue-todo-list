String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
var app = new Vue({
  el: '#taskApp',
  data: {
    tasks: [
      {
        title: 'Eddy learn a new Javascript Framework today',
        checked: false
      },
      {
        title: 'Use your new Framework to create a todo list',
        checked: false
      }
    ]
  },
  methods: {
    addTask: function(e) {
      if (e.keyCode == 13 && e.target.value != '') {
        this.tasks.push({ title: e.target.value.capitalize(), checked: false });
        e.target.value = '';
      }
    },
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    },
    check: function(task) {
      task.checked = true;
    },
    isChecked: function(task) {
      return task.checked;
    }
  }
});
