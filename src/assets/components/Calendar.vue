<template>
    <section>
        <b-field label="">
            <b-datepicker
                    v-model="date"
                    placeholder="Выберите день"
                    icon="calendar-today"
                    :month-names=monthNames
                    :first-day-of-week="1"
                    :day-names="dayNames"
                    trap-focus>
            </b-datepicker>
        </b-field>
    </section>
</template>

<script>
    export default {
        name: "Calendar",
        data() {
            return {
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                dayNames: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
                date: new Date()

            }
        }
    }
</script>

<style>
    .input  {
        text-align: center;
    }
</style>
