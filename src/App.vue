<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	import Home from './views/Home.vue';
	import Start from './views/Start.vue';
	export default {
		components: { Home, Start },
	};
</script>

<style>
	@font-face {
		font-family: 'Regular';
		src: url('./assets/fonts/Regular-Regular.ttf');
	}
	html,
	body,
	#app {
		font-family: Regular;
		background: #f8f8f8;
		font-style: normal;
		font-weight: normal;
		color: #0e0e0e;
	}
</style>
