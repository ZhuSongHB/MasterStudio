<template>
	<div>
		<!-- :default-active="activeIndex2" -->
		<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#001cbc" text-color="#fff" active-text-color="#ffd04b" active-background-color="red">
			<el-menu-item index="1">首页</el-menu-item>
			<el-menu-item index="2">工作室概括</el-menu-item>
			<el-menu-item index="3">新闻动态</el-menu-item>
			<el-menu-item index="4">公告通知</el-menu-item>
			<el-menu-item index="5">规章制度</el-menu-item>
			<el-menu-item index="6">报名区</el-menu-item>
			<el-menu-item index="7">下载专区</el-menu-item>
		</el-menu>
	</div>
</template>
<script>
	export default {
		methods: {
			handleSelect() {},
		},
	};
</script>
<style scoped>
	.el-menu {
		width: 1200px;
		margin: 0 auto;
		border-bottom: none;
	}
	.el-menu-item:hover {
		background: #d17a2e !important;
	}
	div {
		background: #001cbc;
	}
</style>
