<template>
    <div :class="['container', align]">
        <h2 class="heading">{{ header }}</h2>
        <div id='corner' :class="['description', align]">
            <p v-html="body"></p>
            <form v-if="hasButton" :action="buttonLink">
                <input class="button" type="submit" :value="buttonText">
            </form>
        </div>
        <form :class='align' v-if="hasButton" :action="buttonLink">
            <input :class="['mbutton', align]" type="submit" :value="buttonText">
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        align: {
            type: String,
            default: 'right',
        },
        header: {
            type: String,
            default: 'Placeholder Header',
        },
        body: {
            type: String,
            default: `At DeltaHacks, we believe change comes from dreaming big. Each year we enable over 800 students from across Canada, working hard over 36 hours, to bring their big ideas to life. Our team works diligently year round to provide a welcoming atmosphere to all of our participants. DeltaHacks gives you the platform to make an idea a reality, whether it be with a team, or on your own. Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at DeltaHacks VI!`,
        },
        hasButton: {
            type: Boolean,
            default: true,
        },
        buttonText: {
            type: String,
            default: 'DeltaHacks VII Button',
        },
        buttonLink: String,
    },
});
</script>

<style scoped>
.right {
  text-align: right;
  padding: 5%;
  text-overflow: ellipsis;
}
#corner.right{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 8vmin 100%, 0 calc(100% - 8vmin));
}

.left {
  text-align: left;
  padding: 5%;
  text-overflow: ellipsis;
}
#corner.left{
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8vmin), calc(100% - 8vmin) 100%, 0 100%);
}

.center {
  text-align: center;
  padding: 5%;
  text-overflow: ellipsis;
}
#corner.center{
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8vmin), calc(100% - 8vmin) 100%, 8vmin 100%, 0 calc(100% - 8vmin));
}

.heading {
    color: white;
    padding: 2% 3%;
    font-size: 4.5vmin;
    font-weight: 600;
    margin: 0;
}

.description {
    padding: 1% 3%;
    z-index: 40;
    background: rgb(85, 85, 85);
    padding-bottom: 2vh;
}

.button {
    color:white;
    outline: none;
    border: none;
    padding: 1.1vmin 2vmin;
    font-size: 2.7vmin;
    font-weight: 550;
    background-color: rgb(30, 30, 30);
    cursor: pointer;  
    margin: 1.5vh 0;
    -webkit-appearance: none;
}
.button:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.2s;
}
.button:active {
    background-color: rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}

.mbutton {
    color:white;
    outline: none;
    border: none;
    padding: 2vmin 3vmin 2vmin 3vmin;
    font-size: 4.5vmin;
    font-weight: 550;
    background-color: rgb(30, 30, 30);
    cursor: pointer;  
    -webkit-appearance: none;
    display: none;
}
.mbutton:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.2s;
}
.mbutton:active {
    background-color: rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}

p {
    color:white;
    font-size: 2.4vmin;
}

@media screen and (max-width: 720px){
    .heading {
        font-size: 7.25vmin;
        font-weight: 650;
        margin-bottom: 2vmin;
    }
    p {
        color:white;
        font-size: 3.75vmin;
    }
    .description {
        padding: 1vmin 1vmin 1vmin 1vmin;
        z-index: 40;
        background: rgb(85, 85, 85);
    }
    .button {
        display: none;
    }

    .mbutton {
        display: initial;
    }

    #corner.right{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 12.5vmin 100%, 0 calc(100% - 12.5vmin));
    }

    #corner.left{
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12.5vmin), calc(100% - 12.5vmin) 100%, 0 100%);
    }

    #corner.center{
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12.5vmin), calc(100% - 12.5vmin) 100%, 12.5vmin 100%, 0 calc(100% - 12.5vmin));
    }

    .container {
        width: 100%;
        text-align: center;
        
    }
    .container > h2 {
        padding: 0 5%;
    }
    .description > p {
        padding: 0 5%;
    }
    .container > button {
        margin: 0 5%;
    }
}

</style>