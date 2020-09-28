<template>
	<div class="page-default">
		<el-container>
			<el-header style="height:100%;">
				<top-header />
			</el-header>
			<el-main>
				<list />
			</el-main>
			<el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>

<script>
	import TopHeader from '../components/header/index';
	import List from '../components/main/index';
	export default {
		components: {
			TopHeader,
			List,
		},
	};
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}
	.el-main {
		width: 1200px;
		margin: 0 auto;
	}
</style>
