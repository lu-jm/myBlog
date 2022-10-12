<script lang="ts" setup>
import { ref,onMounted } from "vue";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import 'monaco-editor/esm/vs/editor/editor.main.js'
const monacoRef=ref()
onMounted(()=>{
    const monacoInstance=monaco.editor.create(monacoRef.value,{
        value:"console.log('sss')",
        language:'javascript'
    })
    console.log(monacoInstance);
    
})

const runCode=()=>{

}
</script>

<template>
    <div class="monaco" ref="monacoRef"></div>
    <button @click="runCode">run</button>
</template>

<style>
.monaco{
    height:200px
}
</style>