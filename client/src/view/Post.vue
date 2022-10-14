<template>
    <div class="post">
        <div class="post_title">
            {{Data.title}}
        </div>

        <div class="post_content">
            {{Data.content}}
        </div>

        <div class="BTN">
            <div class='back_btn'>
                <router-link :to="'/'">
                    <p>
                        뒤로가기
                    </p>
                </router-link>
            </div>
            <div class='edit_btn'>
                <router-link :to="'/Edit/' + Data.id">
                    <p>수 정</p>
                </router-link>
            </div>

            <div class='delete_btn'>

                <p @click='remove'>삭 제</p>

            </div>

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
        }
    },

    methods: {
        remove() {
            const id = this.$route.params.id
            axios.delete(`http://localhost:3030/post/${id}`)
                .then(axios.get('http://localhost:3030/post')
                    .then((res) => {
                        this.PostData = res.data
                        this.$router.go(-1)
                    }))
        },
    },
    created() {
        const id = this.$route.params.id
        axios.get(`http://localhost:3030/post/${id}`)
            .then((res) => {
                this.Data = res.data
            })
        if (!id) {
            console.log('1');
        }

    }

}
</script>
    
<style>
.BTN a {
    color: white;
}

.BTN a:visited {
    color: white;
}

.back_btn p {
    border: 8px solid #0573e1;
    background-color: #0573e1;
    border-radius: 5px;
}

.back_btn {
    margin-top: 10px;
    width: 6%;
    height: 20px;
    transform: translate(0%, 0%);
    margin-right: 45px;
    cursor: pointer;
}

.edit_btn p {
    border: 8px solid #0573e1;
    background-color: #0573e1;
    border-radius: 5px;
}

.edit_btn {
    width: 4%;
    height: 20px;
    transform: translate(170%, -100%);
    margin-right: 10px;
    cursor: pointer;
}

.delete_btn p {
    border: 8px solid #e10505;
    background-color: #e10505;
    border-radius: 5px;
}

.delete_btn {
    width: 4%;
    height: 20px;
    color: white;
    transform: translate(290%, -200%);
    cursor: pointer;
}

.post_title {
    min-width: 100%;
    background-color: rgb(240, 240, 240);
    font-size: 25px;
    border: 1px solid rgb(156, 156, 156);
}

.post_content {
    min-width: 100%;
    font-size: 20px;
    border: 1px solid rgb(156, 156, 156);
}

.post {
    display: block;
}
</style>