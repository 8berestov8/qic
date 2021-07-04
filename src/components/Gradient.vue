<template>
	<div class="gradient-wrap">
		<img src="../assets/header-gradient.svg" alt="gradient" />
	</div>
</template>
<style>
	/* + reset */
	* {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Chrome/Safari/Opera */
		-khtml-user-select: none; /* Konqueror */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
                                  not supported by any browser */
	}
	body {
		margin: 0;
	}
	img {
		max-width: 100%;
	}
	input {
		outline: none;
		box-shadow: none;
	}
	button {
		cursor: pointer;
		box-shadow: none;
		outline: none;
	}
	/* - reset */
	.gradient-wrap {
		overflow: hidden;
		width: 100%;
		z-index: -2;
		position: relative;
	}
</style>

<script>
	export default {
		name: 'Gradient',
		mounted() {},
		methods: {},
	};
</script>
