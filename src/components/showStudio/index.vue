<template>
	<div>
		<top-nav />
		<div class="showStudio">
			<div class="content">
				<img src="../../assets/tupian.png" alt="" />
				<div style="width:100%;position: relative;">
					<div class="studio">工作室名称</div>
					<div class="teacher">老师们</div>
					<el-button type="warning" style="background:#ff6d43">点击报名</el-button>
					<div class="number">人数</div>
				</div>
			</div>
		</div>
		<el-tabs type="border-card">
			<el-tab-pane label="工作室简介">
				<div>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, perspiciatis ipsa aliquam, ea voluptates sequi voluptatem voluptatibus nisi facere magnam iure. Voluptatum, vero aliquid quidem culpa voluptate deleniti expedita
					delectus deserunt incidunt ut repellendus hic ipsa odio perspiciatis aliquam, autem illum sequi dolor perferendis quas iusto doloremque. Eligendi alias reprehenderit provident recusandae, accusantium voluptas nisi distinctio sint
					aliquid ad consequatur vero dolores hic, ab magni explicabo eaque? Harum enim delectus similique tempore unde quos incidunt, explicabo ratione aut quae distinctio id saepe? Dolorum aut eligendi deserunt minus repudiandae non vero
					itaque et alias recusandae magnam, quae rerum iusto molestiae ipsam eum officiis tempora incidunt, repellat blanditiis veritatis, accusantium rem. Accusantium et adipisci cum eum, soluta dolore saepe non nulla asperiores? Eum,
					vitae accusantium natus cupiditate saepe molestias culpa! Maiores aliquid minus exercitationem blanditiis sapiente. Placeat fugit a laboriosam provident, et beatae dolor recusandae, harum minus veritatis labore at laborum
					doloribus. Consequatur non blanditiis in obcaecati, fuga doloremque voluptatum placeat, nostrum, repellendus sunt porro atque quisquam officiis optio! Repudiandae totam fuga consectetur deserunt maiores provident dolores expedita
					id vero similique, possimus, pariatur natus debitis fugiat porro eaque sapiente odit dignissimos odio nesciunt itaque. Perferendis vel at porro illo fugiat, veritatis dolore accusantium voluptate nihil est! Reiciendis culpa,
					incidunt illum assumenda aperiam molestiae ducimus! Tempore veritatis obcaecati unde reiciendis dignissimos ducimus voluptatem a provident ab deleniti. Quia molestias enim perferendis illum neque quam cumque laboriosam adipisci.
					Odit et officia libero excepturi molestias illum quaerat eos maxime modi, consequuntur dignissimos, sint, dolorum hic rem placeat nisi qui. Officiis rem qui commodi ut dolor est doloribus fuga, eos dolorem nulla eius tempora iste
					quos, praesentium nostrum obcaecati recusandae vitae! Eligendi et placeat, non impedit, ex facilis libero, iste eos quisquam illum optio soluta nesciunt voluptates molestias. Officia sequi mollitia ad expedita praesentium
					adipisci, sapiente illum omnis quos quaerat eum cupiditate atque laboriosam ullam consectetur beatae modi consequatur impedit nihil repellat excepturi explicabo sunt nostrum possimus. Animi aliquam aspernatur nostrum earum
					reprehenderit obcaecati quod sunt quas harum officia. Pariatur aspernatur debitis dolor porro deserunt fuga minima exercitationem ipsa ab laudantium. Facere alias quae ratione totam a? Magnam quas accusamus, fugit modi eos nihil
					est voluptatem nobis perspiciatis dolor! Culpa rerum maxime fuga, in autem eaque, eius quia esse fugiat iure quod laudantium eveniet minima ipsum aspernatur cupiditate praesentium? Ipsa animi repellendus eum sunt! Repellendus quos
					autem soluta nemo voluptatem tempore, ullam totam sed, ex facilis error numquam iste a suscipit! Fugiat error repellendus, veritatis excepturi quis nemo nisi facere sed tenetur maiores magnam neque pariatur in omnis minima
					molestias reprehenderit quibusdam tempora ratione amet id quasi illum necessitatibus quas. Explicabo repellendus tenetur dolores quam itaque, aliquam iusto quibusdam quae optio ipsa distinctio quaerat! Accusamus delectus magni
					officia, nemo, recusandae corporis eius corrupti qui doloribus quaerat dolores, aliquid commodi. Dicta esse rerum est, minima sunt officia. Accusantium et porro similique, deserunt optio modi totam voluptates quia eius perferendis
					nobis ut fuga ullam dolores! Quidem tempore, veritatis laborum atque, optio magni totam laboriosam omnis officia debitis at!
				</div>
				<!-- <el-button type="warning" plain>点击报名</el-button> -->
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
	import topNav from '../header/topNav';
	export default {
		data() {
			return {
				src: './assets/logo.png',
			};
		},
		components: {
			topNav,
		},
	};
</script>
<style scoped>
	.studio {
		/* float: left; */
		text-align: left;
		font-size: 30px;
		color: white;
		margin: 10px 0px 0px 20px;
	}
	.teacher {
		position: absolute;
		left: 0;
		top: 60px;
		color: white;
		margin: 20px 0px 0px 20px;
	}
	.number {
		color: white;
		margin-top: 30px;
		text-align: right;
	}
	.el-tabs,
	.el-menu {
		text-align: left;
		width: 1200px;
		margin: 0 auto;
		background: transparent;
	}
	.el-tabs div {
		text-indent: 2em;
	}

	.showStudio {
		overflow: hidden;
		height: 220px;
		background-image: url('../../assets/bg.png');
		margin: 0px auto;
	}
	/* .el-button {
		height: 60px;
		width: 100%;
		margin: 20px auto;
	} */
	.el-button {
		position: absolute;
		right: 0;
		top: 20px;
		width: 190px;
		font-size: 18px;
		margin-bottom: 20px;
	}
	.number::before {
		content: '';
		display: block;
		clear: both;
	}
	.content {
		display: flex;
		width: 1200px;
		margin: 40px auto;
	}

	img {
		width: 20%;
		height: 20%;
	}
</style>
