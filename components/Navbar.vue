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
    .navbar-left-area {
        width: 50%;
        padding: 0 30px;
        height: 70px;
        border-bottom: 1px solid dimgray;
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
        max-width: 750px;
        min-width: 550px;
        height: 100vh;
        background: #a67c52;
        display: flex;
        justify-content: flex-end;
        padding: 30px 30px;
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
