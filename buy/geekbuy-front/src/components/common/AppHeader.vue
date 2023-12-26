<template>
    <div class="header">
        <div class="header-container">
            <div class="app-name">
                <router-link to="/"><b style="color: #333" >GeekBuy</b></router-link>

            </div>
            
            <div class="search-container">
                <el-input placeholder="欢迎来到GeekBuy，即刻买！" v-model="searchValue" @keyup.enter.native="searchIdle">
                    <el-button slot="append" icon="el-icon-search" @click="searchIdle"></el-button>
                </el-input>
            </div>
            <el-button type="primary" icon="el-icon-s-tools"  @click="tool">工具</el-button>  
                <el-button type="primary" icon="el-icon-plus"  @click="toRelease">即刻发布</el-button>
            
            <el-button type="primary" icon="el-icon-chat-dot-round" @click="toMessage">消息</el-button>
            <router-link v-if="!isLogin" class="user-name-text" to="/login">登录</router-link>
            <el-dropdown trigger="click" v-else>
                <div style="cursor:pointer;display: flex;align-items: center;">
                    <div style="font-size: 16px;color: #666;padding-right: 5px;">{{nicknameValue?nicknameValue:nickname}}</div>
                    <el-avatar :src="avatarValue?avatarValue:avatar"></el-avatar>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><div @click="toMe">个人中心</div></el-dropdown-item>
                    <el-dropdown-item divided style="color: red;"><div @click="loginOut">退出登录</div></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'Header',
        props: ['searchInput','nicknameValue','avatarValue'],
        data() {
            return {
                searchValue: this.searchInput,
                nickname:'登录',
                avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                isLogin:false
            };
        },
        created(){
            // console.log("header");
            if(! this.$globalData.userInfo.nickname){
                this.$api.getUserInfo().then(res=>{
                    console.log('Header getUserInfo:',res);
                    if(res.status_code===1){
                        this.nickname=res.data.nickname;
                        this.avatar=res.data.avatar;
                        res.data.signInTime=res.data.signInTime.substring(0,10);
                        this.$globalData.userInfo=res.data;
                        this.isLogin=true;
                    }
                })
            }else {
                this.nickname=this.$globalData.userInfo.nickname;
                this.avatar=this.$globalData.userInfo.avatar;
                this.isLogin=true;
            }
        },
        methods: {
            searchIdle() {
                if ('/search' !== this.$route.path) {
                    this.$router.push({path: '/search', query: {searchValue: this.searchValue}});
                } else {
                    this.$router.replace({path: '/search', query: {searchValue: this.searchValue}});
                    this.$router.go(0);
                }

            },
            toMe() {
                if ('/me' !== this.$route.path) {
                    this.$router.push({path: '/me'});
                }
            },
            toMessage(){
                if ('/message' !== this.$route.path) {
                    this.$router.push({path: '/message'});
                }
            },
            toRelease(){
                if ('/release' !== this.$route.path) {
                    this.$router.push({path: '/release'});
                }
            },
            tool(){
                if ('/tool' !== this.$route.path) {
                    this.$router.push({path: '/tool'});
                }
            },
            loginOut(){
                this.$api.logout().then(res=>{
                    if(res.status_code===1){
                        this.$globalData.userInfo={};
                        console.log("login out");
                        if ('/index' === this.$route.path) {
                            this.$router.go(0);
                        }else {
                            this.$router.push({path: '/index'});
                        }
                    }else {
                        this.$message.error('网络或系统异常，退出登录失败！');
                    }
                });

            }
        }
    };
</script>
<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 58px;
        background: #ffffff;
        display: flex;
        justify-content: center;
        border-bottom: #eeeeee solid 2px;
        z-index: 1000;
        background-color: #f8f8f8;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .header-container {
        width: 1000px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        padding: 0 20px;
    }
/* 主按钮 */
.el-button--primary {
    background-color: #5e72e4; 
    border-color: #5e72e4;
    color: white;
}

/* 主按钮悬浮效果 */
.el-button--primary:hover {
    background-color: #4b60d1;
    border-color: #4b60d1;
}

/* 次级按钮 */
.el-button--info {
    background-color: #11cdef; 
    border-color: #11cdef;
    color: white;
}

/* 次级按钮悬浮效果 */
.el-button--info:hover {
    background-color: #0bb2d4;
    border-color: #0bb2d4;
}

/* 文本按钮 */
.el-button--text {
    color: #5e72e4; 
}

/* 文本按钮悬浮效果 */
.el-button--text:hover {
    color: #4b60d1;
}
    .app-name a {
        color: #333;
        font-weight: bold;
        font-size: 28px;
        text-decoration: none;
    }
    .el-input, .el-button {
    border-radius: 20px;
}

.el-avatar {
    border: 1px solid #ddd;
}
    .search-container {
        width: 400px;
        border: 1px solid #ddd;
        border-radius: 20px;
    }
    .user-name-text{
        font-size: 16px;
        font-weight: 600;
        color: #666;
        cursor: pointer;
        text-decoration: none;
    }
</style>
