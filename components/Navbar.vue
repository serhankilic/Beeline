<template>
    <div class="navbar-main-container">
        <div class="navbar-left-area">
            <div class="links">
                <div class="logo">
                    <a href="#">
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
        height: 70px;
        border-bottom: 1px solid dimgray;
        position: relative;
        .links {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            .logo {
                margin-bottom: 10px;
                display: flex;
                a {
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
                font-size: 18px;
                font-weight: 500;
                border-bottom: 1px solid transparent;
                margin-top: 20px;
                transition: 0.35s all ease;
            }
            .navlink:hover {
                border-bottom: 1px solid #a67c52;
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
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            filter: contrast(120%);
        }
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
