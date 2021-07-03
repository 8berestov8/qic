<template>
	<div class="mask-group">
		<img class="mask-img" src="../assets/Mask Group.png" />
		<div class="mask-group-desc">
			<div class="mask-text" style="margin-bottom: 41px">
				Oldest home-grown insurance company in Qatar you can trust.
			</div>
			<div class="map-pin" style="margin-bottom: 18px">
				<img class="mask-icon" src="../assets/icon/map-pin.svg" />
				<p class="mask-text">10 Branches</p>
			</div>
			<div class="map-pin">
				<img class="mask-icon" src="../assets/icon/briefcase.svg" />
				<p class="mask-text">We work with all agency workshops</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MaskGroup',
	};
</script>

<style scoped>
	.mask-group {
		position: absolute;
		left: 382px;
		top: 1037px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 1080px;
	}
	.mask-group-desc {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.mask-icon {
		margin-right: 10px;
	}
	.mask-text {
		font-size: 24px;
		line-height: 147%;
		letter-spacing: -0.02em;
		color: #141414;
	}
	.map-pin {
		display: flex;
	}
</style>
