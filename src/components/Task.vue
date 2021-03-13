<template>
	<li :class="`list-group-item list-group-item-dark ${task.reminder ? 'border-5 border-success border-top-0 border-end-0 border-bottom-0' : ''} d-flex justify-content-between mb-2 rounded`" @dblclick="$emit('toggle-reminder', task.id)" style="cursor: pointer;">
		<div>
			<h3>{{task.text}}</h3>
			<p class="my-0">{{ task.time }}</p>
		</div>
		<i @click="$emit('delete-task', task.id)" class="fas fa-lg fa-times text-danger mt-2"></i>
	</li>
</template>

<script>
export default {
  name: 'Task',
  props: {
  	task: Object,
  },
}
</script>
