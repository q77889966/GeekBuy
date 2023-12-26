
<template>
    <div>
        <app-head></app-head>
        <app-body>
            
        <el-table :data="fileList" style="width: 100%">
            <el-table-column prop="name" label="文件名"></el-table-column>
            <el-table-column prop="size" label="大小" width="120">
                <template slot-scope="scope">
                    {{ formatSize(scope.row.size) }}
                </template>
            </el-table-column>
            <el-table-column prop="modified" label="修改日期" width="180">
                <template slot-scope="scope">
                    {{ formatDate(scope.row.modified) }}
                </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                    <el-button 
        v-if="!scope.row.isDirectory" 
        type="primary" 
        size="small" 
        @click="downloadFile(scope.row.name)">下载</el-button>
                </template>
            </el-table-column>
        </el-table>
        <app-foot></app-foot>
        </app-body>
    </div>
</template>

<script>
import axios from 'axios';
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
            fileList: []
        };
    },
    created() {
        this.fetchFiles();
    },
    methods: {
        fetchFiles() {
            axios.get('/list')
                .then(response => {
                    this.fileList = response.data;
                })
                .catch(error => {
                    console.error('Error fetching files:', error);
                });
        },
        formatSize(size) {

        if (size < 1024) return size + ' B';
        else if (size < 1048576) return (size / 1024).toFixed(2) + ' KB';
        return (size / 1048576).toFixed(2) + ' MB';
    },
    formatDate(timestamp) {

        return new Date(timestamp).toLocaleDateString();
    }
},


};
</script>
