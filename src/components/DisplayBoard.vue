<template>
    <div class="display-board">
        <div class="number">
        {{numberOfUsers}}
        </div>
        <div class="btn">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfUsers'],
        methods: {
            getAllUsers() {
                this.$emit('getAllUsers')
            }
        }
    }
</script>