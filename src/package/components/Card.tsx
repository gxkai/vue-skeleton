import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import Vue from 'vue'
import style from '../style/style.less'

@Component
class CardCom extends BaseComponent {
  public static componentName: string = 'Card'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(CardCom.componentName, CardCom)
  public name: string = 'Card'
  public mounted() {
    // tslint:disable-next-line:no-console
  }
  public render(h) {
    const { type, title = false, options, loading = false, active = false, start = true, center = false, end = false } = this.$props
    const { width = '100%', height = '100%' } = options

    const styleC = {
      width: width,
      height: height,
      overflow: 'hidden',
      margin: 'auto'
    }

    return (
      <div class={[style.card]} style="margin: '15%'">
        <div style={[styleC]} class={[active ? style.progActive : style.prog]}></div>
      </div>
    )
  }
}

export default CardCom