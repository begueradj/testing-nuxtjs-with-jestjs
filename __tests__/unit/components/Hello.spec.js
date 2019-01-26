import Vue from 'vue'
import Hello from "@/components/Hello.vue"

describe("Hello component", () => {
  it("renders correctly", () => {
    const comp = new Vue(Hello).$mount()
    comp.name = "Camel"
    comp.$nextTick( () => {
      expect(comp.$el).toMatchSnapshot()
    })
  })
})


