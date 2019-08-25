<template>
    <div class="about-container">
        <h2>This is a sample header</h2>
        <div class="about-description">
            <p>This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text.
                This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text.
                This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text.
                This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text.
                This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text.
            </p>
            <p>More text here. More text here. More text here</p>
        </div>
        <button id='about-button'>More Info</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            x: 1,
        };
    },
});
</script>

<style scoped>
.about-container {
    color: white;
    text-align: left;
    padding: 10%;
}
.about-container > h2 {
    font-size: 35px;
    font-weight: 600;
}
#about-button {
    width: 180px;
    margin-top: 17px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    background-color: rgb(11, 11, 143);
    border: 1px solid rgb(11, 11, 143);
    border-radius: 20px;
    height: 40px;
}
#about-button:hover {
    background-color: rgb(35, 35, 150);
    border: 1px solid rgb(0, 0, 94);
}
</style>