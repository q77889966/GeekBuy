<template>
    <div class="login-container">
        <el-card class="box-card">
            <div class="login-body">
                <div class="login-title">后台管理</div>
                <el-form ref="form" :model="userForm">
                    <el-input placeholder="请输入管理员账号" v-model="userForm.accountNumber" class="login-input">
                        <template slot="prepend">
                            <div class="el-icon-user-solid"></div>
                        </template>
                    </el-input>
                    <el-input placeholder="请输入管理员密码" v-model="userForm.adminPassword" class="login-input"
                              @keyup.enter.native="login"  show-password>
                        <template slot="prepend">
                            <div class="el-icon-lock"></div>
                        </template>
                    </el-input>
                    <div class="login-submit" style="margin-top: 20px"  >
                        <el-button type="primary" @click="login">登录</el-button>
                        <el-button type="warning" autocomplete="off" @click="$router.push('/login')" style="margin-left: 20px">返回前台</el-button>
                    </div>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                userForm: {
                    accountNumber: '',
                    adminPassword: ''
                }
            };
        },
        methods: {
            login() {
                this.$api.adminLogin({
                    accountNumber: this.userForm.accountNumber,
                    adminPassword: this.userForm.adminPassword
                }).then(res => {
                    console.log(res);
                    if (res.status_code === 1) {
                        console.log(res);
                        this.$sta.isLogin = true;
                        this.$sta.adminName=res.data.adminName;
                        this.$router.replace({path:'/platform-admin'});
                    } else {
                        this.$message.error('登录失败，账号或密码错误！');
                    }
                });

            }
        }
    }
</script>

<style scoped>
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-color: #f9f9f9; 
    }
    .login-body {
        padding: 40px 50px;
    width: 350px; 
    background: #fff;
    border-radius: 10px; 
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        height: 100%;
    }
    .login-title {
        padding-bottom: 30px;
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        color: #333;
    margin-bottom: 40px;
        cursor: pointer;
    }
    .login-input {
        margin-bottom: 25px;
    }
    .el-input__inner {
    border-radius: 20px; 
}

.el-button {
    border-radius: 20px; 
}
.el-button[type="warning"] {
    background-color: #fbc658; 
    border-color: #fbc658;
}


.el-button[type="primary"] {
    background-color: #5e72e4; 
    border-color: #5e72e4;
}
    .login-submit {
        display: flex;
        justify-content: space-between;
        margin-top: 20px; 
    }
    .sign-in-text {
        color: #409EFF;
        font-size: 16px;
        text-decoration: none;
        line-height:28px;
    }
    .other-submit{
        display:flex;
        justify-content: space-between;
        margin-top: 10px;
    }
</style>