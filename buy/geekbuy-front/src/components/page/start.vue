<template><div>
    <app-head></app-head>
        <app-body>
    <div class="geek-start-container">
        <h1>GeekStart™ 即刻启动服务</h1>
        <p>我们的GeekStart™即刻启动功能为电脑新手提供二手配件代装主机服务。您可以在线自由挑选我们仓库中的配件，所有配件均已通过Geek认证™。即使您不熟悉电脑配置，只需告知我们您的预算，我们便能为您提供合理的搭配建议。</p>
        <el-form ref="geekStartForm" :model="geekStartForm" label-width="120px">
            <el-form-item label="预算">
                <el-input v-model.number="geekStartForm.budget" placeholder="请输入您的预算"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="geekStartForm.contact" placeholder="请输入您的微信或QQ号"></el-input>
            </el-form-item>
            <el-form-item label="其他需求">
                <el-input
                    type="textarea"
                    v-model="geekStartForm.otherRequirements"
                    placeholder="如有其他特殊需求，请填写在此处">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
    <app-foot></app-foot>
    </app-body>
</div>
</template>

<script>
import AppHead from '../common/AppHeader.vue';
    import AppBody from '../common/AppPageBody.vue'
    import AppFoot from '../common/AppFoot.vue'
export default {
    components: {
            AppHead,
            AppBody,
            AppFoot
        },
    data() {
        return {
            geekStartForm: {
                budget: '',
                contact: '',
                otherRequirements: ''
            }
        };
    },
    methods: {
    submitForm() {
        console.log('表单数据', this.geekStartForm);
        // 发送数据到后端
        this.$api.submitGeekStartRequest(this.geekStartForm).then(response => {
            if(response.status_code === 1) {
                this.$message.success('请求已成功提交');
            } else {
                this.$message.error('提交失败：' + response.msg);
            }
        }).catch(error => {
            console.error('提交出错', error);
            this.$message.error('提交出错，请稍后再试');
        });
    }
}

};
</script>

<style scoped>
.geek-start-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}
</style>
