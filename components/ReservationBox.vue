<template>
    <div class="reservation-form">
        <div class="reservation-fields">
            <div class="field">
                <label for="arrival-date">Arrival date</label>
                <input
                    type="date"
                    id="arrival-date"
                    v-model="form.arrivalDate"
                />
            </div>
            <div class="field">
                <label for="departure-date">Departure date</label>
                <input
                    type="date"
                    id="departure-date"
                    v-model="form.departureDate"
                />
            </div>
            <div class="field dropdown">
                <label for="number-of-people">Number of people</label>
                <div @click="toggleDropdown" class="dropdown-trigger">
                    {{ form.numberOfPeople }}
                </div>
                <ul v-if="isDropdownOpen" class="dropdown-menu">
                    <li
                        v-for="n in 5"
                        :key="n"
                        @click="selectNumberOfPeople(n)"
                    >
                        {{ n }}
                    </li>
                </ul>
            </div>
            <button class="book-button" @click="submitForm">BOOK A STAY</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                arrivalDate: this.getTodayDate(), // Bugünün tarihi
                departureDate: this.getTodayDate(1), // Bir gün sonrası
                numberOfPeople: 1,
            },
            isDropdownOpen: false,
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        },
        selectNumberOfPeople(n) {
            this.form.numberOfPeople = n
            this.isDropdownOpen = false
        },
        submitForm() {
            console.log('Form submitted:', this.form)
        },
        getTodayDate(addDays = 0) {
            const today = new Date()
            today.setDate(today.getDate() + addDays)
            const year = today.getFullYear()
            const month = String(today.getMonth() + 1).padStart(2, '0')
            const day = String(today.getDate()).padStart(2, '0')
            return `${year}-${month}-${day}` // YYYY-MM-DD formatı
        },
    },
}
</script>

<style scoped>
.reservation-form {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #fff;
    border-radius: 0.5rem;
    height: 130px;
    justify-content: center;
    padding: 0.4rem 1rem 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .reservation-fields {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        .field {
            flex: 1;
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 3.4rem;
        }
    }
}

label {
    font-size: 20px;
    font-weight: 500;
    color: #a67c52;
    margin-bottom: 0.5rem;
}

input {
    border-top: 1px solid rgba(82, 82, 82, 0.43);
    width: 150px;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: transparent;
    color: rgba(82, 82, 82, 0.73);
    cursor: pointer;
}

.dropdown {
    position: relative;
}

.dropdown-trigger {
    border-top: 1px solid rgba(82, 82, 82, 0.43);
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1rem;
    color: rgba(82, 82, 82, 0.73);
}

.dropdown-menu {
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 80px;
    left: 0;
    z-index: 10;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 0;
    margin: 0;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    overflow: hidden;
}

.dropdown-menu li {
    justify-content: center;
    width: 150px;
    padding: 0.5rem;
    cursor: pointer;
    text-align: center;
}

.dropdown-menu li:hover {
    background: #f5f5f5;
}

.book-button {
    background: #4caf50;
    color: #fff;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.3s all ease;
}

.book-button:hover {
    background: #45a049;
}
</style>
