<template>
  <p>This is an example component - hi {{teamName}} team</p>
</template>

<script lang="ts">
import Vue from 'vue';

interface SampleState {
    teamName: string;
}

export default Vue.extend({
    data(): SampleState {
        return {
            teamName: 'Tech',
        };
    },
});
</script>

<style>
p {
    text-align: center;
}
</style>