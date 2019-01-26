import Vue from 'vue'
import { mount } from '@vue/test-utils'
import BooksList from '@/components/BooksList.vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

describe("BooksList component", () => {
    it("renders correctly", () => {
        expect(true).toBe(true)
    })
})

describe("test 2", () => {
  it("test 2", () => {
    // const bookslist = new Vue(BooksList).$mount()
    // console.log(bookslist.book)
    
    // const bookslist = Vue.extend(BooksList)
    // const vm = new bookslist().$mount()
    // console.log(vm.book)
    
    const wrapper = mount(BooksList)
    const vm = wrapper.vm
    console.log(vm.book)
    expect(vm.book).toContain('JavaScript')

    vm.book = "Java"
    // expect(vm.book).toMatchSnapshot()
    vm.$nextTick(() => {
      expect(vm.$el).toMatchSnapshot()
    })
  })
})

