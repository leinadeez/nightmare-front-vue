<template>
    <nav>
        <ul>
            <li><a href="/">Username <img src="@/assets/img/IMG_20180921_174508_314.jpg" /></a></li>
            <li><a href="#/writer/">Writer</a></li>
        </ul>
    </nav>
</template>
<script>
import VueRouter from 'vue-router'

export default {
    name: 'IncredibleMenu',
    methods: {
    }
}
</script>
<style lang="scss">
nav {
    width: 100%;
    height: 40px;
    background-image: linear-gradient(#222, #000);
    ul {
        float:right;
        li {
            list-style: none none;
            height:40px;
            float:right;
            line-height: 40px;
            padding-right: 10px;
            a {
                color:#fff!important;
                font-weight:bold;
                text-decoration: none!important;
                border-right: 1px solid $border-color;
                padding-right: 10px;
            }
            img {
                border-radius:5px;
                width:28px;
                height:28px;
            }
        }
        li:first-child a { 
            border-right: none;
            padding-right: 0;
        }
        
    }
    
}

</style>