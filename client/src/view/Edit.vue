<template>
    <div class="Edit">
        <div class='Title'>
            <h1>Title</h1>
        </div>
        <div id="v-model-basic" class="edit_title">
            <textarea v-model='Data.title' ref='title' placeholder="내용을 입력하세요"></textarea>
        </div>
        <div class='Title'>
            <h1>Content</h1>
        </div>
        <div id="v-model-basic" class="edit_content">
            <textarea v-model='Data.content' ref='content' placeholder="내용을 입력하세요"></textarea>
        </div>
        <div class='complate_btn' @click='edit'>
            <p>작 성</p>
        </div>
        <div class='cancel_btn'>
            <router-link :to="'/'">
                <p>취 소</p>
            </router-link>
        </div>
    </div>
</template>
    
<script>
import post from '../Post'
import axios from 'axios'

export default {
    data() {
        return {
            Data: post,
            form: "",
        }
    },
    methods: {
        edit() {
            this.form = {
                title: this.Data.title,
                content: this.Data.content
            }
            const id = this.$route.params.id
            axios.put(`http://localhost:3030/post/${id}`, this.form)
                .then((axios.get('http://localhost:3030/post')
                    .then((res) => {
                        this.PostData = res.data
                        this.$router.go(-1)
                    })))
        }

    },

    created() {
        const id = this.$route.params.id
        axios.get(`http://localhost:3030/post/${id}`)
            .then((res) => {
                this.Data = res.data
            })

    }
}
</script>
    
<style>
.Edit {
    display: block;
}

.Title {
    width: 100%;
    transform: translate(-22%, 20%);
    padding-bottom: 90px;
}

.edit_content textarea {
    height: 364px;
    width: 100%;
    font-size: 20px;

}

.edit_title textarea {
    width: 100%;
    height: 40px;
    font-size: 30px;
}
</style>