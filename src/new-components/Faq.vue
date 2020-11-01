<template>
  <div class="faq" id="faqScroll">
    <h1 id="desktop-faq">FAQ - Frequently Asked Questions</h1>
    <h1 id="mobile-faq">FAQ</h1>
    <div class="faq-container">
      <div class="categories">
        <div
          v-for="name in Object.keys(faqData)"
          :key="name"
          :class="{ 'category-bubble': true, selected: selected === name }"
          
        >
          <div class="category-name" @click="selectCategory(name)">
            {{
            name.charAt(0).toUpperCase() + name.substring(1)
            }}
          </div>
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
                    <i v-if="expanded.includes(index)" class="fa fa-caret-up fa-xs"></i>
                    <i v-else class="fa fa-caret-down fa-xs"></i>
                  </span>
                </div>
                <transition name="open">
                  <div v-if="expanded.includes(index)" class="answer-box">
                    {{
                    elm.a
                    }}
                  </div>
                </transition>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="faq-area">
        <div v-for="(elm, index) in faqData[selected]" :key="elm.q" class="question-box">
          <div class="question" @click="toggleQuestion(index)">
            {{ elm.q }}
            <span :class="{ arrow: true }">
              <i v-if="expanded.includes(index)" class="fa fa-caret-up fa-xs"></i>
              <i v-else class="fa fa-caret-down fa-xs"></i>
            </span>
          </div>
          <transition name="open">
            <div v-if="expanded.includes(index)" class="answer-box">
              {{
              elm.a
              }}
            </div>
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
      if (this.selected !== name) {
        this.selected = name;
        this.expanded = [0];
      } else {
          if (this.isMobile()) {
          this.selected = '';
        }
      }

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
  font-family: 'Montserrat', sans-serif;
}

.faq h1 {
  font-weight: 700;
  font-size: 44px;
}

#mobile-faq {
  text-align: center;
  display: none;
}

#desktop-faq {
  display: block;
  text-align: center;
}

.faq-container {
  display: flex;
  flex-direction: row;
  width: 65%; 
  height: 350px;
  overflow: hidden;
  margin: 0 auto;
  background:rgba(70, 70, 70, 1);
  color: rgba(255, 255, 255, 1);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0% 50%);
}

.categories {
  display: flex;
  flex-direction: column;
  min-width: 220px;
  padding-top: 3%;
  cursor: pointer;
  background:rgba(0,0,0,0.3); 
}

.category-bubble {
  text-align: left;
  font-size: 20px;
  transition: 0.1s ease-in-out;
  margin-left: 10px; 
  margin-right: 10px; 
  margin-top: 2.5px;
  margin-bottom: 2.5px;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 93% 100%, 0 100%, 0% 50%);
  transition:0.2s; 
}

.category-bubble:hover {
  background:rgba(0,0,0,0.2);
}

.category-name {
  padding: 8% 10%;
  font-size: 28px;
}

.selected {
  font-size: 20px;
  background:rgba(0,0,0,0.4); 
}

.faq-area {
  padding-left: 4%;
  padding-right: 8%;
  padding-top: 2%;
  width: 100%;
  overflow: auto;
  position: relative;
  z-index: 40;
  background: rgba(255, 255, 255, 0.15);
  text-align: center;
  padding-bottom: 2vh;
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
  font-size: 22px;
  padding: 3% 0;
  padding-bottom: 1%;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.question {
  cursor: pointer;
  font-weight: 600;
}

.answer-box {
  max-height: 500px;
  overflow: hidden;
  padding: 1% 0;
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
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0% 50%); 
    height: 700px; 
    width: 90%; 
    background: none;
  }
 
  .categories {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    background:rgba(100, 100, 100, 1);
  }
  .category-bubble {
    text-align: center;
    font-size: 22px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0% 50%);
  }

  .category-bubble:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .category-name {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .selected {
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    text-decoration: none;
    font-size: 24px; 
    font-weight: 800;
    opacity: 0.99;
    padding: 0px 20px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.2);
    transition: 0.1s ease-in-out;
    cursor: pointer;
    z-index: 10000;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0% 50%);
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

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}

</style>
