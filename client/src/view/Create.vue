<template>
    <div class="create">
        <div class='Title'>
            <h1>Title</h1>
        </div>

        <div id="v-model-basic" class="create_title">
            <input v-model='title' ref='title' placeholder="제목을 입력하세요" />
        </div>
        <div class='Title'>
            <h1>Content</h1>
        </div>

        <div id="v-model-basic" class="create_content">
            <textarea v-model='content' ref='content' placeholder="내용을 입력하세요"></textarea>
        </div>
        <div class='complate_btn' @click='create'>
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
import axios from 'axios'

export default {
    data() {
        return {
            title: "",
            content: "",
            form: "",
        }
    },
    methods: {
        create() {
            this.form = {
                title: this.title,
                content: this.content
            }
            axios.post('http://localhost:3030/create', this.form)
                .then(axios.get('http://localhost:3030/post')
                    .then((res) => {
                        this.PostData = res.data
                        this.$router.go(-1)
                    }))
        }
    }
}
</script>
    
<style>
.create {
    width: 100%;
}

.Title {
    width: 100%;
    transform: translate(-22%, 20%);
    padding-bottom: 90px;
}

.cancel_btn a {
    color: white;
}

.cancel_btn a:visited {
    color: white;
}

.cancel_btn {
    max-width: 3%;
    margin-top: 10px;
    transform: translate(170%, -126%);
}

.cancel_btn p {
    width: 100%;
    border: 8px solid #e10505;
    background-color: #e10505;
    color: white;
    border-radius: 5px;

}

.complate_btn {
    margin-top: 10px;
    max-width: 3%;
}

.complate_btn p {
    border-radius: 5px;
    border: 8px solid #0573e1;
    background-color: #0573e1;
    color: white;
    width: 100%;
    cursor: pointer;
}

.complate_btn a:visited {
    color: white;
}

.complate_btn a {
    color: white;
}

.create_content textarea {
    height: 364px;
    width: 100%;
    font-size: 20px;

}

.create_title input {
    width: 100%;
    height: 30px;
    font-size: 20px;
}
</style>