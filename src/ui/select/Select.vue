/*
<template>
  <div
    class="d-select">
    <div class="d-select-selections"
         @click="toggleMenu">
      <slot name="input">
        <div class="d-tag d-tag-checked" v-for="(item, index) in options">
          <span class="d-tag-text">{{ item.label }}</span>
          <Icon type="ios-close-empty" @click.native.stop="removeTag(index)"></Icon>
        </div>
        <span :class="[prefixCls + '-placeholder']" >{{ $t('localePlaceHolder') }}</span>
        <span :class="[prefixCls + '-selected-value']">{{ selectedSingle }}</span>
        <input
          :id="elementId"
          type="text"
          v-if="filterable"
          v-model="query"
          :disabled="disabled"
          :class="[prefixCls + '-input']"
          :placeholder="showPlaceholder ? localePlaceholder : ''"
          :style="inputStyle"
          autocomplete="off"
          spellcheck="false"
          @blur="handleBlur"
          @keydown="resetInputState"
          @keydown.delete="handleInputDelete"
          ref="input">
      </slot>
    </div>
  </div>
</template>

<script>
  import localeMessage from './Select.i18n.js'
  import Icon from '../icon'
  import i18n from '@/library/i18n'

  const prefixCls = 'd-select'

  export default {
    name: 'dSelect',

    beforeCreate () {
      i18n(localeMessage)
    },

    componentName: 'dSelect',

    components: {
      Icon
    },
    props: {
      value: {
        type: [String, Number, Array],
        default: ''
      },

      label: {
        type: [String, Number, Array],
        default: ''
      },

      disabled: {
        type: Boolean,
        default: false
      },

      clearable: {
        type: Boolean,
        default: false
      },

      filterable: {
        type: Boolean,
        default: false
      },

      filterMethod: {
        type: Function
      },

      transfer: {
        type: Boolean,
        default: false
      },

      autoComplete: {
        type: Boolean,
        default: false
      },
      name: {
        type: String
      },
      elementId: {
        type: String
      },

      selectionLocales: Object,

      selectController: Function
    },

    data () {
      return {
        prefixCls: prefixCls,
        currentLabel: this.label,
        defaultLocale: 'en-US',
        model: this.value,
        options: [],
        selectedSingle: ''    // label
      }
    },

    computed: {
    },

    methods: {
      toggleMenu () {
        console.log('asd')
      }
    }
  }
</script>

<style lang="scss">
  .d-select {
    display:inline-block;
    border:1px solid red;
    width:8rem;
    height:100%;
    select {
      width:100%;
      height:100%;
    }
  }
</style>
*/
