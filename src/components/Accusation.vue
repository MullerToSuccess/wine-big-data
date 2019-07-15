<template>
    <div id="accusation">
        <div class="accusation-content">
            <span class="title">
                消费者举报
            </span>
        </div>
        <div class="accusation-content">
            <span class="title">
               酒企申述
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Accusation',
    data(){
        return{

        }
    }
}
</script>
<style lang='scss' scoped>
#accusation{
    width: 80%;
    margin: auto;
    height: 500px;
    display: flex;

    .accusation-content{
        width: 200px;
        height: 200px;
        border: 1px solid red;
        margin-left: 20px;
    }
}
</style>
