import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import Slides from '../../src/components/slides'
import SlidesItem from '../../src/components/slides-item'
import {shallowMount, mount} from '@vue/test-utils'

Vue.config.productionTip = false
Vue.config.devtools = false
chai.use(sinonChai)
// 使用karma框架的单元测试的高级写法
describe('Slides', () => {
    // BDD 行为驱动测试（行为描述），由 Mocha 引入
    // describe human
    //   it has a head
    //   it has two eyes

    // 用 it 来实现作用域隔离，每一个 it 是一个测试用例
    // it 和 describe 来源于 mocha
    it('存在.', () => {
        // 在 it 中进行断言
        expect(Slides).to.exist
    })

    it('接受 VnSlidesItem，默认显示第一个', (done) => {
        Vue.component('VnSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false
            },
            slots: {
                default: `
                <vn-slides-item name="1">
                    <div class="box1">1</div>
                </vn-slides-item>
                <vn-slides-item name="2">
                    <div class="box2">2</div>
                </vn-slides-item>
                <vn-slides-item name="3">
                    <div class="box3">3</div>
                </vn-slides-item>
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box1')).to.exist
            done()
        })
    })
    it('selected 是几，选中的就是几', (done) => {
        Vue.component('VnSlideItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
                selected: '2'
            },
            slots: {
                default: `
                <vn-slides-item name="1">
                    <div class="box1">1</div>
                </vn-slides-item>
                <vn-slides-item name="2">
                    <div class="box2">2</div>
                </vn-slides-item>
                <vn-slides-item name="3">
                    <div class="box3">3</div>
                </vn-slides-item>
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box2').exists()).to.be.true
            done()
        })
    })
    it('点击第二个就展示第二个', (done) => {
        Vue.component('VnSlideItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
                selected: '1'
            },
            slots: {
                default: `
                <vn-slides-item name="1">
                    <div class="box1">1</div>
                </vn-slides-item>
                <vn-slides-item name="2">
                    <div class="box2">2</div>
                </vn-slides-item>
                <vn-slides-item name="3">
                    <div class="box3">3</div>
                </vn-slides-item>
                `
            },
            listeners: {
                'update:selected': (x) => {
                    expect(x).to.eq('2')
                    done()
                }
            }
        })
        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger('click')
        })
    })
})
