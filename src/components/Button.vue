<template>
	<button class="btn" :class="`btn-${color}`">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
  	text: String,
  	color: String,
  },
}
 </script>
