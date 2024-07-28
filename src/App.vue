<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import "./style.css";
</script>

<template>
    <header class="flex justify-between items-center flex-col">
        <label class="text-2xl font-bold text-fuchsia-50">Twpic</label>
        <div class="flex gap-2">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </div>
    </header>
    <main>
        <RouterView class="text-white"/>
    </main>
</template>
