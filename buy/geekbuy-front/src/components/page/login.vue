<template>
    <div class="login-container" >
        <el-card class="box-card">
            <div class="login-body">
                <div class="login-title" @click="toIndex" >欢迎来到GeekBuy即刻买！</div>
                <el-form ref="form" :model="userForm">
                    <el-input placeholder="请输入账号..." v-model="userForm.accountNumber" class="login-input">
                        <template slot="prepend"> 
                            <div class="el-icon-user-solid"></div>
                        </template>
                    </el-input> 
                    <el-input placeholder="请输入密码..." v-model="userForm.userPassword" class="login-input"
                              @keyup.enter.native="login"  show-password>
                        <template slot="prepend">
                            <div class="el-icon-lock"></div>
                        </template>
                    </el-input>
                    <div class="login-submit" >
                        <el-button type="primary" @click="login">登录</el-button>
                        <el-button type="warning" autocomplete="off" @click="$router.push('/sign-in')" style="margin-left: 20px">注册</el-button>
                    </div>
                    <div class="other-submit">
                        <router-link to="/login-admin" class="sign-in-text">管理员登录</router-link>
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
                    userPassword: ''
                }
            };
        },

        methods: {
            login() {
                this.$api.userLogin({
                    accountNumber: this.userForm.accountNumber,
                    userPassword: this.userForm.userPassword
                }).then(res => {
                    console.log(res);
                    if (res.status_code === 1) {
                        res.data.signInTime=res.data.signInTime.substring(0,10);
                        this.$globalData.userInfo = res.data;
                        this.$router.replace({path: '/index'});
                    } else {
                        this.$message.error(res.msg);
                    }
                });
            },
            toIndex() {
                this.$router.replace({path: '/index'});
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
        height: 100%;
        padding: 40px; 
        width: 350px; 
        background: #fff; 
        border-radius: 10px; 
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1); 
        text-align: center; 
    }

    .login-title {
        color: #333; 
        margin-bottom: 40px; 
        padding-bottom: 30px;
        text-align: center;
        font-weight: 600;
        font-size: 20px;
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

.el-button[type="primary"] {
    background-color: #5e72e4; 
    border-color: #5e72e4;
}
    .login-submit {

        display: flex;

    }

    .sign-in-container {
        padding: 0 10px;
    }

    .sign-in-text {
        color: #409EFF;
        font-size: 16px;
        text-decoration: none;
        line-height:28px;
    }
    .el-button[type="warning"] {
    background-color: #fbc658;
    border-color: #fbc658;
}
    .other-submit{
        display:flex;
        margin-left: 200px;

    }
    .login-submit, .other-submit {
        margin-top: 20px; 
    justify-content: space-between;
}
</style>