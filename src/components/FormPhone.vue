<template>
	<form id="form">
		<div class="form-title">
			<p class="approximate">Get Insured in ~4 min</p>
			<p class="discount">10% discount for online registration</p>
		</div>
		<div class="form-group">
			<input
				class="input-form"
				type="tel"
				name="num"
				placeholder=" +974     Enter your phone"
				v-model="phone"
				:class="{
					notvalid: failedValidation.phone,
					valid: failedValidation.phone === false,
				}"
			/>

			<button class="btn-form" @click.prevent="Start">
				Get a Quote
			</button>
			<img class="flag" src="../assets/icon/hand.png" />
		</div>
	</form>
</template>

<script>
	export default {
		name: 'Form',

		data() {
			return {
				failedValidation: {
					phone: null,
				},
				phone: '',
			};
		},
		methods: {
			Start() {
				var x = this.phone
					.replace(/\D/g, '')
					.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
				this.phone = !x[2]
					? x[1]
					: '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
				console.log(x);
				if (this.phone) {
					this.$router.push({ path: 'start' });
				}
			},
		},
		components: {},
	};
</script>

<style scoped>
	#form {
		position: absolute;
		width: 562px;
		height: 137px;
		left: 480px;
		top: 520px;
		padding: 24px;
		background: #ffffff;
		border-radius: 30px;
		margin-bottom: 72px;
		display: grid;
	}
	.form-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.form-group {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.approximate {
		left: calc(50% - 219px / 2 - 154.5px);
		top: 24px;
		font-weight: 600;
		font-size: 22px;
		line-height: 110%;
		color: #141414;
	}

	.discount {
		top: calc(50% - 17px / 2 - 1px);
		font-weight: 600;
		font-size: 15px;
		line-height: 110%;
		display: flex;
		align-items: center;
		color: #0b66ba;
		background: rgba(11, 102, 186, 0.22);
		border-radius: 8px;
		padding: 3px 8px 5px;
		width: 267px;
	}
	.input-form {
		width: 312px;
		height: 64px;
		left: 24px;
		top: 80px;
		background: #f0f4f7;
		border-radius: 16px;
		/* background: url('../assets/icon/hand.png') no-repeat center left; */
		padding-left: 30px;
		font-weight: 500;
		font-size: 18px;
		line-height: 110%;
		color: #141414;
		outline: none;
		border: none;
	}
	.input-form:focus {
		border: 4px solid rgba(11, 102, 186, 0.22);
	}
	.notvalid {
		border: 1px solid red;
	}

	.flag {
		position: absolute;
		width: 24px;
		height: 24px;
		left: 30px;
		top: calc(51% - -42px / 2);
	}

	.btn-form {
		width: 200px;
		height: 64px;
		left: 352px;
		top: 80px;
		font-weight: 600;
		font-size: 18px;
		line-height: 110%;
		color: #ffffff;
		background: #141414;
		border-radius: 16px;
	}
</style>
