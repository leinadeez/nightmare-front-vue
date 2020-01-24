<template>
    <div class="writter">
        <writer-form />
    </div>
</template>

<script>
import WriterForm from './components/writer-form'

export default {
    name: 'Writer',
    computed: {

    },
    components: {
        'writer-form': WriterForm
    }
}
</script>
<style scoped>

</style>