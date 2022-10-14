<template>
    <div class='Board'>
        <h1>Board</h1>
    </div>

    <div class='board_box'>
        <div class="box_title">Title

            <div v-for='PostData in PostData' :key='PostData' class='content_title'>
                <router-link :to="'/post/' + PostData.id">{{PostData.title}}</router-link>
            </div>

        </div>

        <div class="box_date">Date
            <div v-for='PostData in PostData' :key='PostData' class='content_date'>
                <p>{{PostData.createdAt}}</p>
            </div>
        </div>

    </div>


    <div class='create_btn'>
        <router-link :to="'/Create'">
            <p>새 글</p>
        </router-link>
    </div>


</template>
    
<script>
import PostData from './Post'
import axios from 'axios'

export default {

    data() {
        return {
            PostData: [PostData]
        }
    },

    methods: {
        load() {
            axios.get('http://localhost:3030/post')
                .then((res) => {
                    this.PostData = res.data
                })
        }
    },
    created() {
        this.load();

    },

}

</script>
    
<style>
a {
    text-decoration: none;

}

a:visited {
    color: blue;
}

.create_btn a:visited {
    color: white;
}



.content_title {
    background-color: white;
    border-bottom: 1px solid rgb(131, 131, 131);
}

p {
    margin: 0;
}

.Board {
    transform: translate(-6%);
}

.content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_date {
    border-bottom: 1px solid rgb(131, 131, 131);
    background-color: white;
}

.board_box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

.create_btn p {
    border: 8px solid #0573e1;
    border-radius: 5px;
    background-color: #0573e1;
}

.create_btn {
    margin-top: 10px;
    width: 4%;
    height: 20px;
    transform: translateX(245%);

}

.box_title {
    width: 60%;
    background-color: #dedede;

}

.box_date {
    width: 20%;
    border-left: 3px solid #2c3e50;
    background-color: #dedede;

}

h1 {
    float: left;
    margin-left: 300px;
}

.Board h1 {
    width: 100%;
    margin-left: 0px;
    transform: translateX(-30%);
}
</style>