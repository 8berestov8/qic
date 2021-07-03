<template>
	<div class="logo">
		<img src="../assets/logo.png" />
	</div>
</template>

<script>
	export default {
		name: 'Logo',
		props: {
			msg: String,
		},
	};
</script>

<style scoped>
	.logo {
		position: absolute;
		width: 163px;
		height: 40px;
		left: 40px;
		top: 40px;
	}
</style>
