<template>
    <div class="navbar-main-container">
        <div class="navbar-left-area">
            <div class="links">
                <div class="logo">
                    <a href="#" class="logo-link">
                        Hotel
                        <span>Beeline</span>
                    </a>
                </div>
                <div class="navlink rooms">
                    <a href="#">Rooms</a>
                </div>
                <div class="navlink gallery">
                    <a href="#">Gallery</a>
                </div>
                <div class="navlink contact">
                    <a href="#">Contacts</a>
                </div>
            </div>
        </div>
        <div class="bg-header">
            <div class="book-button">
                <a href="#"> BOOK NOW </a>
            </div>
        </div>
    </div>
</template>
<style>
.navbar-main-container {
    display: flex;
    flex-direction: row;
    position: relative;
    .navbar-left-area {
        width: 50%;
        padding: 0 30px;
        height: 80px;
        border-bottom: 1px solid dimgray;
        position: relative;
        .links {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            height: 100%;
            .logo {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
                a.logo-link {
                    color: black;
                    font-size: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    text-align: right;
                    position: relative;
                    padding-left: 40px;
                    letter-spacing: 3px;
                    font-weight: 300;
                    span {
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 32px;
                        position: absolute;
                        bottom: -33px;
                        left: 0;
                        color: #a67c52;
                        font-family: Libre Baskerville serif;
                    }
                }
            }
            .navlink {
                height: fit-content;
                font-size: 16px;
                font-weight: 500;
                transition: 0.35s all ease;
            }
        }
    }
    .bg-header {
        width: 50%;
        right: 0;
        top: 0;
        max-width: 750px;
        min-width: 550px;
        height: 100vh;
        display: flex;
        justify-content: flex-end;
        padding: 30px 30px;
        position: absolute;
        background-image: url('/gallery/header-bg.jpg');
        background-size: cover;
        background-position: center;
        filter: contrast(120%) grayscale(0.3);
        a {
            color: white;
            border: 1px solid white;
            padding: 15px 20px;
            font-size: 16px;
            font-weight: 500;
        }
    }
}
</style>
<script setup lang="ts"></script>
