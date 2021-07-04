<template>
	<div class="form2">
		<div class="desc-form2">
			<p class="discount">10% discount for online registration</p>

			<p class="desc-service">QIC is a Quick & Quality claim servicing</p>
			<p class="desc-fast">Fast quote. Fast claims. Fast everything.</p>
		</div>
		<form class="form-group2">
			<input
				class="input-form2"
				type="tel"
				name="num"
				placeholder=" +974     Enter your phone"
			/>
			<img class="flag" src="../assets/icon/hand.png" />
			<button class="btn-form2">Check Your Price</button>
		</form>
	</div>
</template>

<style scoped>
	.form2 {
		position: absolute;
		width: 960px;
		height: 232px;
		left: 480px;
		top: 1480px;
		background: #ffffff;
		border-radius: 30px;
		display: flex;
		justify-content: space-around;
		padding: 33px;
	}
	.form-group2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.desc-form2 {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.desc-service {
		font-style: normal;
		font-weight: 500;
		font-size: 29px;
		line-height: 118%;
		letter-spacing: -0.02em;
		color: #141414;
	}
	.desc-fast {
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 118%;
		letter-spacing: -0.02em;
		color: #141414;
	}
	.input-form2 {
		width: 331px;
		height: 64px;
		left: 0px;
		top: 0px;
		outline: none;
		padding-left: 30px;
		background: #f0f4f7;
		border-radius: 16px;
		flex: none;
		order: 0;
		flex-grow: 0;
		margin: 16px 0px;
		font-weight: 500;
		font-size: 18px;
		line-height: 110%;
		color: #141414;
	}
	.input-form2 :focus {
		border: 4px solid rgba(11, 102, 186, 0.22);
	}

	.btn-form2 {
		width: 361px;
		height: 64px;
		left: 0px;
		top: 80px;

		background: #141414;
		border-radius: 16px;

		flex: none;
		order: 1;
		flex-grow: 0;
		margin: 16px 0px;

		font-weight: 600;
		font-size: 18px;
		line-height: 110%;

		display: flex;
		align-items: center;
		justify-content: center;

		color: #ffffff;
	}
	.flag {
		position: absolute;
		width: 24px;
		height: 24px;
		right: 407px;
		top: 72px;
	}
</style>
