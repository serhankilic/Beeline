<script setup>
import Navbar from '~/components/Navbar.vue'
import HeaderContent from '~/components/HeaderContent.vue'
</script>
<template>
    <div class="main-header">
        <nav>
            <div class="navigation">
                <Navbar />
            </div>
        </nav>
        <HeaderContent />
    </div>
</template>
<style>
.main-header {
    nav {
        .navigaton {
        }
    }
}
</style>
