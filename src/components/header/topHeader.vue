<template>
	<div class="header">
		<div class="wrap">
			<div class="logo-search">
				<div class="fl logoDiv">
					<a href="#" title="阳光学院主站">
						<img src="../../assets/logo.png" width="297" height="101" border="0" alt="阳光学院主站" title="阳光学院主站" />
					</a>
				</div>
				<div class="fl textDiv">名师工作室</div>
				<div class="fr management">
					<a href="#">后台管理</a>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.header {
		background: url('../../assets/top-bg.jpg') #0066cc no-repeat center top;
		width: 100%;
		background-size: 100%;
		height: 130px;
	}
	.wrap {
		width: 1200px;
		margin: 0 auto;
	}

	.textDiv {
		margin-left: 50px;
		margin-top: 30px;
		font-size: 35px;
		color: #fff;
	}
	.management {
		margin-top: 20px;
		color: #fff;
	}
	.management a {
		text-decoration: none;
		color: #fff;
	}
	.logo-search {
		overflow: hidden;
	}
	.logoDiv {
		margin-top: 10px;
		width: 312px;
	}
	.fl {
		float: left;
	}
	.fr {
		float: right;
	}
</style>
