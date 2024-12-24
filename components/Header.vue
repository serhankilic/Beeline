<script setup>
import Navbar from '~/components/Navbar.vue'
import HeaderContent from '~/components/HeaderContent.vue'
import ReservationBox from '~/components/ReservationBox.vue'
</script>
<template>
    <div class="main-header">
        <nav>
            <div class="navigation">
                <Navbar />
            </div>
        </nav>
        <HeaderContent />
        <ReservationBox />
    </div>
</template>
<style>
.main-header {
    nav {
        .navigaton {
            .navbar-main-container {
                position: relative;
                z-index: 1;
            }
        }
    }
    .reservation-form {
        position: relative;
        z-index: 2;
        margin-top: 3rem;
        margin-left: 4rem;
    }
}
</style>
