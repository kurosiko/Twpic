<script setup lang="ts">
    import { events } from "@react-three/fiber";
import { ref } from "vue";
const status = ref<boolean>(true);
const bol = (await chrome.storage.local.get("test")).test
if (typeof bol == "boolean") {
    status.value = bol
} else {
    await chrome.storage.local.set({"test":true})
}


const clicked = async(event) => {
    console.log(event.target.checked)
    await chrome.storage.local.set({
        "test" : event.target.checked})
}
const testFunc = (event) => {
    
}
</script>

<template>
    <div><input type="checkbox" v-model="status" @click="clicked">{{ status ? "ON" : "OFF" }}</input>
        <input type="checkbox" v-model="status" @click="clicked">{{ status ? "ON" : "OFF" }}</input>
    </div>
</template>
