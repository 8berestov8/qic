<template>
	<div class="main">
		<Logo />
		<Gradient />
		<div class="car-wrap">
			<u-animate-container>
				<u-animate
					name="fadeIn"
					delay="0s"
					duration="3s"
					:iteration="1"
					:offset="0"
					animateClass="animate__fadeIn"
					:begin="false"
				>
					<img class="car" src="../assets/car.png" />
				</u-animate>
			</u-animate-container>
		</div>
		<Title />
		<FormPhone />
		<FormPhoneBig />
		<Heart />
		<div class="working-since">
			<p>We are working since</p>
		</div>
		<MaskGroup />
		<div class="claims">
			<p class="claims-title">File claims instantly</p>
			<p class="claims-desc">
				QIC is a 100+ strong team working to make insurance radically better
				every day.
			</p>
		</div>

		<Covered />

		<div class="customer">
			<p class="customer-text">Trusted by over 10 000+ customers</p>
		</div>
		<div class="customer-icon">
			<img class="customer-icon1" src="../assets/icon/people100.png" />
			<img class="customer-icon2" src="../assets/icon/people101.png" />
		</div>

		<!-- Qatar -->
		<div class="qatar">
			<p class="qatar-text">Digital Insurance Company №1 in Qatar</p>
			<img src="../assets/icon/qatar.png" />
		</div>

		<!-- hotline -->
		<div class="hotline">
			<p class="hotline-number">8000—742</p>
			<p class="hotline-text">Hotline</p>
		</div>

		<p class="copyright">
			Copyright &copy; All rights reserved QIC Group Doha, 2005-
			{{ new Date().getFullYear() }}
		</p>
	</div>
</template>

<script>
	// @ is an alias to /src

	import Logo from '../components/Logo.vue';
	import Title from '../components/Title.vue';
	import FormPhone from '../components/FormPhone.vue';
	import Heart from '../components/Heart.vue';
	import MaskGroup from '../components/MaskGroup.vue';
	import Covered from '../components/Covered.vue';
	import FormPhoneBig from '../components/FormPhoneBig.vue';
	import Gradient from '../components/Gradient.vue';
	import { UAnimateContainer, UAnimate } from 'vue-wow';
	export default {
		name: 'Home',
		data() {
			return {};
		},
		components: {
			Logo,
			Title,
			FormPhone,
			Heart,
			MaskGroup,
			Covered,
			FormPhoneBig,
			Gradient,
			UAnimateContainer,
			UAnimate,
		},
	};
</script>

<style scoped>
	@import url('~animate.css');

	.main {
		z-index: 1;
		position: relative;
	}
	.car-wrap {
		width: 100%;
		position: absolute;
		overflow: hidden;
		/*padding-top: 46%;*/
		top: 10px;
		height: 900px;
		z-index: -1;
	}
	.car {
		position: absolute;
		max-width: 1295px;
		height: 100%;
		width: 70%;
		left: auto;
		object-fit: contain;
		right: 0;
	}

	.working-since {
		position: absolute;
		width: 410px;
		height: 128px;
		left: 476px;
		top: 1005px;
		font-size: 58px;
		line-height: 110.7%;
		letter-spacing: -0.02em;
	}
	.claims {
		position: absolute;
		width: 1920px;
		height: 391px;
		left: 0px;
		top: 1857px;
		background: #b3c7df;
		max-width: 100%;
	}
	.claims-title {
		position: absolute;
		width: 289px;
		height: 128px;
		left: 480px;
		top: 56px;
		font-size: 58px;
		line-height: 110.7%;
		letter-spacing: -0.02em;
		color: #ffffff;
	}
	.claims-desc {
		position: absolute;
		width: 480px;
		height: 70px;
		left: 480px;
		top: 225px;
		font-weight: 500;
		font-size: 24px;
		line-height: 147%;
		letter-spacing: -0.02em;
		color: #ffffff;
	}

	.customer {
		position: absolute;
		width: 399px;
		height: 176px;
		left: 480px;
		top: 3012px;
	}
	.customer-text {
		font-size: 58px;
		line-height: 110.7%;
		letter-spacing: -0.02em;
	}
	.customer-icon {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 0px;
		position: absolute;
		width: 421px;
		height: 56px;
		left: 964px;
		top: 3112px;
	}
	.customer-icon1 {
		position: absolute;
		width: 421px;
		height: 56px;
	}
	.customer-icon2 {
		position: absolute;
		width: 421px;
		height: 56px;
		left: 40px;
		top: 65px;
	}
	.qatar {
		position: absolute;
		width: 962px;
		height: 104px;
		left: 510px;
		top: 3354px;
		background: #ffffff;
		border-radius: 38px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.qatar-text {
		font-weight: 500;
		font-size: 24px;
		line-height: 110.7%;
		letter-spacing: -0.02em;
		flex: none;
		order: 0;
		flex-grow: 0;
		margin: 0px 18px;
	}
	.hotline {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0px;
		position: absolute;
		width: 272px;
		height: 93px;
		left: 838px;
		top: 3490px;
	}
	.hotline-number {
		font-size: 58px;
		line-height: 110.7%;
		letter-spacing: -0.02em;
		flex: none;
		order: 0;
		flex-grow: 0;
		margin: 8px 0px;
	}
	.hotline-text {
		font-weight: 500;
		font-size: 16px;
		line-height: 21px;
		color: #000000;
		flex: none;
		order: 1;
		flex-grow: 0;
		margin: 8px 0px;
	}
	.copyright {
		position: absolute;
		top: 3673px;
		left: 788px;
		margin-bottom: 30px;
	}
</style>
