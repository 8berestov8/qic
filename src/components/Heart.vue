<template>
	<div class="heart-group">
		<div class="heart">
			<img src="../assets/icon/heart.svg" />
			<p class="heart-text">Policy without visiting office</p>
		</div>
		<div class="heart">
			<img src="../assets/icon/heart1.svg" />
			<p class="heart-text">
				The policy will be sent to you instantly after filling out the form
			</p>
		</div>
		<div class="heart">
			<img src="../assets/icon/heart2.svg" />
			<p class="heart-text">Accurate calculation of the cost</p>
		</div>
		<div class="heart">
			<img src="../assets/icon/heart3.svg" />
			<p class="heart-text">Quick decisions on claims</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Heart',
	};
</script>

<style scoped>
	.heart-group {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 0px;
		position: absolute;
		width: 1052px;
		height: 141px;
		left: 480px;
		top: 760px;
	}
	.heart {
		width: 1052px;
		height: 141px;
		left: 480px;
		top: 760px;
		padding: 32px;
	}
	.heart-text {
		font-size: 18px;
		line-height: 135%;
		letter-spacing: -0.01em;
		color: #141414;
		flex: none;
		order: 1;
		flex-grow: 0;
		margin: 13px 0px;
	}
</style>
