<template>
	<div class="start">
		<Logo />

		<div class="start-info-box">
			<p class="start-info">Let’s start by specifying vehicle information</p>
		</div>

		<form class="input-group" @submit.prevent>
			<label class="label-plate" for="text">Enter your plate №</label>
			<input class="input-plate" type="text" name="text" />

			<input class="input-model" v-model="search" placeholder="Kia" />

			<div class="list">
				<ul
					v-for="model in selectedModel"
					:key="model.key"
					@click="select(model)"
				>
					<li>{{ model.name }}</li>
				</ul>
				<ul
					v-for="brand in selectedBrand"
					:key="brand.key"
					@click="resulted(brand)"
				>
					<li>{{ brand.name }}</li>
				</ul>
				<ul v-for="year in selectedYear" :key="year.key" @click="select(year)">
					<li>{{ year.name }}</li>
				</ul>
			</div>

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

	export default {
		name: 'Start',
		data() {
			return {
				search: '',
				result: [],
				options: [
					{ text: 'Passenger', value: 'Passenger' },
					{ text: 'Truck', value: 'Truck' },
				],
				selected: '',

				models: [{ name: 'Kia' }, { name: 'Hyndai' }],
				brands: [{ name: 'Rio' }, { name: 'Creta' }],
				years: [{ name: '2021' }, { name: '2012' }, { name: '2013' }],
			};
		},
		methods: {
			select(val) {
				this.search = val.name;
				this.result.push(val.name);
				val.name = '';
			},
			resulted(val) {
				const oslSearch = this.search;
				this.search = oslSearch + val.name;
			},
		},

		computed: {
			selectedModel() {
				if (this.search !== '') {
					return this.models.filter((model) => {
						return model.name.includes(this.search);
					});

					// const brand = this.brands.filter((brand) => brand.name.includes(val));
					// const year = this.years.filter((year) => year.name.includes(val));
					// if (modId !== '') {
					// 	return (this.modelResults = modId);
					// }
					// if (brand !== '') {
					// 	return (this.modelResults = brand);
					// }
					// if (year !== '') {
					// 	return (this.yearResult = year);
					// }
					//this.setCurrentDevice({deviceId: devId[0]['id']})
				}
			},
			selectedBrand() {
				const a = this.search.split(' ')[1];
				console.log(a);
				if (a !== '') {
					return this.brands.filter((brand) => {
						return brand.name.includes(a);
					});
				}
			},
			selectedYear() {
				if (this.search !== '') {
					return this.years.filter((year) => {
						return year.name.includes(this.search);
					});
				}
			},
		},

		components: {
			Logo,
		},
	};
</script>

<style>
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
	.list {
		position: absolute;
		width: 488px;
		border: none;
		background: white;
		top: 236px;
		left: 33px;
		z-index: 1;
	}
	li {
		list-style-type: none;
	}

	ul:hover {
		height: 20px;
		background: #f0f4f7;
		padding: 0 0 0 30px;
	}
</style>
