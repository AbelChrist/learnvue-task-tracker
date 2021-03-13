<template>
  <div class="container py-4">
    <div class="card card-body">
      <Header title="Task Tracker" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
      <router-view :showAddTask="showAddTask"></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
   data () {
    return {
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  }
}
</script>
