<template>
    <div class="display-board">
        <div class="number">
        {{numberOfBeers}}
        </div>
        <div class="btn">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfBeers'],
        methods: {
            getAllBeers() {
                this.$emit('getAllBeers')
            }
        }
    }
</script>