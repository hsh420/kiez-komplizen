<template>
  <div :class="['nav', className]">
    <div class="navigations">
      <div class="div">
        <Home class="icon-instance-node" :color="homeColor" />
        <div class="text-wrapper">{{ Home }}</div>
      </div>
      <div class="div">
        <component :is="icon" class="icon-instance-node" />
        <div class="text-wrapper">{{ Suchen }}</div>
      </div>
      <div class="div">
        <PlusCircle class="icon-instance-node" />
        <div class="text-wrapper">{{ Anbieten }}</div>
      </div>
      <div class="div">
        <component :is="override" class="icon-instance-node" />
        <div class="text-wrapper">{{ Nachrichten }}</div>
      </div>
      <div class="div">
        <component :is="icon1" class="icon-instance-node" />
        <div class="text-wrapper">{{ text }}</div>
      </div>
    </div>
    <div class="notch-area" :class="notchAreaClassName" />
  </div>
</template>

<script>
import { Home } from '@/views/HomeView.vue'
import { PlusCircle } from '@/views/OfferView.vue'
import { reactive } from 'vue'

export default {
  name: 'FooterNavigation',
  components: {
    Home,
    PlusCircle
  },
  props: {
    count: {
      type: String,
      default: 'five',
      validator: function (value) {
        return ['five'].indexOf(value) !== -1
      }
    },
    homeColor: {
      type: String,
      default: '#0F172A'
    },
    text: {
      type: String,
      default: 'Account'
    },
    className: {
      type: String,
      default: ''
    },
    navigationsClassName: {
      type: String,
      default: ''
    },
    divClassName: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: () => ({
        render: () => {}
      })
    },
    divClassNameOverride: {
      type: String,
      default: ''
    },
    divClassName1: {
      type: String,
      default: ''
    },
    override: {
      type: Object,
      default: () => ({
        render: () => {}
      })
    },
    divClassName2: {
      type: String,
      default: ''
    },
    icon1: {
      type: Object,
      default: () => ({
        render: () => {}
      })
    },
    divClassName3: {
      type: String,
      default: ''
    },
    notchAreaClassName: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const state = reactive({
      homeColor: props.homeColor,
      text: props.text
    })
    return {
      state
    }
  }
}
</script>

<style>
.nav {
  align-items: flex-start;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 428px;
}

.nav .navigations {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  height: 62px;
  position: relative;
  width: 100%;
}

.nav .div {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 0px 8px;
  position: relative;
}

.nav .icon-instance-node {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}

.nav .text-wrapper {
  align-self: stretch;
  color: #0f172a;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 12px;
  font-weight: 500;
  height: 16px;
  letter-spacing: -0.05px;
  line-height: normal;
  position: relative;
  text-align: center;
}

.nav .notch-area {
  align-self: stretch;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
</style>
