<template>
	<div class="start">
		<Logo />

		<div class="start-info-box">
			<p class="start-info">Let’s start by specifying vehicle information</p>
		</div>

		<form class="input-group" @submit.prevent>
			<label class="label-plate" for="text">Enter your plate №</label>
			<input class="input-plate" type="text" name="text" />

			<!-- <input
				class="input-model"
				type="text"
				name="text"
				v-model="selectedModel"
			/>
			<ul>
				<li v-for="result in modelResults" :key="result.id">
					{{ result.name }}, {{ result.yahr }}
				</li>
			</ul> -->

			<v-select class="input-model" label="name" :options="models"></v-select>

			<select class="input-type" type="text" name="text" v-model="selected">
				<option value="" disabled selected>Vehicle Type</option>
				<option
					v-for="option in options"
					:key="option.text"
					:value="option.value"
					>{{ option.text }}</option
				>
			</select>

			<div class="input-group-feature">
				<input
					class="input-feature"
					type="text"
					name="text"
					placeholder="Seats qty"
				/>
				<input
					class="input-feature"
					type="text"
					name="text"
					placeholder="No. of Cylinder"
				/>
				<input
					class="input-feature"
					type="text"
					name="text"
					placeholder="First Reg. Year "
				/>
				<p class="text-card">
					Year of registration metioned on your
					<strong class="text-card-strong"
						>vehicle registration card (Istemara Card)</strong
					>
				</p>
			</div>
			<button class="form-btn">Processed</button>
		</form>
	</div>
</template>

<script>
	import Logo from '../components/Logo.vue';
	import 'vue-select/dist/vue-select.css';
	export default {
		name: 'Start',
		data() {
			return {
				model: null,
				options: [
					{ text: 'Passenger', value: 'Passenger' },
					{ text: 'Truck', value: 'Truck' },
				],
				selected: '',
				selectedModel: '',
				modelResults: '',
				models: [
					{
						name: 'Kia Rio',
						yahr: '2021',
					},
					{
						name: 'Hyndai Creta',
						yahr: '2012',
					},
				],
			};
		},

		watch: {
			selectedModel(val) {
				const modId = this.models.filter(
					(model) => model.name.includes(val) || model.yahr.includes(val)
				);
				this.modelResults = modId;
				console.log(modId);
				//this.setCurrentDevice({deviceId: devId[0]['id']})
			},
		},

		components: {
			Logo,
		},
	};
</script>

<style scoped>
	.start-info-box {
		position: absolute;
		width: 385px;
		height: 304px;
		left: 480px;
		top: 120px;
	}
	.start-info {
		position: absolute;
		width: 385px;
		height: 256px;
		left: 0px;
		top: 35px;
		font-size: 58px;
		line-height: 110.7%;
		letter-spacing: -0.02em;
		color: #141414;
		margin: 0;
	}
	.input-group {
		position: absolute;
		width: 552px;
		height: 568px;
		left: 888px;
		top: 152px;

		background: #ffffff;
		border-radius: 40px;
	}
	.label-plate {
		position: absolute;
		width: 196px;
		height: 24px;
		left: 35px;
		top: 31px;
		font-weight: 500;
		font-size: 22px;
		line-height: 108.2%;
		text-align: center;
		color: #000000;
	}
	.input-plate {
		position: absolute;
		width: 489px;
		height: 80px;
		left: 32px;
		top: 72px;
		outline: none;
		border: 1px solid #dee4e8;
		box-sizing: border-box;
		border-radius: 19px;
		text-indent: 30px;
	}
	.input-model {
		position: absolute;
		width: 488px;
		height: 64px;
		left: 32px;
		top: 168px;
		background: #f0f4f7;
		border-radius: 16px;
		outline: none;
		border: none;
		text-indent: 30px;
	}
	.input-type {
		position: absolute;
		width: 488px;
		height: 64px;
		left: 32px;
		top: 248px;
		border-radius: 16px;
		outline: none;
		border: none;
		text-indent: 30px;
		background: url('../assets/icon/chevron-down.svg') no-repeat right #f0f4f7;
		-webkit-appearance: none;
		background-position-x: 447px;
	}
	.input-group-feature {
		display: flex;
		align-items: center;
		position: absolute;
		width: 128px;
		height: 64px;
		left: 32px;
		top: 328px;
	}
	.input-feature {
		background: #f0f4f7;
		border-radius: 16px;
		height: 64px;
		outline: none;
		margin: 17px 17px 0 0;
		text-align: center;
		border: none;
	}

	.text-card {
		position: absolute;
		width: 471px;
		height: 34px;
		left: 2px;
		top: 75px;
		font-size: 13px;
		line-height: 17px;

		color: rgba(0, 0, 0, 0.37);
	}
	.text-card-strong {
		color: #000000;
	}
	.form-btn {
		position: absolute;
		width: 488px;
		height: 72px;
		left: 32px;
		top: 464px;

		background: #1d1d1d;
		border-radius: 17px;
		color: #ffffff;

		font-weight: 600;
		font-size: 22px;
		line-height: 108.2%;

		color: #ffffff;
	}

	#vs1__combobox .vs__dropdown-toggle {
		border: none !important;
		height: 64px;
	}
</style>
