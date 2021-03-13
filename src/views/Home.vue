<template>
      <AddTask v-show="showAddTask" @add-task="addTask" />
      <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import Tasks from '@/components/Tasks';
import AddTask from '@/components/AddTask';

export default {
  name: 'Home',
  props: {
  	showAddTask: Boolean
  },
  components: {
  	Tasks,
  	AddTask
  },
  data () {
    return {
      tasks: [],
    }
  },
  methods: {
    async deleteTask(id) {
      if(confirm('Are you sure?')) {
        // Buat delete request untuk menghapus data berdasarkan id
        const res = await fetch(`/api/tasks/${id}`, {
          method: 'DELETE',
        });
        // Jika respon statusnya 200 OK maka update tasks nya
        res.status === 200 ? (this.tasks = this.tasks.filter(task => task.id !== id)) : alert('Error deleting task!');
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
      console.log(updTask);
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      });;

      const data = await res.json()
      this.tasks = this.tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task);
    },
    async addTask(task) {
      // Buat post request untuk menambah data
      console.log(task)
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      // Ambil data yang barusan dibuat
      const data = await res.json();
      // menampilkan ulang data yang baru dengan data yang barusan didapat
      this.tasks = [...this.tasks, data];
    },
    async fetchTasks() {
      // buat request get untuk ambil data dari endpoint urlnya
      const res = await fetch('api/tasks');
      // Ambil data lalu ubah ke json dari responnya
      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);

      const data = await res.json();

      return data;
    },
  }, 
  async created() {
    this.tasks = await this.fetchTasks();
  },
}
</script>
