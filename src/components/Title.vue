<template>
	<div class="box">
		<p class="title">
			Hello! <img src="../assets/hand.png" /> I am QIC <br />
			insurance adviser
		</p>
		<p class="desc">
			I’ll help you get a quote for TPL or <br />
			Comprehensive insurance policy
		</p>
		<p class="subtitle">Join over 50,000 drivers using QIC</p>
	</div>
</template>

<script>
	export default {
		name: 'Title',
	};
</script>

<style scoped>
	.box {
		position: absolute;
		width: 576px;
		height: 376px;
		left: 480px;
		top: 120px;
	}
	.title {
		width: 470px;
		height: 128px;
		left: 0px;
		top: 35px;

		font-size: 58px;
		line-height: 110.7%;
		letter-spacing: -0.02em;
		color: #141414;
		margin-bottom: 33px;
		overflow: hidden;
		white-space: nowrap;
		animation: typing 3s steps(30, end), blink-caret 0.7s step-end infinite;
	}
	.desc {
		width: 480px;
		height: 74px;
		left: 0px;
		top: 196px;

		font-size: 28px;
		line-height: 133.7%;
		letter-spacing: -0.02em;
		color: #141414;
		margin-bottom: 30px;
		overflow: hidden;
		white-space: nowrap;
		animation: typing 3.5s steps(30, end), blink-caret 0.7s step-end infinite;
	}
	.subtitle {
		width: 440px;
		height: 31px;
		left: 0px;
		top: 300px;

		font-size: 28px;
		line-height: 110.7%;
		letter-spacing: -0.02em;
		color: #141414;
		overflow: hidden;
		white-space: nowrap;
		animation: typing 4s steps(30, end), blink-caret 0.7s step-end infinite;
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
</style>
