<template>
    <form v-on:submit="submitPost" id="formPost">
        <input type="text" class="postTitle" v-model="postTitle" name="postTitle" placeholder="Title" />
        <input type="text" class="postSubtitle" v-model="postSubtitle" name="postSubtitle" placeholder="Subtitle" />
        <textarea placeholder="Write your text here" v-model="postContent" name="postContent" />
        <input type="text" class="postTags" name="postTags" v-model="postTags" placeholder="Type your tags" />
        <button type="submit">Publish!</button>
    </form>
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

</style>