<template>
	<div class="header">
		<el-row>
			<top-header />
		</el-row>
		<el-row>
			<top-nav />
		</el-row>
	</div>
</template>

<script>
	import topHeader from './topHeader';
	import topNav from './topNav';
	export default {
		components: {
			topHeader,
			topNav,
		},
	};
</script>
