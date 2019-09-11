<template>
  <div class="faq" id="faqScroll">
    <h1 id="desktop-faq">Frequently Asked Questions</h1>
    <h1 id="mobile-faq">FAQ</h1>
    <div class="faq-container">
      <div class="categories">
        <div
          v-for="name in Object.keys(faqData)"
          :key="name"
          :class="{ 'category-bubble': true, selected: selected === name }"
        >
          <div
            :style="{ width: '100%' }"
            @click="
              selectCategory(name)
            "
          >{{ name.charAt(0).toUpperCase() + name.substring(1) }}</div>
          <transition name="open">
            <div :key="name + 's'" v-if="selected === name" class="mobile-faq-area">
              <div
                v-for="(elm, index) in faqData[selected]"
                :key="elm.q"
                @click="toggleQuestion(index)"
                class="question-box"
              >
                <div class="question">
                  {{ elm.q }}
                  <span :class="{ arrow: true, rotate: index === expanded }">
                    <i class="fa fa-caret-up fa-xs"></i>
                  </span>
                </div>
                <transition name="open">
                  <div v-if="expanded.includes(index)" class="answer-box">{{ elm.a }}</div>
                </transition>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="faq-area">
        <div
          v-for="(elm, index) in faqData[selected]"
          :key="elm.q"
          class="question-box"
        >
          <div class="question" @click="toggleQuestion(index)">
            {{ elm.q }}
            <span :class="{ arrow: true, rotate: index === expanded }">
              <i class="fa fa-caret-down fa-xs"></i>
            </span>
          </div>
          <transition name="open">
            <div v-if="expanded.includes(index)" class="answer-box">{{ elm.a }}</div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import faqData from '@/data/faq_data.ts';

export default Vue.extend({
  name: 'Faq',
  props: ['initialSelect'],
  data(): { faqData: any; selected: string; expanded: number[] } {
    return {
      faqData,
      selected: '',
      expanded: [0],
    };
  },
  methods: {
    isMobile: (): boolean => window.innerWidth <= 700,
    toggleQuestion(index: number) {
      if (!this.expanded.includes(index)) {
        this.expanded.push(index);
      } else {
        this.expanded = this.expanded.filter((each) => each !== index);
      }
    },
    selectCategory(name: string) {
      this.selected = this.selected !== name ? name : this.isMobile() ? '' : this.selected;
      this.expanded = [0];
    },
  },
  created(): void {
    this.selected = !this.isMobile() ? this.initialSelect : '';
  },
});
</script>

<style scoped>
.faq {
  display: flex;
  flex-direction: column;
}

.faq h1 {
  padding-left: 10%;
  padding-bottom: 1%;
  font-weight: 800;
  font-size: 38px;
}

#mobile-faq {
  display: none;
}

#desktop-faq {
  display: block;
}

.faq-container {
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 400px;
  /* overflow: scroll; */
  overflow: hidden;
  margin: 0 auto;
}

.categories {
  display: flex;
  flex-direction: column;
  min-width: 220px;
  padding-top: 3%;
  cursor: pointer;
}

.category-bubble {
  text-align: left;
  font-size: 22px;
  padding: 6%;
}

.selected {
  font-size: 29px;
  font-weight: 800;
}

.faq-area {
  padding: 2% 5%;
  border: 2px solid lightgray;
  border-radius: 25px;
  width: 100%;
  margin-left: 0.5%;
  /* overflow: scroll; */
  overflow: auto;
}

.mobile-faq-area {
  max-height: 300px;
  overflow: auto;
  display: none;
}

.faq-area {
  display: block;
}

.question-box {
  font-size: 19px;
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

.open-enter-active,
.open-leave-active {
  transition: max-height 0.2s;
}

.open-enter,
.open-leave-to {
  max-height: 0;
}

.arrow {
  -moz-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  display: inline-block;
  float: right;
}

.rotate {
  -ms-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

@media only screen and (max-width: 700px) {
  .faq-container {
    display: flex;
    flex-direction: column;
  }
  .faq h1 {
    padding: 0;
  }
  .categories {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .category-bubble {
    text-align: center;
    font-size: 22px;
    padding: 2%;
    padding-bottom: 5%;
  }
  .selected {
    font-size: 30px;
    font-weight: 800;
  }
  .faq-container {
    height: 700px;
    width: 90%;
  }
  .answer-box {
    font-weight: 400;
  }
  #desktop-faq {
    display: none;
  }
  #mobile-faq {
    display: block;
  }
  .mobile-faq-area {
    display: block;
    padding: 3%;
  }
  .faq-area {
    display: none;
  }
  .open-enter-active,
  .open-leave-active {
    transition: max-height 0.3s;
  }
}
</style>
