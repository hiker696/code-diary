<template>
    <div class="person">
        <h2>姓名：{{  name }}</h2>
        <h2>nianlinig:{{  age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看练习方式</button>
    </div>
</template>

<script lang=" ts">
export default{
    name:'Person',
    setup(){
        //数据,原来是写在data，此时name,age,tel都不是响应式的
        let name = '张三';//注意此时的name不是响应式的
        let age = 18;//响应式数据需要使用ref或reactive
        let tel = '1234567890'//

        //方法
        function changeName() {
            name = '李四',
            console.log(name);
        }
        function changeAge() {
            age += 1,
        console.log(age);
        }
        function showTel() {
            alert(tel)
            console.log(tel);
        }

        return{
            name,
            age,
            changeAge,
            changeName,
            showTel
        }
    }
}
</script>

<style scoped>
.person {
    /* Add your styles here */
    background-color: skyblue;
    padding: 20px;
    border-radius: 5px;
    font-family: Arial, sans-serif;
}
button{
    margin:0 5px;
}
</style>
