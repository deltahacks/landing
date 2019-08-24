<template>
  <div class="faq">
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
            @click="selected = selected === name ? '' : name"
          >
            {{ name.charAt(0).toUpperCase() + name.substring(1) }}
          </div>
          <transition name="open">
            <div
              :key="name + 's'"
              v-if="selected === name"
              class="mobile-faq-area"
            >
              <div
                v-for="(elm, index) in faqData[selected]"
                :key="elm.q"
                @click="expanded = expanded !== index ? index : null"
                class="question-box"
              >
                <div class="question">
                  {{ elm.q }}
                  <span :class="{ arrow: true, rotate: index === expanded }"
                    ><i class="fa fa-caret-up fa-xs"></i
                  ></span>
                </div>
                <transition name="open">
                  <div
                    v-if="!isNaN(expanded) && index === expanded"
                    class="answer-box"
                  >
                    {{ elm.a }}
                  </div>
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
          @click="expanded = expanded !== index ? index : null"
          class="question-box"
        >
          <div class="question">
            {{ elm.q }}
            <span :class="{ arrow: true, rotate: index === expanded }"
              ><i class="fa fa-caret-up fa-xs"></i
            ></span>
          </div>
          <transition name="open">
            <div
              v-if="!isNaN(expanded) && index === expanded"
              class="answer-box"
            >
              {{ elm.a }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Faq',
  props: ['initialSelect'],
  data(): { faqData: any; selected: string; expanded: string | null } {
    return {
      faqData: {
        'general 🙋': [
          {
            q: 'What is a hackathon?',
            a:
              'A hackathon is just a fancy word for a technical competition! We provide our attendees the opportunity to work with new people on cool ideas, and the resources necessary to make those ideas come to life. We do not condone nor do we allow any actual hacking or other illegal activities!',
          },
          {
            q: 'What is DeltaHacks?',
            a:
              "DeltaHacks is McMaster's annual student hackathon. This year, DeltaHacks will be a 500-participant event taking place late January. We hope to inspire students to hack for positive changes that align with their passions - whether it's environment, health, inequality, education, etc. And hence the name “delta” - as “Δ” stands for change.",
          },
          {
            q: 'Who can participate?',
            a:
              'Anyone who is willing to learn and wants to take a shot at changing the world is strongly encouraged to apply. All university students and high school students over 18 are welcome at DeltaHacks!',
          },
          {
            q: 'How much does it cost?',
            a:
              'Absolutely nothing! We will provide you with everything you need: venue, food, Wi-Fi, etc. All you need to do is show up, bring a laptop, and be ready to have fun!',
          },
        ],
        'logistics 🚌': [
          {
            q: 'Is there travel reimbursement?',
            a:
              'DeltaHacks will be providing bussing to and from various universities across Ontario. In the past, we’ve sent busses to institutes, such as the University of Toronto and the University of Waterloo. Unfortunately, we will not be able to provide travel reimbursement for personal travel.',
          },
          {
            q: 'I have never been to a hackathon before, what should I do?',
            a:
              "We love first time hackers! We will be providing mentors during the hackathon and running workshops. You can even read on one of our execs' experience when she started here to see how easy and fun it really is to learn at the hackathon.",
          },
        ],
        'application 📨': [],
        'judging 👨‍⚖️': [],
        'hardware 🧰': [],
      },
      selected: 'kk',
      expanded: null,
    };
  },
  methods: {
    isMobile: (): boolean => window.innerWidth <= 700,
  },
  created() {
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
  height: 350px;
  overflow: scroll;
  margin: 0 auto;
}
.categories {
  display: flex;
  flex-direction: column;
  min-width: 190px;
  padding-top: 3%;
  cursor: pointer;
}
.category-bubble {
  text-align: left;
  font-size: 22px;
  padding: 6%;
}
.selected {
  font-size: 32px;
  font-weight: 800;
}
.faq-area {
  padding: 2% 5%;
  border: 2px solid lightgray;
  width: 100%;
  margin-left: 0.5%;
  overflow: scroll;
}
.mobile-faq-area {
  max-height: 300px;
  overflow: hidden;
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
