<template>
    <div class='faq-container'> 
        <div class='categories'>
            <div v-for="name in Object.keys(faqData)" :key="name" @click="selected=name" :style="name===selected ? selectedCategoryStyle:{}" class='category-bubble'>
                {{ name.charAt(0).toUpperCase()+name.substring(1) }}
            </div>
        </div>
        <div class='faq-area'>  
            <div v-for="(elm,index) in faqData[selected]" :key="elm.q" @click="expanded = expanded!==index ? index:null" class="question-box">
                <div class="question"> 
                    {{ elm.q }} 
                    <span :class="{arrow:true, rotate:index===expanded}"><i class="fa fa-caret-up fa-xs"></i></span>
                </div>
                <transition name="open">
                <div v-if="!isNaN(expanded) && index === expanded" class="answer-box">
                    {{ elm.a }}
                </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Faq',
    data() {
        return {
            faqData: {
                general: [{q: 'Question 1?', a: 'Yes, this is question 1. Yes, this is question 1. Yes, this is question 1.'},
                        {q: 'Question 2?', a: 'Yes, this is question 2. Yes, this is question 2. Yes, this is question 2.'},
                        {q: 'Question 3?', a: 'Yes, this is question 3. Yes, this is question 3. Yes, this is question 3.'},
                        {q: 'Question 4?', a: 'Yes, this is question 4. Yes, this is question 4. Yes, this is question 4.'}],
                travel: [{q: 'Question 5 travel?', a: 'Yes, this is question 5. Yes, this is question 5. Yes, this is question 5.'},
                        {q: 'Question 6 travel??', a: 'Yes, this is question 6. Yes, this is question 6. Yes, this is question 6.'},
                        {q: 'Question 7 travel?', a: 'Yes, this is question 7. Yes, this is question 7. Yes, this is question 7.'},
                        {q: 'Question 8 travel?', a: 'Yes, this is question 8. Yes, this is question 8. Yes, this is question 8.'}],
                application: [],
                judging: [],
                hardware: [],
            },
            selected: 'general',
            expanded: null,
            selectedCategoryStyle: {backgroundColor: 'lightgray', border: '1px solide lightgray', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px'},
        };
    },
});
</script>

<style scoped>
.faq-container {
    display: flex;
    flex-direction: row;
    width: 60%;
    max-height: 350px;
    min-height: 0;
    overflow:scroll;    
    margin: 0 auto;
}
.categories {   
    display: flex;
    flex-direction: column;
    min-width: 190px;
    cursor: pointer;
}
.category-bubble {
    text-align: left;
    font-size: 32px;
    padding: 7%;
}
.faq-area { 
    padding: 2% 5%;
    background-color: lightgray;
    border: 1px solid lightgray;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    overflow: scroll;
}
.question-box {
    font-size: 21px;
    padding: 2% 0;
    padding-bottom: 1%;
    text-align: left;
    display: flex;
    flex-direction: column;
}
.question { 
    cursor: pointer;
    font-weight: 550;
}
.answer-box {
    max-height: 500px;  
    overflow: hidden;
    padding: 2% 0;
    font-size: 16px;
}
.open-enter-active, .open-leave-active {
  transition: max-height 0.2s;

}
.open-enter, .open-leave-to {
  max-height: 0;

}
.arrow {
    -moz-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    display: inline-block;
}
.rotate {
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
</style>
