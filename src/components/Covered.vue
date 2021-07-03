<template>
	<div class="covered">
		<div class="covered-title-box">
			<p class="covered-title">We’ve got you covered</p>
		</div>
		<div class="covered-desc">
			<div class="covered-item">
				<img class="covered-item-icon" src="../assets/icon/collision.png" />
				<p class="covered-item-title">Collision</p>
				<p class="covered-item-desc">
					Accidents with another vehicle, motorists, a fixed object and more
				</p>
			</div>
			<div class="covered-item">
				<img class="covered-item-icon" src="../assets/icon/comprehensive.png" />
				<p class="covered-item-title">Comprehensive</p>
				<p class="covered-item-desc">
					Coverage for things that are out of your control like weather,
					animals, and theft
				</p>
			</div>
			<div class="covered-item">
				<img class="covered-item-icon" src="../assets/icon/everything.png" />
				<p class="covered-item-title">Everything else</p>
				<p class="covered-item-desc">Roadside assistance services</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Covered',
	};
</script>

<style scoped>
	.covered {
		position: absolute;
		width: 962px;
		height: 543px;
		left: 480px;
		top: 2403px;
	}
	.covered-title-box {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.covered-title {
		width: 604px;
		height: 64px;
		left: 179px;
		top: 0px;
		font-size: 58px;
		line-height: 110.7%;
		letter-spacing: -0.02em;
		margin-bottom: 40px;
	}

	.covered-desc {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-around;
		padding: 0px;
		width: 962px;
		height: 367px;
	}
	.covered-item {
		width: 304px;
		height: 367px;
		left: 0px;
		top: 0px;
		background: #ffffff;
		border-radius: 31px;
		flex: none;
		order: 0;
		flex-grow: 0;
		margin: 0px 25px;
	}
	.covered-item-icon {
		width: 271px;
		height: 120px;
		left: 16px;
		top: 24px;
		border-radius: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.covered-item-title {
		font-weight: 500;
		font-size: 29px;
		line-height: 118%;
		letter-spacing: -0.02em;
		color: #141414;
		flex: none;
		order: 0;
		flex-grow: 0;
		margin: 13px 30px 13px 30px;
	}
	.covered-item-desc {
		font-size: 22px;
		line-height: 121%;
		letter-spacing: -0.01em;
		color: #141414;
		flex: none;
		order: 1;
		flex-grow: 0;
		margin: 13px 30px 13px 30px;
	}
</style>
