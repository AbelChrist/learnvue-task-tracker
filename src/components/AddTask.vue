<template>
<form @submit="onSubmit">
	<div class="mb-2">
		<label for="text">Task</label>
		<input type="text" class="form-control" placeholder="Add Task" id="text" name="text" v-model="text">
	</div>
	<div class="mb-2">
		<label for="time">Day & Time</label>
		<input type="text" class="form-control" placeholder="Day & Time" id="time" name="time" v-model="time">
	</div>
	<div class="form-check mb-2">
		<label for="reminder" class="form-check-label">Set Reminder</label>
		<input type="checkbox" class="form-check-input" id="reminder" name="reminder" v-model="reminder">
	</div>
	<Button color="primary" text="Save Task" class="mb-2" />

</form>
</template>

<script>
import Button from './Button';
export default {
  name: 'AddTask',
  components: {
  	Button,
  },
  data () {
    return {
    	text: '',
    	time: '',
    	reminder: 'false',
    }
  },
  methods: {
  	onSubmit(e) {
  		e.preventDefault();

  		if(!this.text) {
  			alert('Please add a task!');
  			return
  		}

  		const newTask = {
  			// id: Math.floor(Math.random() * 10000),
  			text: this.text,
  			time: this.time !== '' ? this.time : 'Not set',
  			reminder: this.reminder,
  		};

  		this.$emit('add-task', newTask);

  		this.text = '';
  		this.time = '';
  		this.reminder = false;

  	}
  }
}
</script>
