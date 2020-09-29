<template>
	<div>
		<div>
			<el-row>
				<el-col :span="8" v-for="o in 12" :key="o" style="padding:10px 10px 0px 10px">
					<el-card :body-style="{ padding: '15px' }" shadow="hover">
						<img src="../../assets/tupian.png" class="image" />
						<div style="padding: 10px 10px 0px;">
							<span class="studioName">工作室名称</span>
							<div class="bottom clearfix">
								<div class="time clearfix">
									<span class="textLeft">老师</span>
									<span class="textRight">人数</span>
								</div>
								<el-button type="text" class="button" style="padding-top: 10px;">
									<el-link href="https://element.eleme.io" target="_blank" type="primary" style="color: white;">点击报名</el-link>
								</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>
		<div>
			<div class="block" v-if="list <= 7">
				<el-pagination layout="prev, pager, next" :total="50" :page-size="12" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
			</div>
			<div class="block" v-else>
				<el-pagination layout="prev, pager, next" :total="1000" :page-size="12" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				studioList: [],
				list: 6,
			};
		},
		methods: {
			handleSizeChange() {
				console.log(1);
			},
			handleCurrentChange(val) {
				console.log(val);
			},
		},
	};
</script>

<style>
	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}
	.studioName {
		font-size: 24px;
		font-weight: bold;
	}
	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: '';
	}

	.clearfix:after {
		clear: both;
	}
	.el-link {
		padding: 8px;
		/* border: 1px solid black; */
		font-size: 16px;
		background: #409eff;
	}
	.textLeft {
		font-size: 12px;
		float: left;
	}
	.textRight {
		font-size: 12px;
		float: right;
	}
</style>
