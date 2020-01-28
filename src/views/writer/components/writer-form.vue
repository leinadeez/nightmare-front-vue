<template>
    <div class="container">
        <div class="row">
            <h1>Write your content</h1>
        </div>
        <div class="row">
            <form v-on:submit="submitPost" id="formPost" class="col-8s">
                <label>Title
                <input type="text" class="postTitle" v-model="postTitle" name="postTitle" placeholder="Title" /></label>
                <label>Subtitle
                <input type="text" class="postSubtitle" v-model="postSubtitle" name="postSubtitle" placeholder="Subtitle" /></label>
                <label>Content
                <textarea placeholder="Write your text here" v-model="postContent" name="postContent" /></label>
                <!--<label>Tags
                <input type="text" class="postTags" name="postTags" v-model="postTags" placeholder="Type your tags" /></label>-->
                <button type="submit">Publish!</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import VueRouter from 'vue-router'

export default {
    name: 'WriterForm',
    data() {
        return {
            postTitle: '',
            postSubtitle: '',
            postContent: '',
            postTags: ''
        }
    },
    methods: {
        submitPost(event) {
            event.preventDefault()
            axios.post('http://192.168.0.16:3000/posts', {
                "title": this.postTitle,
                "subtitle": this.postSubtitle,
                "content": this.postContent,
                "author": "Dani"
                })
                .then((response) => {
                    console.log("Post salvo!", response)
                    this.$router.push('/')
                    location.reload()
                })
                .catch((error) => {
                    alert(error)
            });  
        }
    }
}
</script>
<style scoped lang="scss">
label {
    width: 100%;
}
input[type='text'], textarea{
    width: 100%;
    background-color: #eee;
    border: 1px solid $border-color;
    border-radius: 10px;
    margin-bottom: 10px;
    opacity: 1;
}
textarea {
    height: 300px;
}
</style>