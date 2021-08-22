<template>
	<p class="align--dash_middle">
		<span>duoli</span>
	</p>
</template>
<script>
export default {
	name: "FeDashMiddle",
};
</script>

// url : https://www.yudouyudou.com/jiaochengheji/Html_css/1248.html
<style scoped lang="less">
.align--dash_middle {
	color: #f2ae11;
	font-size: 1.3em;
	height: 1rem;
	text-align: center;
	span {
		display: block;
		color: #2b99e1;
		position: relative;
		&:before,
		&:after {
			content: "";
			position: absolute;
			top: 52%;
			background: #494949;
			width: 50%;
			height: 2px;
		}
		&:before {
			left: 0;
		}
		&:after {
			right: 0;
		}
	}
}
</style>
